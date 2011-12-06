Marble.VisualFxSparks	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {});


	var particles	= new THREE.Geometry();
	
	var vertexIndexPool = {
		__pools: [],
		// Get a new Vector
		get: function() {
			if( this.__pools.length > 0 )	return this.__pools.pop();
			console.assert(false, "pool ran out!")
			return null;
		},
		// Release a vector back into the pool
		add: function(v){ this.__pools.push(v);	},
	};
	
	
	var particleslength = 10000;				
	for ( i = 0; i < particleslength; i++ ) {
		var position	= new THREE.Vector3();
		particles.vertices.push(new THREE.Vertex(position));
		vertexIndexPool.add(i);
	}
	
	
	function generateSprite() {
		var canvas	= document.createElement( 'canvas' );
		var context	= canvas.getContext( '2d' );
		canvas.width	= canvas.height	= 128;
		
		var gradient	= context.createRadialGradient( canvas.width/2, canvas.height /2, 0, canvas.width /2, canvas.height /2, canvas.width /2 );				
		gradient.addColorStop( 0  , 'rgba(255,255,255,1)' );
		gradient.addColorStop( 0.2, 'rgba(255,255,255,1)' );
		gradient.addColorStop( 0.4, 'rgba(128,128,128,1)' );
		gradient.addColorStop( 1  , 'rgba(0,0,0,1)' );

		context.beginPath();
		context.arc(64, 64, 60, 0, Math.PI*2, false);
		context.closePath();
		
		context.fillStyle	= gradient;
		context.fill();
		
		return canvas;
	}

	
	// Create pools of vectors

	var texture	= new THREE.Texture( generateSprite() );
	texture.needsUpdate = true;

	var attributes	= this._attributes	= {
		size	: { type: 'f', value: [] },
		aColor	: { type: 'c', value: [] }
	};
	
	var uniforms	= {
		amplitude	: { type: "f", value: 1.0 },
		color		: { type: "c", value: new THREE.Color( 0xffffff ) },
		texture		: { type: "t", value: 0, texture: texture } 
	};
					
	var material	= new THREE.ShaderMaterial( {
		uniforms	: uniforms,
		attributes	: this._attributes,
		// TODO remove this from the DOM
		vertexShader	: document.getElementById( 'vertexshaderSparks' ).textContent,
		fragmentShader	: document.getElementById( 'fragmentshaderSparks' ).textContent,

		blending	: THREE.AdditiveBlending,
		depthTest	: false,
		transparent	: true
	});

	this._group	= new THREE.ParticleSystem( particles, material );
	this._group.dynamic	= true;
	//group.sortParticles = true;
	scene.add( this._group );

	var vertices	= this._group.geometry.vertices;
	var valuesSize	= this._attributes.size.value;
	var valuesColor	= this._attributes.aColor.value;
	
	// put some default values
	for(var v = 0; v < vertices.length; v++ ){
		valuesSize[v]	= 50;
		valuesColor[v]	= new THREE.Color( 0x000000 );
		particles.vertices[v].position.x = Number.POSITIVE_INFINITY;
		particles.vertices[v].position.y = Number.POSITIVE_INFINITY;
		particles.vertices[v].position.z = Number.POSITIVE_INFINITY;
	}

	//// EMITTER STUFF

	var setTargetParticle = function() {					
		// Find available vertex index
		var target	= vertexIndexPool.get();
		valuesSize[target] = 100;
		
		return target;
	};
	
	var onParticleCreated = function(particle) {
		var target = particle.target;
		if( !target )	return;

		particles.vertices[target].position = particle.position;						
		valuesColor[target].setHSV(0.5, 0.8, 0.1);
	};
	
	var onParticleDead = function(particle) {
		var target = particle.target;
		if( !target )	return;

		// Hide the particle
		valuesColor[target].setHSV(0, 0, 0);
		particles.vertices[target].position.set(Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
		
		// Mark particle system as available by returning to pool
		vertexIndexPool.add(particle.target);
	};
	
	var emitter	= this._emitter	= new SPARKS.Emitter(new SPARKS.SteadyCounter(70));

	emitter.addInitializer(new SPARKS.Position( new SPARKS.PointZone( new THREE.Vector3(0,0,0) ) ) );
	emitter.addInitializer(new SPARKS.Lifetime(0,3));
	emitter.addInitializer(new SPARKS.Target(null, setTargetParticle));
	emitter.addInitializer(new SPARKS.Velocity(new SPARKS.PointZone(new THREE.Vector3(0,100,00))));
	
	emitter.addAction(new SPARKS.Age());
	emitter.addAction(new SPARKS.Move()); 
	emitter.addAction(new SPARKS.RandomDrift(2*500,500,2*500));
	emitter.addAction(new SPARKS.Accelerate(0,-40,0));
	
	emitter.addCallback("created"	, onParticleCreated	);
	emitter.addCallback("dead"	, onParticleDead	);
	
	emitter.start();
}

// inherit from Marble.VisualFxSparks methods
Marble.VisualFxSparks.prototype			= new Marble.VisualFx();
Marble.VisualFxSparks.prototype.constructor	= Marble.VisualFx;
Marble.VisualFxSparks.prototype.parent		= Marble.VisualFx.prototype;

Marble.VisualFxSparks.prototype.destroy	= function()
{
	// call parent class destructor
	this.parent.destroy.call(this);

	this._emitter.stop();
	
	scene.remove( this._group );
}

Marble.VisualFxSparks.prototype.update	= function()
{
	this._group.geometry.__dirtyVertices	= true;
	this._group.geometry.__dirtyColors	= true;
	this._attributes.size.needsUpdate	= true;
	this._attributes.aColor.needsUpdate	= true;
}
