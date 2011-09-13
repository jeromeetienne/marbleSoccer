Marble.Map	= function()
{
	var planeW	= 10*Marble.tileSize;
	var planeH	= 5*Marble.tileSize;

	var geometry	= new THREE.PlaneGeometry(planeW, planeH);
	var material	= new THREE.MeshNormalMaterial();
	var texture	= THREE.ImageUtils.loadTexture("images/UV.jpg");

	texture.offset	= new THREE.Vector2( 0, 0 );
	texture.repeat	= new THREE.Vector2( 0.5, 0.5 );

this._texture	= texture;

	var material	= new THREE.MeshLambertMaterial( { color: 0x888888, map: texture } );

	this._mesh	= new THREE.Mesh(geometry, material);
return;
	this._mesh.rotation.x	= -90 * Math.PI/180;
	this._mesh.position.y	= -Marble.tileSize/2;
}

Marble.Map.prototype.mesh	= function()
{
	return this._mesh;
}


Marble.Map.prototype.tick	= function()
{
	// do nothing
	//texture.offset	= new THREE.Vector2( -0.1, 0 );
	//texture.repeat	= new THREE.Vector2(0.9, 1 );

	if( keyboard.pressed('Q') )	this._texture.offset.x	+= 0.01;
	if( keyboard.pressed('D') )	this._texture.offset.x	-= 0.01;
	if( keyboard.pressed('Z') )	this._texture.offset.y	+= 0.01;
	if( keyboard.pressed('S') )	this._texture.offset.y	-= 0.01;
	

	this._texture.offset.x	%= 0.5;
	this._texture.offset.y	%= 0.5;
}