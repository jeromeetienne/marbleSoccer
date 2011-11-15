Marble.VisualFxLightNormal	= function()
{
	// put that in a Marble.VisualLight base class and put it in framework
	this._timeToLive	= 5*1000;
	this._timeoutId		= setTimeout(function(){
		this.trigger('autodestroy');
	}.bind(this), this._timeToLive);
	
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

// mixin MicroEvent
MicroEvent.mixin(Marble.VisualFxLightNormal);


Marble.VisualFxLightNormal.prototype.destroy	= function()
{
	console.log("kk")
	this._timeoutId		&& clearTimeout(this._timeoutId)
	this._timeoutId		= null;

	this._ambient		&& scene.removeLight( this._ambient );
	this._ambient		= null;

	this._directional1	&& scene.removeLight( this._directional1 );
	this._directional1	= null;

	this._directional2	&& scene.removeLight( this._directional2 );
	this._directional2	= null;
}