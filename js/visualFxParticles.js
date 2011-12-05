Marble.VisualFxParticles	= function(opts)
{
	opts		= opts	|| {};
	var position	= opts.position	|| new THREE.Vector3(0, 0, 0);
	var timeout	= opts.timeout	|| undefined;
	
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {
		timeout	: timeout
	});

	var scale	= 3;
	var parameters	= {
		nbItems		: 500,
		textureUrl	: "tmp/particles-emitter/editor/images/lensFlare/Flare1.png",


		emitRate	: 3,
		timeToLive	: 1000,

		originZaValue	: Math.PI/2,
		originZaRange	: 20 * Math.PI/180,
		originZhValue	: 0,
		originZhRange	: 0,
		originRadiusValue	: 0.5*scale,
		originRadiusRange	: 0.5,

		speedValue	: 1.5	* scale,
		speedRange	: 0.5,

		gravity		: 0.05,
		
		color		: { r: 1.0,  g: 0.33, b: 0.0},
		colorInc	: { r: 0,  g: 0, b: 0},

		opacitySrc	: 1.0,
		opacityInc	: -0,

		sizeSrc		: 32.0,
		sizeInc		: -1.0*0.2,

		rotationSrc	:  0.0,
		rotationInc	:  0.0
	};
	
	// build the emitter
	this._emitter	= new THREEx.Particle.Emitter(parameters);
	// add the container to the scene
	scene.add( this._emitter.container() );
	// set the position of the container
	this._emitter.container().position.copy(position);
}

// inherit from Marble.VisualFxParticles methods
Marble.VisualFxParticles.prototype		= new Marble.VisualFx();
Marble.VisualFxParticles.prototype.constructor	= Marble.VisualFx;
Marble.VisualFxParticles.prototype.parent	= Marble.VisualFx.prototype;

Marble.VisualFxParticles.prototype.destroy	= function()
{
	// call parent class destructor
	this.parent.destroy.call(this);

	scene.removeObject( this._emitter.container() );

	this._emitter.destroy();
	this._emitter	= null;
}

Marble.VisualFxParticles.prototype.update	= function()
{
	this._emitter.update();	
}
