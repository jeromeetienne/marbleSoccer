Marble.VisualFxLightNormal	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {});

	var light	= new THREE.AmbientLight( 0xAAAAAA );
	scene.add( light );
	this._ambient	= light;

	var light	= new THREE.DirectionalLight( 0x8888FF, 2 );
	light.position.set( -10, 15, 4 ).normalize();
	scene.add( light );
	this._directional1	= light;

	var light	= new THREE.DirectionalLight( 0x884420, 3 );
	light.position.set( 5, 5, -2 ).normalize();
	scene.add( light );
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
	
	this._ambient		&& scene.remove( this._ambient );
	this._ambient		= null;

	this._directional1	&& scene.remove( this._directional1 );
	this._directional1	= null;

	this._directional2	&& scene.remove( this._directional2 );
	this._directional2	= null;
}