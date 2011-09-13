/**
*/
Marble.Player	= function()
{
	var radius	= Marble.tileSize/2;
	
	// build this._ballMesh
	var geometry	= new THREE.SphereGeometry(radius, 32, 32);
	var texture	= THREE.ImageUtils.loadTexture("images/planets/moon_1024.jpg");
	var material	= new THREE.MeshLambertMaterial( { color: 0x888888, map: texture } );
	this._ballMesh	= new THREE.Mesh(geometry, material);

	// build this._shadowMesh
	var texture	= THREE.ImageUtils.loadTexture("images/shadow.png");
	var material	= new THREE.MeshBasicMaterial( { transparent: true, map: texture, opacity : 0.8 } );
	var geometry	= new THREE.PlaneGeometry(2*radius, 2*radius);
	this._shadowMesh= new THREE.Mesh(geometry, material);
	this._shadowMesh.scale.set(1, 1, 1);
	this._shadowMesh.rotation.x	= -90 * Math.PI/180;
	this._shadowMesh.position.y	= -radius+0.1;	// +0.001 to ensure the map is above the ground

	// build this._mesh
	this._mesh	= new THREE.Object3D();
	this._mesh.addChild(this._ballMesh);
	this._mesh.addChild(this._shadowMesh);

	this._speed	= new THREE.Vector3(2,0,0);
	this._friction	= 0.98;
}

/**
*/
Marble.Player.prototype.mesh	= function()
{
	return this._mesh;
}


Marble.Player.prototype.tick	= function()
{
	var key		= {
		left	: keyboard.pressed('Q'),
		right	: keyboard.pressed('D'),
		up	: keyboard.pressed('Z'),
		down	: keyboard.pressed('S')
	};
return;
	var speed	= 2 * Math.PI/180;
	if( key.right )	this._ballMesh.rotation.z	-= speed;
	if( key.up )	this._ballMesh.rotation.x	-= speed;
	if( key.left )	this._ballMesh.rotation.z	+= speed;
	if( key.down )	this._ballMesh.rotation.x	+= speed;

	var acceleration= 0.1;
	if( key.left )	this._speed.x	-= acceleration;
	if( key.right )	this._speed.x	+= acceleration;
	if( key.up )	this._speed.z	-= acceleration;
	if( key.down )	this._speed.z	+= acceleration;
	
	// apply friction
	this._speed.multiplyScalar(this._friction);
	// apply speed
	this._mesh.position.addSelf(this._speed);
}