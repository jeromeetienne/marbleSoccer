Marble.Voxel	= function(opts)
{
	opts		= opts 		|| {};
	var type	= this._type	= opts.type	|| 0;
	var tileSize	= Marble.tileSize;
	var texture	= renderer._microCache.getSet('voxelTexture', function(){
		return THREE.ImageUtils.loadTexture( "images/square-outline-textured.png" );
	});
	var material	= renderer._microCache.getSet('voxelMaterial_'+type, function(){
		var material	= new THREE.MeshLambertMaterial({
			color	: 0x123456,
			shading	: THREE.FlatShading,
			map	: texture
		});
		material.color	= Marble.Voxel._type2colors[type];
		return material;
	});
	//material	= new THREE.MeshNormalMaterial(); 

	var geometry	= new THREE.CubeGeometry( tileSize, tileSize, tileSize, 1, 1, 1, [material, material, material, material, material, material ]);
	this._mesh	= new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
}

Marble.Voxel._type2colors	= [
	new THREE.Color().setRGB(1, 0, 0),
	new THREE.Color().setRGB(0, 1, 0),
	new THREE.Color().setRGB(0, 0, 1),	
	new THREE.Color().setRGB(1, 1, 0),
	new THREE.Color().setRGB(1, 0, 1),
	
	new THREE.Color().setRGB(0, 1, 1),	
	new THREE.Color().setRGB(1, 0.5, 0.5),	
	new THREE.Color().setRGB(1, 0.5, 1),	
	new THREE.Color().setRGB(0.5, 0.5, 1),	
	new THREE.Color().setRGB(0.5, 0.5, 0.5),	
];

Marble.Voxel.prototype.mesh	= function(){	return this._mesh;	}
Marble.Voxel.prototype.type 	= function(){	return this._type;	}
