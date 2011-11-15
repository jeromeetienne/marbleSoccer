Marble.VisualFxLightNormal	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {});

	var light	= new THREE.AmbientLight( 0xAAAAAA, 2 );
	scene.addLight( light );
	this._ambient	= light;

	var light	= new THREE.DirectionalLight( 0xcccccc, 1 );
	light.position.set( -10, 10, 5 ).normalize();
	scene.addLight( light );
	this._directional1	= light;

	var light	= new THREE.DirectionalLight( 0x004400, 0.3 );
	light.position.set( 5, 5, -2 ).normalize();
	scene.addLight( light );
	this._directional2	= light;
}

// inherit from Marble.VisualFxLightNormal methods
Marble.VisualFxLightNormal.prototype			= new Marble.VisualFx();
Marble.VisualFxLightNormal.prototype.constructor	= Marble.VisualFx;
Marble.VisualFxLightNormal.prototype.parent		= Marble.VisualFx.prototype;

Marble.VisualFxLightNormal.prototype.destroy	= function()
{
	// call parent class destructor
	this.parent.destroy.call(this);
	
	this._ambient		&& scene.removeLight( this._ambient );
	this._ambient		= null;

	this._directional1	&& scene.removeLight( this._directional1 );
	this._directional1	= null;

	this._directional2	&& scene.removeLight( this._directional2 );
	this._directional2	= null;
}