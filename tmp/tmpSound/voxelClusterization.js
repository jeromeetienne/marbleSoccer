/**
 * return the index of the voxel equal to (x,y,z,t). return -1 if not found
*/
function indexOf(arr, x, y, z, t){
	for(var i = 0; i < arr.length; i++){
		if( arr[i].x !== x )	continue;
		if( arr[i].y !== y )	continue;
		if( arr[i].z !== z )	continue;
		if( arr[i].t !== t )	continue;
		return i;
	}
	return -1;
}

/**
 * return true if all voxels of the box are of type t
*/
function checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t){
	for(var x = minX; x <= maxX; x++){
		for(var y = minY; y <= maxY; y++){
			for(var z = minZ; z <= maxZ; z++){
				if( indexOf(arr, x, y, z, t) === -1 )	return false;
			}
		}
	}
	return true;
}

/**
 * remove all voxels of the box from arr
*/
function clearBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t){
	for(var x = minX; x <= maxX; x++){
		for(var y = minY; y <= maxY; y++){
			for(var z = minZ; z <= maxZ; z++){
				var idx	= indexOf(arr, x, y, z, t);
				console.assert( idx !== -1 );
			console.log(idx)
				arr.splice(idx, 1);
			}
		}
	}
}

/**
 * Find the biggest box of the same type (t) including (x,y,z)
*/
function growBox(arr, x, y, z, t)
{
	console.assert( indexOf(arr, x, y, z, t) !== -1 );

	var minX = x, minY = y, minZ = z;
	var maxX = x, maxY = y, maxZ = z;
	var temp;
	
	for(temp = x; checkBox(arr, temp, minY, minZ, maxX, maxY, maxZ, t); temp--)	minX = temp;
	for(temp = x; checkBox(arr, minX, minY, minZ, temp, maxY, maxZ, t); temp++)	maxX = temp;
	
	for(temp = y; checkBox(arr, minX, temp, minZ, maxX, maxY, maxZ, t); temp--)	minY = temp;
	for(temp = y; checkBox(arr, minX, minY, minZ, maxX, temp, maxZ, t); temp++)	maxY = temp;

	for(temp = z; checkBox(arr, minX, minY, temp, maxX, maxY, maxZ, t); temp--)	minZ = temp;
	for(temp = z; checkBox(arr, minX, minY, minZ, maxX, maxY, temp, t); temp++)	maxZ = temp;

	return {
		minX : minX, minY : minY, minZ : minZ,
		maxX : maxX, maxY : maxY, maxZ : maxZ
	};
}

var mapVoxels	= [
	{x: 0,y:0,z:0,t:0},
	{x: 1,y:0,z:0,t:0},
	{x:-1,y:0,z:0,t:0},
	{x: 0,y:0,z:1,t:0},
	{x: 1,y:0,z:1,t:0},
	{x:-1,y:0,z:1,t:0},
	{x: 0,y:1,z:0,t:0},
	{x: 1,y:1,z:0,t:0},
	{x:-1,y:1,z:0,t:0},
];
//var mapVoxels	= [
//	{x: 0,y:0,z:0,t:0},
//	{x: 1,y:0,z:0,t:0},
//	{x:-1,y:0,z:0,t:0},
//	{x: 0,y:1,z:0,t:0},
//	{x: 1,y:1,z:0,t:0},
//	{x:-1,y:1,z:0,t:0},
//];

// TODO
// - move this + Marble.Map.prototype._computeHeightMap	+ Marble.Map.prototype._computeBoundingBox
//   in a voxelMap.js class

console.assert( indexOf(mapVoxels, 0, 0, 0, 0) !== -1 );
console.assert( indexOf(mapVoxels, 0, 0, 0, 1) === -1 );
var box	= growBox(mapVoxels, 0, 0, 0, 0);
console.dir( box );
clearBox(mapVoxels, box.minX, box.minY, box.minZ, box.maxX, box.maxY, box.maxZ, 0);
console.dir(mapVoxels);