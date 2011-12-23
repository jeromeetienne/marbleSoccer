Marble.Voxel	= function(opts)
{
	opts		= opts 		|| {};
	var type	= this._type	= opts.type	|| 0;
	var tileSize	= Marble.tileSize;
	var texture	= renderer._microCache.getSet('voxelTexture', function(){
		//return THREE.ImageUtils.loadTexture( "images/backgrounddetailed6.jpg");
		//return THREE.ImageUtils.loadTexture( "images/grasslight-big.jpg");
		//return THREE.ImageUtils.loadTexture( "images/MarbleWhite0035_2_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/MarbleWhite0040_2_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/planets/moon_1024.jpg" )
		//return THREE.ImageUtils.loadTexture( "images/MetalBare0144_1_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/MetalBare0141_2_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/MetalGalvanized0046_5_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/WoodRough0021_2_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/PlywoodOld0022_11_thumbhuge.jpg")
		//return THREE.ImageUtils.loadTexture( "images/PlywoodOld0024_23_thumbhuge.jpg")
		return THREE.ImageUtils.loadTexture( "images/square-outline-textured.png" );
	});
	var hasWebGL	= renderer instanceof THREE.WebGLRenderer;
	var material	= renderer._microCache.getSet('voxelMaterial_'+type, function(){
		var color	= Marble.Voxel._type2colors[type].getHex();
		if( hasWebGL ){
			return new THREE.MeshLambertMaterial({
				color	: color,
				//shading	: THREE.FlatShading,
				map	: texture
			});			
		}else{
			return new THREE.MeshBasicMaterial({
				color	: color
			});			
		}
	});

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
