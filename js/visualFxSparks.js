Marble.VisualFxSparks	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {});

	this._emitter	= new THREEx.Sparks.Emitter({
		maxParticles	: 10000
	});
	
	scene.add(this._emitter.container());
}

// inherit from Marble.VisualFxSparks methods
Marble.VisualFxSparks.prototype			= new Marble.VisualFx();
Marble.VisualFxSparks.prototype.constructor	= Marble.VisualFx;
Marble.VisualFxSparks.prototype.parent		= Marble.VisualFx.prototype;

Marble.VisualFxSparks.prototype.destroy	= function()
{
	// call parent class destructor
	this.parent.destroy.call(this);

	scene.remove(this._emitter.container());

	this._emitter.destroy();
}

Marble.VisualFxSparks.prototype.update	= function()
{
	this._emitter.update();
}
