/**
*/
Marble.Camera	= function()
{
	this._object	= new THREE.Camera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
	this._object.position.y	= 100;
	this._object.position.z	= 500;
}

Marble.Camera.prototype.object	= function()
{
	return this._object;
}

Marble.Camera.prototype.tick	= function()
{
	var camera	= this._object;
	var player	= world.player();
	camera.position.x = player.mesh().position.x;
	camera.position.y = player.mesh().position.y + 300;
	camera.position.z = player.mesh().position.z + 400;
		
	camera.target.position.copy( player.mesh().position );
}

