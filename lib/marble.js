Marble.Marble	= function(opts)
{
	// get parameters from opts
	opts		= opts	|| {};
	var color	= 'color' in opts ? opts.color	: 0xFF69B4;

	this._radius	= Marble.tileSize/2;

	// build this._ballMesh
	var geometry	= new THREE.SphereGeometry(this._radius, 32, 32);
	var texture	= THREE.ImageUtils.loadTexture("images/planets/moon_1024.jpg");
	var material	= new THREE.MeshLambertMaterial( { color: color, map: texture } );
	this._ballMesh	= new THREE.Mesh(geometry, material);
	this._ballMesh.position.y	= this._radius;

	this._ballMesh.matrixAutoUpdate = false;
	this._ballMesh.updateMatrix();

	// build this._shadowMesh
	var texture	= THREE.ImageUtils.loadTexture("images/shadow.png");
	var material	= new THREE.MeshBasicMaterial( { transparent: true, map: texture, opacity : 0.8 } );
	var geometry	= new THREE.PlaneGeometry(2*this._radius, 2*this._radius);
	this._shadowMesh= new THREE.Mesh(geometry, material);
	this._shadowMesh.rotation.x	= -90 * Math.PI/180;
	this._shadowMesh.position.y	= +0.1;	// +0.001 to ensure the map is above the ground

	// build this._mesh
	this._mesh	= new THREE.Object3D();
	this._mesh.addChild(this._ballMesh);
	this._mesh.addChild(this._shadowMesh);

	this._speed	= new THREE.Vector3(0,0,0);
	this._friction	= 0.985;
}

Marble.Marble.prototype.mesh	= function()
{
	return this._mesh;
}



Marble.Marble.prototype.tick	= function()
{

	var rotateSpeed	= 2 * Math.PI/180;
	//if( key.right )	this._ballMesh.rotation.z	-= rotateSpeed;
	//if( key.up )	this._ballMesh.rotation.x	-= rotateSpeed;
	//if( key.left )	this._ballMesh.rotation.z	+= rotateSpeed;
	//if( key.down )	this._ballMesh.rotation.x	+= rotateSpeed;

	// apply friction
	this._speed.multiplyScalar(this._friction);
	// apply speed
	this._mesh.position.addSelf(this._speed);


	var perimeter	= 2 * Math.PI * this._radius;
	// FIXME why do i need this 4 ???
	var rotationZ	= - 4 * this._speed.x / perimeter;
	var rotationX	= + 4 * this._speed.z / perimeter;

	var mesh	= this._ballMesh;
	
	var rz	= new THREE.Matrix4().setRotationZ(rotationZ); 
	var rx	= new THREE.Matrix4().setRotationX(rotationX); 

	mesh.matrix.multiplySelf( rz );
	mesh.matrix.multiplySelf( rx );

	mesh.update(false, true, camera);

	//console.log("matrix", this._ballMesh.matrix)	
}