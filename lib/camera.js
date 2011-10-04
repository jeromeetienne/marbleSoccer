/**
*/
Marble.Camera	= function()
{
	this._object		= new THREE.Camera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
	this._relativePos	= new THREE.Vector3(0, 300, 400);
	// for debug
	//this._relativePos	= new THREE.Vector3(60, 1000, 0);
}

Marble.Camera.prototype.object	= function()
{
	return this._object;
}

Marble.Camera.prototype.tick	= function()
{
	var camera	= this._object;
	var player	= world.player();
	
	camera.position.add( player.mesh().position, this._relativePos);	
	camera.target.position.copy( player.mesh().position );
}

