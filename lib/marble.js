Marble.Marble	= function()
{
}

Marble.Marble.prototype.init	= function(opts)
{
	// get parameters from opts
	opts		= opts	|| {};
	var color	= 'color' in opts	? opts.color	: 0xFF69B4;
	this._radius	= 'radius' in opts	? opts.radius	: Marble.tileSize/2;
	this._maxSpeed	= 'maxSpeed' in opts	? opts.maxSpeed	: 0.2*Marble.tileSize;
	var position	= opts.position		? opts.position	: new THREE.Vector3();
	var friction	= 'friction' in opts	? opts.friction	: 0.985;
	this._marbleId	= opts.marbleId || "marbleId-"+Math.floor(Math.random()*9999999).toString(36);

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

	// build this._mesh
	this._mesh	= new THREE.Object3D();
	this._mesh.position.copy(position)
	this._mesh.addChild(this._ballMesh);
	this._mesh.addChild(this._shadowMesh);

	// bind the mesh with microphysics.js
	microphysics.bindMesh(this._mesh, {
		geometry	: this._ballMesh.geometry,
		physics		: {
			restitution	: 0.90
		}
	});
	microphysics.body(this._mesh)._marbleId	= this._marbleId;
	// apply friction
	microphysics.world().add({
		type: vphy.types.ACCELERATOR,
		perform: function(){
			var body	= this._mesh._vphyBody;
			var speed	= body.getVelocity();
			// - apply friction in y too ? NO
			// - apply friction even when not in touch with the ground ? YES
			body.setVelocity(speed[0]*friction, speed[1], speed[2]*friction)
			//body.setVelocity(speed[0]*friction, speed[1]*friction, speed[2]*friction)
		}.bind(this)
	});
	// apply this._maxspeed
	microphysics.world().add({
		type: vphy.types.ACCELERATOR,
		perform: function(){
			var body	= microphysics.body(this._mesh);
			var velocity	= body.getVelocity();
			var speed	= new THREE.Vector3(velocity[0], velocity[1], velocity[2]);
			if( speed.length() > this._maxSpeed){
				speed.normalize().multiplyScalar(this._maxSpeed);
				body.setVelocity(speed.x, speed.y, speed.z);
			}
		}.bind(this)
	});
}

Marble.Marble.prototype.mesh		= function(){	return this._mesh;	}
Marble.Marble.prototype.marbleId	= function(){	return this._marbleId;	}

Marble.Marble.prototype.onContactVoxel	= function(voxelType)
{
	//console.log('onContactVoxel', this.marbleId(), voxelType);
}

Marble.Marble.prototype.tick	= function()
{
	// make the marble roll
	this._updateSphere();
	
	// put the shaddow on the ground
	this._updateShadow()
}

/**
 * Make the sphere roll based on its speed
*/
Marble.Marble.prototype._updateSphere	= function()
{
	var body	= this._mesh._vphyBody;
	var speed	= body.getVelocity();

	var perimeter	= 2 * Math.PI * this._radius;
	// FIXME why do i need this 4 ???
	var distanceX	= - 4 * speed[0] / perimeter;
	var distanceZ	= + 4 * speed[2] / perimeter;

	var mesh	= this._ballMesh;
	
	// solution to get rolling marble from |3d| on freenode
	var matrix	= new THREE.Matrix4().setTranslation(0,this._radius,0);
	matrix.multiplySelf(new THREE.Matrix4().setRotationZ(distanceX));
	matrix.multiplySelf(new THREE.Matrix4().setRotationX(distanceZ));
	matrix.multiplySelf(new THREE.Matrix4().setTranslation(0,-this._radius,0));
	mesh.matrix.copy(matrix.multiplySelf(mesh.matrix));
	
	mesh.update(false, true, camera);
}


/**
 * put the shadow on the ground
*/
Marble.Marble.prototype._updateShadow	= function()
{
	var height	= world.map().getHeight(this._mesh.position.x, this._mesh.position.z);
	if( height !== undefined ){
		// +0.1 to ensure the map is above the ground
		this._shadowMesh.position.y	= height - this._mesh.position.y + 0.1;
	}else{
		this._shadowMesh.position.y	= -Number.MAX_VALUE;
	}
}
