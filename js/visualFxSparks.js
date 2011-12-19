Marble.VisualFxSparks	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {});

	this._sparks	= new THREEx.Sparks({
		maxParticles	: 1000,
		counter		: new SPARKS.SteadyCounter(70)
	});
	
	scene.add(this._sparks.container());
	
	// setup the emitter
	var emitter	= this._sparks.emitter();

	var hue		= 0;
	var initColorSize	= function() {};
// TODO put that in the threex as a special initializer
	initColorSize.prototype.initialize = function( emitter, particle ){
		hue		+= 0.01;
		if( hue > 1 )	hue	-= 1;
		particle.target.color().setHSV(hue, 0.8, 0.8);
	
		particle.target.size(150);
	};


	emitter.addInitializer(new initColorSize());
	emitter.addInitializer(new SPARKS.Position( new SPARKS.PointZone( new THREE.Vector3(0,0,0) ) ) );
	emitter.addInitializer(new SPARKS.Lifetime(0,2));
	emitter.addInitializer(new SPARKS.Velocity(new SPARKS.PointZone(new THREE.Vector3(0,150,00))));

	emitter.addAction(new SPARKS.Age());
	emitter.addAction(new SPARKS.Move()); 
	emitter.addAction(new SPARKS.RandomDrift(1000,0,1000));
	emitter.addAction(new SPARKS.Accelerate(0,-100,0));
	
	emitter.start();
}

// inherit from Marble.VisualFx methods
Marble.VisualFxSparks.prototype			= new Marble.VisualFx();
Marble.VisualFxSparks.prototype.constructor	= Marble.VisualFx;
Marble.VisualFxSparks.prototype.parent		= Marble.VisualFx.prototype;

Marble.VisualFxSparks.prototype.destroy	= function()
{
	// call parent class destructor
	this.parent.destroy.call(this);

	scene.remove(this._sparks.container());

	this._sparks.destroy();
}

Marble.VisualFxSparks.prototype.update	= function()
{
	this._sparks.update();
}
