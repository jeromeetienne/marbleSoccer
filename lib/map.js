Marble.Map	= function()
{
	this._voxelMap	= new Marble.VoxelMap();

	this._buildMesh();
	this._bindPhysics();
}


Marble.Map.prototype._bindPhysics	= function()
{
	// add gravity in microphysics
	if( true ){
		microphysics.world().add(new vphy.LinearAccelerator({
			x	:  0, 
			y	: -9.8  * Marble.tileSize,
			z	:  0
		}));		
	}

/**
 * TODO notify the marble entering in contact
 * - so you need to know the marble
 * - is that an enemy ? a player ?
 * - how to get that info in the contact callback ?
 * - put a name/id per marble ?
*/
var type2contact	= [
	function(event, otherBody){
		var thisBody	= this;
		var marbleId	= otherBody._marbleId;
		var voxelType	= thisBody._voxelType;
		voxelType	= 0;	// TODO suddently super slow if i set thisBody._voxelType, reason unknown
		//console.log("type", thisBody._voxelType, otherBody._marbleId, world);
		world.onContactMarbleVoxel(marbleId, voxelType);
	},
	function(event, otherBody){
		var thisBody	= this;
		var marbleId	= otherBody._marbleId;
		var voxelType	= thisBody._voxelType;
		voxelType	= 1;	// TODO suddently super slow if i set thisBody._voxelType, reason unknown
		//console.log("type", thisBody._voxelType, otherBody._marbleId, world);
		world.onContactMarbleVoxel(marbleId, voxelType);
	},
	null,
	null,
	null,
	
	null,
	null,
	null,
	null,
	null,
];

	// TODO: it may be faster if aggregated by voxel
	// - additionnaly it will be better physics
	this._voxels.forEach(function(voxel){
		var mesh	= voxel.mesh();
		microphysics.bindMesh(mesh, {
			physics	: {
				restitution	: 0.8
			}
		});
		// register the contact callback if any
		var voxelType	= voxel.type();
		var contactFct	= type2contact[voxelType];
		if( contactFct )	microphysics.body(mesh).events.on('contact', contactFct);

		// TODO suddently super slow if i set thisBody._voxelType, reason unknown
		//microphysics.body(mesh)._voxelType	= voxelType;
		//microphysics.body(mesh).prout	= "kkkk";
	}.bind(this));
}

/**
 * Build the map according to this._mapVoxels
*/
Marble.Map.prototype._buildMesh	= function()
{
	var geometry	= new THREE.Geometry();
	this._voxels	= [];
	this._voxelMap.map().forEach(function(mapVoxel){
		var voxel	= new Marble.Voxel({
			type	: mapVoxel.t
		});
		var mesh	= voxel.mesh();
		mesh.position.x	= mapVoxel.x * Marble.tileSize;
		mesh.position.y	= mapVoxel.y * Marble.tileSize - Marble.tileSize/2;
		mesh.position.z	= mapVoxel.z * Marble.tileSize;
		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();
		
		this._voxels.push( voxel );

		// merge all the geometries
		THREE.GeometryUtils.merge( geometry, mesh );		
	}.bind(this));

	// build the THREE.Mesh itself
	var mesh	= new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
	mesh.matrixAutoUpdate = false;
	mesh.updateMatrix();
	
	this._mesh	= mesh;
}

/**
 * return the three.js object for the map
*/
Marble.Map.prototype.mesh	= function(){	return this._mesh;	}

/**
 * return true if there is a voxel at this coordinate, false otherwise
*/
Marble.Map.prototype.getHeight	= function(worldX, worldZ)
{
	var voxelX	= Math.floor((worldX + Marble.tileSize/2) / Marble.tileSize);
	var voxelZ	= Math.floor((worldZ + Marble.tileSize/2) / Marble.tileSize);

	var voxelHeight	= this._voxelMap.getHeight(voxelX, voxelZ);
	if( voxelHeight === undefined )	return undefined;
	return voxelHeight * Marble.tileSize;
}

Marble.Map.prototype.tick	= function()
{
	// do nothing
}