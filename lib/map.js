Marble.Map	= function()
{
	var planeW	= 50*Marble.tileSize;
	var planeH	= 50*Marble.tileSize;

	var geometry	= new THREE.PlaneGeometry(planeW, planeH);
	var texture	= THREE.ImageUtils.loadTexture("images/UV.jpg");
	var material	= new THREE.MeshLambertMaterial( { color: 0x888888, map: texture } );
	this._mesh	= new THREE.Mesh(geometry, material);

	this._mesh.rotation.x	= -90 * Math.PI/180;
	this._mesh.position.y	= -Marble.tileSize/2;
}

Marble.Map.prototype.mesh	= function()
{
	return this._mesh;
}


Marble.Map.prototype.tick	= function()
{
	// do nothing
}