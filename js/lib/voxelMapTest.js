// load module
//var filename	= "voxelMap.js";
//eval(require("fs").readFileSync(filename, "utf8"));


(function(global){

	var $console	= window.console, console	= {};
	console.assert	= function(){ $console.assert.apply($console, arguments);	},
	console.log	= console.dir	= function(){};

	var mapVoxels	= [
		{x: 0,y:0,z:0,t:0},
		{x: 1,y:0,z:0,t:0},
		{x:-1,y:0,z:0,t:0},

		{x: 0,y:1,z:0,t:0},
		{x: 1,y:1,z:0,t:0},
		{x:-1,y:1,z:0,t:0},

		{x: 0,y:0,z:1,t:0},
		{x: 1,y:0,z:1,t:0},
		{x:-1,y:0,z:1,t:0},
	];
	
	var voxelMap	= new Marble.VoxelMap({
		map	: mapVoxels
	});
	
	console.assert( voxelMap._indexOf(0, 0, 0, 0) !== -1 );
	console.assert( voxelMap._indexOf(0, 0, 0, 1) === -1 );

	console.assert( voxelMap._checkBox(-1, 0, 0, 1, 1, 0, 0) );
	console.assert( voxelMap._checkBox(-1, 0, 0, -1, 0, 0, 1) === false );

	var box	= voxelMap._growBox(0, 0, 0, 0);
	console.log(JSON.stringify(box, '', '\t'));

	console.log(JSON.stringify(voxelMap.map(), '', '\t'));
	var tmp	= voxelMap.clone();
	voxelMap._removeBox(box.minX, box.minY, box.minZ, box.maxX, box.maxY, box.maxZ, 0);
	console.log(JSON.stringify(voxelMap.map(), '', '\t'));
	
	voxelMap	= tmp;
	console.log(JSON.stringify(voxelMap.map(), '', '\t'));
})();
