// TODO to remove - only there as experimentation

var sound	= new Marble.Sound({
	urls	: ['../sounds/pacman/die.mp3'],
});

setInterval(function(){
	sound.play();
}, 5*1000);

sound.bind('loaded', function(){
	this.play();
});


var soundTrack	= new Marble.Sound({
	urls	: ['../sounds/Hot-Butter-Popcorn.mp3']
});

soundTrack.bind('loaded', function(){
	this.play();
});

/////////////////////////////////////////////////////

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
				if( indexOf(arr, x, y, z, y) === -1 )	return false;
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

	for(minX = x; checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t); minX--);
	for(maxX = x; checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t); maxX++);

	for(minY = y; checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t); minY--);
	for(maxY = y; checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t); maxY++);

	for(minZ = z; checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t); minZ--);
	for(maxZ = z; checkBox(arr, minX, minY, minZ, maxX, maxY, maxZ, t); maxZ++);
	
	return {
		minX : minX, minY : minY, minZ : minZ,
		maxX : maxX, maxY : maxY, maxZ : maxZ
	};
}

this._mapVoxels	= [{x:0,y:0,z:0,t:0}, {x:-1,y:0,z:1,t:0}];

