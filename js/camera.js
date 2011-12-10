/**
*/
Marble.Camera	= function()
{
	this._object		= new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
	this._relativePos	= new THREE.Vector3(0, 300, 400);
	// for debug
	//this._relativePos	= new THREE.Vector3(0, 75*0.5, 150);
	//this._relativePos	= new THREE.Vector3(0, 600, 10);
	//this._relativePos	= new THREE.Vector3(0, 1.5*Marble.tileSize/2, 0);
	
	scene.add( this._object );
}

Marble.Camera.prototype.object	= function()
{
	return this._object;
}

Marble.Camera.prototype.tick	= function()
{
	var camera	= this._object;
	var player	= gameLevel.player();

	camera.position.add( player.mesh().position, this._relativePos);
	//camera.lookAt( player.mesh().position );
	
if( player.fpsControl().isActivated() ){
	var angleY	= player.fpsControl().angleY();
	camera.rotation.y	= angleY;
	camera.position.copy( player.mesh().position );
	camera.position.y	+= 1.2*Marble.tileSize/2;
	return;
}
	
if(false){
	var target	= player.mesh().position.clone();
	var direction	= Math.PI/2;
	var distance	= 500;
	target.x	+= Math.cos(direction)*distance;
	target.z	-= Math.sin(direction)*distance;
	camera.lookAt( target );
}
}

