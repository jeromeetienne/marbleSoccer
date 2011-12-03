/** @namespace */
var THREEx	= THREEx 		|| {};
THREEx.Particle	= THREEx.Particle	|| {};

THREEx.Particle.Emitter	= function(params)
{
	this._params	= params	|| console.assert(false);
	this._nbItems	= this._params.nbItems !== undefined ? this._params.nbItems : 5000;

	this._items	= [];

	this._createGeometry();
	this._createMaterial();

	this._particleSys	= new THREE.ParticleSystem( this._geometry, this._material );
}

THREEx.Particle.Emitter.prototype.destroy	= function()
{
}


THREEx.Particle.Emitter.prototype.container	= function(){	return this._particleSys;	}

/**
 * Create the geometry for all the particles
*/
THREEx.Particle.Emitter.prototype._createGeometry	= function()
{
	this._geometry	= new THREE.Geometry();
	for(var i = 0; i < this._nbItems; i++){
		var item	= new THREEx.Particle.item();
		this._items.push(item);
		this._geometry.vertices.push( new THREE.Vertex( item.position() ) );
	}
}

/**
 * Create the material
*/
THREEx.Particle.Emitter.prototype._createMaterial	= function()
{
	var attributes = {
		aRotation	: { type: 'f', value: [] },
		aSize		: { type: 'f', value: [] },
		aColor		: { type: 'c', value: [] },
		aOpacity	: { type: 'f', value: [] }
	};

	for(var i = 0; i < this._nbItems; i++ ){
		attributes.aSize	.value[i]	= 8;
		attributes.aRotation	.value[i]	= 0;
		attributes.aColor	.value[i]	= new THREE.Color( 0x000000 );
		attributes.aOpacity	.value[i]	= 1.0;
	}

	var uniforms = {
		color		: { type: "c", value: new THREE.Color( 0xFFFFFF ) },
		texture		: { type: "t", texture: THREE.ImageUtils.loadTexture( this._params.textureUrl ) }
	};

	this._material = new THREE.MeshShaderMaterial({
		uniforms	: uniforms,
		attributes	: attributes,

		vertexShader	: THREEx.Particle.Emitter._vertexShaderText,
		fragmentShader	: THREEx.Particle.Emitter._fragmentShaderText,


		depthTest	: false,
		//depthWrite	: false,

		blending	: THREE.AdditiveBlending,
		transparent	: true

	});
}

/**
 * Emit one particle
*/
THREEx.Particle.Emitter.prototype._emitItem	= function(itemIdx)
{
	var item	= this._items[itemIdx];
	var opts	= {};
	var randomValue	= function(value, range) {
		return (value-range) + Math.random()*(2*range); 
	};

	opts.position	= new THREE.Vector3(0, 0, 0);

	var originZa	= randomValue(this._params.originZaValue, this._params.originZaRange);
	opts.position.x	= Math.cos(originZa);
	opts.position.y	= Math.sin(originZa);
	opts.position.z	= randomValue(this._params.originZhValue, this._params.originZhRange);

	var originRadius= randomValue(this._params.originRadiusValue, this._params.originRadiusRange)
	opts.position.normalize().multiplyScalar( originRadius );

	opts.deleteIn	= this._params.timeToLive;

	var speedScalar	= randomValue(this._params.speedValue, this._params.speedRange);
	opts.speed	= new THREE.Vector3();
	opts.speed.copy(opts.position);
	opts.speed.normalize().multiplyScalar( speedScalar );


	opts.speedMul	= new THREE.Vector3(1.0, 1.0, 1.0);
	opts.speedInc	= new THREE.Vector3(0, 0, 0);
	opts.speedInc.addSelf(new THREE.Vector3(0, - this._params.gravity, 0));

	opts.color	= new THREE.Color().setRGB(this._params.color.r, this._params.color.g, this._params.color.b);
	opts.colorInc	= new THREE.Color().setRGB(this._params.colorInc.r, this._params.colorInc.g, this._params.colorInc.b)
	
	opts.rotation	= this._params.rotationSrc;
	opts.rotationInc= this._params.rotationInc;

	opts.size	= this._params.sizeSrc;
	opts.sizeInc	= this._params.sizeInc;

	opts.opacity	= this._params.opacitySrc;
	opts.opacityInc	= this._params.opacityInc;

	item.start(opts);
}


/**
 * Update the particle emitter
*/
THREEx.Particle.Emitter.prototype.update	= function()
{
	var geometry	= this._particleSys.geometry;
	var material	= this._particleSys.materials[0];
	var attributes	= material.attributes;
	
	// compute the deltaTime in msec since the last update - with 60hz by default
	if( ! this._lastUpdateAt )	this._lastUpdateAt = Date.now() - 1/60 * 1000;
	var deltaTime		= Date.now() - this._lastUpdateAt;
	this._lastUpdateAt	= Date.now();

	// emit particle if needed
	// TODO should emitRate be dependant of time ?
	for(var i = 0, nbEmitted = 0; i < this._nbItems && nbEmitted < this._params.emitRate; i++){
		var item	= this._items[i];
		if( item.isDead() === false )	continue;
		this._emitItem(i);
		nbEmitted++;
	}
	
	// update each item
	for(var i = 0; i < this._nbItems; i++){
		var item	= this._items[i];
		item.update(deltaTime);

		var vertex	= geometry.vertices[i];
		vertex.position.copy( item.position() );

		// update the attributes
		attributes.aSize	.value[i]	= item.size();
		attributes.aRotation	.value[i]	= item.rotation();
		attributes.aColor	.value[i]	= item.color();
		attributes.aOpacity	.value[i]	= item.opacity();
	}

	// mark the attributes as dirty
	attributes.aSize	.needsUpdate	= true;
	attributes.aRotation	.needsUpdate	= true;
	attributes.aColor	.needsUpdate	= true;
	attributes.aOpacity	.needsUpdate	= true;

	// mark geometry as dirty
	geometry.__dirtyVertices = true;
}

//////////////////////////////////////////////////////////////////////////////////
//		Shader source							//
//////////////////////////////////////////////////////////////////////////////////

THREEx.Particle.Emitter._vertexShaderText	= [
	"attribute	float	aSize;",
	"attribute	float	aRotation;",
	"attribute	vec3	aColor;",
	"attribute	float	aOpacity;",

	"varying	float	vRotation;",
	"varying	vec3	vColor;",
	"varying	float	vOpacity;",

	"void main() {",
		"gl_Position	= projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		// set the size
		"gl_PointSize	= aSize;",

		// pass the rotation+color+opacity to the fragment shader
		"vRotation	= aRotation;",
		"vColor		= aColor;",
		"vOpacity	= aOpacity;",
	"}"
].join('\n');

THREEx.Particle.Emitter._fragmentShaderText	= [
	"uniform vec3	color;",
	"uniform sampler2D texture;",

	"varying vec3	vColor;",
	"varying float	vOpacity;",
	"varying float	vRotation;",

	"vec2 autoRotation(vec2 p, float angle){",
		"const vec2 offset	= vec2(0.5, 0.5);",
		"vec2 t 	= p - offset;",
		"p.x	= t.x * cos(angle) - t.y * sin(angle);",
		"p.y 	= t.y * cos(angle) + t.x * sin(angle);",
		"return p + offset;",
	"}",

	"void main() {",
		"vec2 coord	= autoRotation(gl_PointCoord, vRotation);",
		"gl_FragColor	= vec4( color * vColor, vOpacity );",
		"gl_FragColor	= gl_FragColor * texture2D( texture, coord );",
	"}"
].join('\n');
