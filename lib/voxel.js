Marble.Voxel	= function(opts)
{
	opts		= opts ||{};
	var type	= opts.type	|| 0;
	var tileSize	= Marble.tileSize;
	var geometry	= new THREE.CubeGeometry( tileSize, tileSize, tileSize );
	var texture	= renderer._microCache.getSet('voxelTexture', function(){
		return THREE.ImageUtils.loadTexture( "images/square-outline-textured.png" );
	});
	var material	= renderer._microCache.getSet('voxelMaterial_'+type, function(){
		var material	= new THREE.MeshLambertMaterial( { color: 0x00ff80, shading: THREE.FlatShading, map: texture });
		material.color	= Marble.Voxel.type2colors[type];
		return material;
	});
	this._mesh	= new THREE.Mesh( geometry, material );
}

Marble.Voxel.type2colors	= [
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

/**
*/
Marble.Voxel.prototype.mesh	= function()
{
	return this._mesh;
}
