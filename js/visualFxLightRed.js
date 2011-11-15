Marble.VisualFxLightRed	= function()
{
	var light	= new THREE.AmbientLight( 0xAA0000, 2 );
	scene.addLight( light );
	this._ambient	= light;

	var light	= new THREE.DirectionalLight( 0xcc0000, 1 );
	light.position.set( -10, 10, 5 ).normalize();
	scene.addLight( light );
	this._directional1	= light;

	var light = new THREE.DirectionalLight( 0x004400, 0.3 );
	light.position.set( 5, 5, -2 ).normalize();
	scene.addLight( light );
	this._directional2	= light;
}

Marble.VisualFxLightRed.prototype.destroy	= function()
{
	scene.removeLight( this._ambient );
	this._ambient	= null;

	scene.removeLight( this._directional1 );
	this._directional1	= null;

	scene.removeLight( this._directional2 );
	this._directional2	= null;
}