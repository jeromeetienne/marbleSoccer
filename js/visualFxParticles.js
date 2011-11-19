Marble.VisualFxParticles	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {
		//timeout	: 10*1000
	});

	var scale	= Marble.tileSize;
	scale	= 3;
	var parameters	= {
		nbItems		: 10000,
		textureUrl	: "tmp/particles-emitter/editor/images/lensFlare/Flare1.png",


		emitRate	: 30,
		timeToLive	: 2000,

		originZaValue	: Math.PI/2,
		originZaRange	: 30 * Math.PI/180,
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
		opacityInc	: 0.0,

		sizeSrc		: 16.0,
		sizeInc		:  0.0,

		rotationSrc	:  0.0,
		rotationInc	:  0.0
	};
	
	// build the emitter
	this._emitter	= new THREEx.Particle.Emitter(parameters);
	scene.addObject( this._emitter.container() );
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
