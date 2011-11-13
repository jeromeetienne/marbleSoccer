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
}

Marble.PoolBallUtils.ballMaterial	= function(ballDesc)
{
	return new THREE.MeshPhongMaterial({
		color		: 0xFFFFFF,
		ambient		: 0x000000,
		specular	: 0x040404,
		shininess	: 4,
		shading		: THREE.SmoothShading,
		map		: renderer._microCache.getSet('poolBallTexture-'+ballDesc, function(){
			if( ballDesc === 'cue' ){
				return THREEx.Texture.PoolBall.ballTexture(" ", false, new THREE.Color(0xFFFFFF), 64);
			}
			var color	= Marble.PoolBallUtils.colorPerNumber[ballDesc];
			return THREEx.Texture.PoolBall.ballTexture(ballDesc, true, new THREE.Color(color), 128);
		})
	});	
}
