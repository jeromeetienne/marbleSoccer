Marble.VisualFxLightRed	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {
		timeout	: 5*1000
	});

	var light	= new THREE.AmbientLight( 0xAA0101, 2 );
	scene.add( light );
	this._ambient	= light;

	var light	= new THREE.DirectionalLight( 0xcc0000, 1 );
	light.position.set( -10, 10, 5 ).normalize();
	scene.add( light );
	this._directional1	= light;

	var light = new THREE.DirectionalLight( 0x004400, 3 );
	light.position.set( 5, 5, -2 ).normalize();
	scene.add( light );
	this._directional2	= light;
}

// inherit from Marble.VisualFxLightRed methods
Marble.VisualFxLightRed.prototype		= new Marble.VisualFx();
Marble.VisualFxLightRed.prototype.constructor	= Marble.VisualFx;
Marble.VisualFxLightRed.prototype.parent	= Marble.VisualFx.prototype;

Marble.VisualFxLightRed.prototype.destroy	= function()
{
	// call parent class destructor
	this.parent.destroy.call(this);

	this._ambient && scene.remove( this._ambient );
	this._ambient	= null;

	this._directional1 && scene.remove( this._directional1 );
	this._directional1	= null;

	this._directional2 && scene.remove( this._directional2 );
	this._directional2	= null;
}