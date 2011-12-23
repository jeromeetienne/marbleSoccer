/**
 * Bunch of utils about pool ball
*/

Marble.PoolBallUtils	= {};

Marble.PoolBallUtils.colorPerNumber	= {
	'1'	: 0xFDD017,	// Yellow
	'2'	: 0x2B65EC,	// Blue
	'3'	: 0xF62817,	// Red
	'4'	: 0x7A5DC7,	// Purple
	'5'	: 0xF87217,	// Orange
	'6'	: 0x348017,	// Green
	'7'	: 0xA52A2A,	// Brown or burgundy (tan in some ball sets)
	'8'	: 0x000000,	// Black
	'9'	: 0xFDD017,	// Yellow
}

Marble.PoolBallUtils._ballMaterialCanvas= function(ballDesc)
{
	var hasWebGL	= renderer instanceof THREE.WebGLRenderer;
	console.assert(hasWebGL === false)
	return new THREE.MeshBasicMaterial({
		color		: Marble.PoolBallUtils.colorPerNumber[ballDesc]
	});
}

Marble.PoolBallUtils._ballMaterialWebGL	= function(ballDesc)
{
	var hasWebGL	= renderer instanceof THREE.WebGLRenderer;
	console.assert(hasWebGL === true);
	var buildTextureFlat	= function(){
		return renderer._microCache.getSet('poolBallTexture-'+ballDesc, function(){
			if( ballDesc === 'cue' ){
				// display nine-ball http://en.wikipedia.org/wiki/Nine-ball
				var color	= Marble.PoolBallUtils.colorPerNumber['1'];
				return THREEx.Texture.PoolBall.ballTexture('9', true, new THREE.Color(color), 128);
				// display white ball
				return THREEx.Texture.PoolBall.ballTexture(" ", true, new THREE.Color(0xFFFFFF), 64);
			}
			var color	= Marble.PoolBallUtils.colorPerNumber[ballDesc];
			return THREEx.Texture.PoolBall.ballTexture(ballDesc, true, new THREE.Color(color), 128);
		});
	}
	var buildTextureStone	= function(){
		var texture	= buildTextureFlat();
		var canvas	= texture.image;
		console.assert( canvas instanceof HTMLCanvasElement);

		var image	= new Image()
		image.onload	= function(){
			var ctx	= canvas.getContext('2d');
			ctx.save();
			ctx.globalAlpha	= 0.3;
			//ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
			ctx.restore();
			texture.needsUpdate = true;
		};
		image.crossOrigin = '';
		//image.src	= "images/MarbleWhite0035_2_thumbhuge.jpg";
		//image.src	= "images/MarbleWhite0040_2_thumbhuge.jpg";
		//image.src	= "images/PlywoodOld0022_11_thumbhuge.jpg";
		image.src	= "images/MetalGalvanized0046_5_thumbhuge.jpg";
		//image.src	= "images/planets/moon_1024.jpg";

		return texture;
	}
	return new THREE.MeshPhongMaterial({
		color		: 0xAAAAAA,
		ambient		: 0x030303,
		//specular	: 0x000104,
		shininess	: 20,
		//shading		: THREE.SmoothShading,
		//map		: buildTextureFlat()
		map		: buildTextureStone()
	});
}

Marble.PoolBallUtils.ballMaterial	= function(ballDesc)
{
	var hasWebGL	= renderer instanceof THREE.WebGLRenderer;
	if( hasWebGL === true ){
		return this._ballMaterialWebGL(ballDesc);
	}else{
		return this._ballMaterialCanvas(ballDesc);
	}
}
