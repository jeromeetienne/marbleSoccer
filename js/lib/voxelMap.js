var Marble	= Marble	|| {};

Marble.VoxelMap	= function(opts)
{
	this._map	= opts.map	|| console.assert(false);
	this.computeAll();
}

Marble.VoxelMap.prototype.clone	= function()
{
	return new Marble.VoxelMap({
		map	: _.clone(this.map())
	});
}

//////////////////////////////////////////////////////////////////////////////////
//		transformation							//
//////////////////////////////////////////////////////////////////////////////////

Marble.VoxelMap.prototype.translate	= function(x, y, z)
{
	this._map.forEach(function(voxel){
		voxel.x	+= x;
		voxel.y	+= y;
		voxel.z	+= z;
	})
	return this;
}

Marble.VoxelMap.prototype.multiply	= function(x, y, z)
{
	this._map.forEach(function(voxel){
		voxel.x	*= x;
		voxel.y	*= y;
		voxel.z	*= z;
	});
	return this;
}

//////////////////////////////////////////////////////////////////////////////////
//		getters								//
//////////////////////////////////////////////////////////////////////////////////
Marble.VoxelMap.prototype.map	= function(){	return this._map;	}

Marble.VoxelMap.prototype.computeAll	= function()
{
	this._computeBoundingBox();
	this._computeHeightMap();
	return this;
}

Marble.VoxelMap.prototype._computeHeightMap	= function()
{
	var nbItems	= this._size.x * this._size.z;
	this._heightMap	= new Array(nbItems);

	// fill this._heightMap
	for(var i = 0; i < nbItems; i++ )	this._heightMap[i]	= undefined;

	// populate this._heightMap based on this._map
	for(var i = 0; i < this._map.length; i++ ){
		var voxel	= this._map[i];
		var idx		= (voxel.x - this._min.x) + (voxel.z - this._min.z) * this._size.x;
		var curHeight	= this._heightMap[idx];
		if( curHeight < voxel.y || curHeight === undefined ){
			this._heightMap[idx]	= voxel.y;
		}
	};

	// display to debug
	//console.log("heigh", this._heightMap);
}

/**
 * return true if there is a voxel at this coordinate, false otherwise
*/
Marble.VoxelMap.prototype.getHeight	= function(voxelX, voxelZ)
{
	if( voxelX < this._min.x || voxelX > this._max.x )	return undefined;
	if( voxelZ < this._min.z || voxelZ > this._max.z )	return undefined;

	var idx		= (voxelX - this._min.x) + (voxelZ - this._min.z) * this._size.x;
	var voxelHeight	= this._heightMap[idx];
	
	if( voxelHeight === undefined )	return undefined;
	
//console.log("height", voxelHeight, voxelX, voxelZ)
	return voxelHeight;
}


Marble.VoxelMap.prototype._computeBoundingBox	= function()
{
	// compute this._min + this._max in voxel space
	this._min	= new THREE.Vector3(+Number.MAX_VALUE, +Number.MAX_VALUE, +Number.MAX_VALUE);
	this._max	= new THREE.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
	this._map.forEach(function(voxel){
		if( this._min.x > voxel.x )	this._min.x	= voxel.x; 
		if( this._max.x < voxel.x )	this._max.x	= voxel.x;
		if( this._min.y > voxel.y )	this._min.y	= voxel.y; 
		if( this._max.y < voxel.y )	this._max.y	= voxel.y; 
		if( this._min.z > voxel.z )	this._min.z	= voxel.z; 
		if( this._max.z < voxel.z )	this._max.z	= voxel.z; 
	}.bind(this));
	
	// compute this._size in voxel space
	this._size	= new THREE.Vector3();
	this._size.x	= Math.abs(this._max.x - this._min.x + 1);
	this._size.y	= Math.abs(this._max.y - this._min.y + 1);
	this._size.z	= Math.abs(this._max.z - this._min.z + 1);

	// display to debug
//	console.log('map bbmin', this._min, "bbMax", this._max, "size", this._size);
}

/**
 * return the index of the voxel equal to (x,y,z,t). return -1 if not found
*/
Marble.VoxelMap.prototype.getType	= function(x, y, z)
{
	var arr	= this._map;
	for(var i = 0; i < arr.length; i++){
		if( arr[i].x !== x )	continue;
		if( arr[i].y !== y )	continue;
		if( arr[i].z !== z )	continue;
		return arr[i].t;
	}
	return undefined;
}

//////////////////////////////////////////////////////////////////////////////////
//		functions for clusturization					//
//////////////////////////////////////////////////////////////////////////////////

/**
 * return the index of the voxel equal to (x,y,z,t). return -1 if not found
*/
Marble.VoxelMap.prototype._indexOf	= function(x, y, z, t)
{
	var arr	= this._map;
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
 * - used for voxel clustering
 * - not really optimized
*/
Marble.VoxelMap.prototype._checkBox	= function(minX, minY, minZ, maxX, maxY, maxZ, t)
{
	for(var x = minX; x <= maxX; x++){
		for(var y = minY; y <= maxY; y++){
			for(var z = minZ; z <= maxZ; z++){
				if( this._indexOf(x, y, z, t) === -1 )	return false;
			}
		}
	}
	return true;
}

/**
 * remove all voxels of the box from arr
 * - used for voxel clustering
*/
Marble.VoxelMap.prototype._removeBox	= function(minX, minY, minZ, maxX, maxY, maxZ, t)
{
	var arr	= this._map;	
	for(var x = minX; x <= maxX; x++){
		for(var y = minY; y <= maxY; y++){
			for(var z = minZ; z <= maxZ; z++){
				var idx	= this._indexOf(x, y, z, t);
				console.assert( idx !== -1 );
				arr.splice(idx, 1);
			}
		}
	}
}

/**
 * Find the biggest box of the same type (t) including (x,y,z)
*/
Marble.VoxelMap.prototype._growBox	= function(x, y, z, t)
{
	var minX = x, minY = y, minZ = z;
	var maxX = x, maxY = y, maxZ = z;
	var temp;

	console.assert( this._indexOf(x, y, z, t) !== -1 );
	
	for(temp = x; this._checkBox(temp, minY, minZ, maxX, maxY, maxZ, t); temp--)	minX = temp;
	for(temp = x; this._checkBox(minX, minY, minZ, temp, maxY, maxZ, t); temp++)	maxX = temp;
	
	for(temp = y; this._checkBox(minX, temp, minZ, maxX, maxY, maxZ, t); temp--)	minY = temp;
	for(temp = y; this._checkBox(minX, minY, minZ, maxX, temp, maxZ, t); temp++)	maxY = temp;

	for(temp = z; this._checkBox(minX, minY, temp, maxX, maxY, maxZ, t); temp--)	minZ = temp;
	for(temp = z; this._checkBox(minX, minY, minZ, maxX, maxY, temp, t); temp++)	maxZ = temp;

	return {
		minX : minX, minY : minY, minZ : minZ,
		maxX : maxX, maxY : maxY, maxZ : maxZ
	};
}
