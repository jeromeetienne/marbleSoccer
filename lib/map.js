Marble.Map	= function()
{
	this._mesh		= new THREE.Object3D();
	
	var mapVoxels	= [{"x":-3,"y":0,"z":-2,"t":0},{"x":-2,"y":0,"z":-2,"t":0},{"x":-1,"y":0,"z":-3,"t":1},{"x":-1,"y":0,"z":-2,"t":1},{"x":0,"y":0,"z":-2,"t":1},{"x":1,"y":0,"z":-2,"t":1},{"x":-1,"y":0,"z":-1,"t":3},{"x":-1,"y":0,"z":0,"t":3},{"x":-1,"y":0,"z":1,"t":3},{"x":-1,"y":1,"z":0,"t":9},{"x":1,"y":1,"z":-2,"t":9},{"x":0,"y":0,"z":-1,"t":9},{"x":0,"y":0,"z":0,"t":5}];
	this._buildMapVoxel(mapVoxels)
	
	//this._buildMapFlat();
}

Marble.Map.prototype._buildMapVoxel	= function(mapVoxels)
{
	this._voxels	= [];	
	mapVoxels.forEach(function(mapVoxel){
		var voxel	= new Marble.Voxel({
			type	: mapVoxel.t
		});
		var mesh	= voxel.mesh();
		mesh.position.x	= mapVoxel.x * Marble.tileSize;
		mesh.position.y	= mapVoxel.y * Marble.tileSize;
		mesh.position.z	= mapVoxel.z * Marble.tileSize;
		mesh.position.y	-= Marble.tileSize/2;
		this._voxels.push( voxel );
		this._mesh.addChild( voxel.mesh() );
		
	}.bind(this))
}

Marble.Map.prototype._buildMapFlat	= function()
{
	var planeW	= 20*Marble.tileSize;
	var planeH	= 20*Marble.tileSize;
	var geometry	= new THREE.PlaneGeometry(planeW, planeH);
	var texture	= THREE.ImageUtils.loadTexture("images/UV.jpg");
	var material	= new THREE.MeshLambertMaterial( { color: 0x888888, map: texture } );
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.rotation.x	= -90 * Math.PI/180;
	this._mesh.addChild(mesh);
}

Marble.Map.prototype.mesh	= function()
{
	return this._mesh;
}


Marble.Map.prototype.tick	= function()
{
	// do nothing
}