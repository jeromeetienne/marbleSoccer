/**
*/
Marble.Player	= function()
{
	var radius	= Marble.tileSize/2;
	var geometry	= new THREE.SphereGeometry(radius, 32, 32);

	var texture	= THREE.ImageUtils.loadTexture("images/planets/moon_1024.jpg");


// NOTE: experimentation got get sliding texture
// - maybe smarter to experiment on a PlaneGeometry
	//var texture	= THREE.ImageUtils.loadTexture("images/UV.jpg");
	texture.offset.set(0, 0);
	texture.repeat.set(1, 1);
	texture.wrapS	= THREE.ClampToEdgeWrapping;
	texture.wrapT	= THREE.ClampToEdgeWrapping;
	//texture.wrapS	= THREE.RepeatWrapping;
	//texture.wrapT	= THREE.RepeatWrapping;
	//texture.wrapS	= THREE.MirroredRepeatWrapping;
	//texture.wrapT	= THREE.MirroredRepeatWrapping;

	//THREE.RepeatWrapping = 0;
	//THREE.ClampToEdgeWrapping = 1;
	//THREE.MirroredRepeatWrapping = 2;

	var material	= new THREE.MeshLambertMaterial( { color: 0x888888, map: texture } );

	//var material	= new THREE.MeshNormalMaterial();
	var ball	= new THREE.Mesh(geometry, material);
	
	var texture	= THREE.ImageUtils.loadTexture("images/shadow.png");
	var material	= new THREE.MeshBasicMaterial( { transparent: true, map: texture } );

material	= new THREE.MeshBasicMaterial( { map: texture, transparent: true } );
	var geometry	= new THREE.PlaneGeometry(2*radius, 2*radius);
	var shadow	= new THREE.Mesh(geometry, material);
//	shadow.rotation.x	= -90 * Math.PI/180;
//	shadow.position.y	= -radius;


	this._mesh	= new THREE.Object3D();
//	this._mesh.addChild(ball);
	this._mesh.addChild(shadow);

}

/**
*/
Marble.Player.prototype.mesh	= function()
{
	return this._mesh;
}


Marble.Player.prototype.tick	= function()
{
	var speed	= 2 * Math.PI/180;
	if( keyboard.pressed('Z') )	this._mesh.rotation.x	+= speed;
	if( keyboard.pressed('S') )	this._mesh.rotation.x	-= speed;
	if( keyboard.pressed('Q') )	this._mesh.rotation.z	+= speed;
	if( keyboard.pressed('D') )	this._mesh.rotation.z	-= speed;
}