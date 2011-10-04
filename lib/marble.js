Marble.Marble	= function()
{
}

Marble.Marble.prototype.init	= function(opts)
{
	// get parameters from opts
	opts		= opts	|| {};
	var color	= 'color' in opts	? opts.color	: 0xFF69B4;
	var position	= opts.position		? opts.position	: new THREE.Vector3();
	var friction	= 'friction' in opts	? opts.friction	: 0.985;

	this._radius	= Marble.tileSize/2;

	// build this._ballMesh
	var geometry	= new THREE.SphereGeometry(this._radius, 32, 32);
	var texture	= renderer._microCache.getSet('marbleSphereTexture', function(){
		return THREE.ImageUtils.loadTexture( "images/planets/moon_1024.jpg" );
	});
	var material	= new THREE.MeshLambertMaterial( { color: color, map: texture } );

	this._ballMesh	= new THREE.Mesh(geometry, material);
	this._ballMesh.position.y	= this._radius;

	this._ballMesh.matrixAutoUpdate = false;
	this._ballMesh.updateMatrix();

	// build this._shadowMesh
	var texture	= renderer._microCache.getSet('marbleShadowTexture', function(){
		return THREE.ImageUtils.loadTexture("images/shadow.png");
	});
	var material	= new THREE.MeshBasicMaterial( { transparent: true, map: texture, opacity : 0.8 } );
	var geometry	= new THREE.PlaneGeometry(2*this._radius, 2*this._radius);
	this._shadowMesh= new THREE.Mesh(geometry, material);
	this._shadowMesh.rotation.x	= -90 * Math.PI/180;

	this._shadowMesh.position.y	= +0.1;	// +0.001 to ensure the map is above the ground

	// build this._mesh
	this._mesh	= new THREE.Object3D();
	this._mesh.position.copy(position)
	this._mesh.addChild(this._ballMesh);
	this._mesh.addChild(this._shadowMesh);

	//this._mesh.matrixAutoUpdate = false;
	//this._mesh.updateMatrix();

if( true ){
	this._mesh.position.y	= this._radius;
	// TODO change microphysics.js api
	microphysics.addMesh(this._mesh, {
		geometry	: this._ballMesh.geometry,
		restitution	: 1.0
	});
	// apply friction
	microphysics.world().add({
		type: vphy.types.ACCELERATOR,
		perform: function(){
			var body	= this._mesh._vphyBody;
			var speed	= body.getVelocity();
			body.setVelocity(speed.x*friction, speed.y*friction, speed.z*friction)
		}.bind(this)
	});
	// apply maxspeed
	microphysics.world().add({
		type: vphy.types.ACCELERATOR,
		perform: function(){
return;	// not yet working
			var body	= this._mesh._vphyBody;
			var velocity	= body.getVelocity();
			var speed	= new THREE.Vector3(velocity.x, velocity.y, velocity.z);
			var maxSpeed	= 0.1*Marble.tileSize;
			if( speed.length() > maxSpeed){
				speed.normalize().multiplySelf(maxSpeed);
				body.setVelocity(speed.x, speed.y, speed.z);
			}
		}.bind(this)
	});
}

	this._speed	= new THREE.Vector3(0,0,0);
	this._friction	= 0.985;	
}

Marble.Marble.prototype.mesh	= function()
{
	return this._mesh;
}



Marble.Marble.prototype.tick	= function()
{
	var body	= this._mesh._vphyBody;
	var speed	= body.getVelocity();

	var perimeter	= 2 * Math.PI * this._radius;
	// FIXME why do i need this 4 ???
	var rotationZ	= - 4 * speed.x / perimeter;
	var rotationX	= + 4 * speed.z / perimeter;

	var mesh	= this._ballMesh;
	
	// solution to get rolling marble from |3d| on freenode
	var matrix	= new THREE.Matrix4().setTranslation(0,this._radius,0);
	matrix.multiplySelf(new THREE.Matrix4().setRotationX(rotationX));
	matrix.multiplySelf(new THREE.Matrix4().setRotationZ(rotationZ));
	matrix.multiplySelf(new THREE.Matrix4().setTranslation(0,-this._radius,0));
	mesh.matrix.copy(matrix.multiplySelf(mesh.matrix));
	
	mesh.update(false, true, camera);
}