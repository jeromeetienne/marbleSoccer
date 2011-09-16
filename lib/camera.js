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
	camera.position.y = player.mesh().position.y + 100;
	camera.position.z = player.mesh().position.z + 500;
		
	camera.target.position	= player.mesh().position;

return;
	var player2Enemy	= new THREE.Vector3();
	player2Enemy.sub( enemy.mesh().position, player.mesh().position);

	vector	= player2Enemy.normalize().negate().multiplyScalar( 100 );

	camera.position.add( player.mesh().position, vector );
	camera.position.y	= Marble.tileSize;

	camera.position.y	= Marble.tileSize;

	camera.target.position	= enemy.mesh().position.clone();
}

