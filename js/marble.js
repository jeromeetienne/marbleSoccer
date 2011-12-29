Marble.Marble	= function()
{
}

Marble.Marble.prototype.init	= function(opts)
{
	// get parameters from opts
	opts		= opts	|| {};
	this._radius	= 'radius' in opts	? opts.radius	: Marble.tileSize/2;
	this._maxSpeed	= 'maxSpeed' in opts	? opts.maxSpeed	: 0.2*Marble.tileSize;
	var position	= opts.position		|| new THREE.Vector3();
	var rotation	= opts.rotation		|| new THREE.Vector3();
	var friction	= 'friction' in opts	? opts.friction	: 0.99;
	this._marbleId	= opts.marbleId 	|| "marbleId-"+Math.floor(Math.random()*9999999).toString(36);
	var material	= opts.material		|| new THREE.MeshNormalMaterial();

	var hasWebGL	= renderer instanceof THREE.WebGLRenderer;

	// build this._ballMesh
	if( hasWebGL ){
		var geometry	= new THREE.SphereGeometry(this._radius, 32, 16);
	}else{
		var geometry	= new THREE.SphereGeometry(this._radius, 3,3);
		//var geometry	= new THREE.CubeGeometry(this._radius*2, this._radius*2, this._radius*2);
	}
	this._ballMesh	= new THREE.Mesh(geometry, material);
	this._ballMesh.position.y	= this._radius;
	this._ballMesh.rotation.copy(rotation);
	this._ballMesh.matrixAutoUpdate = false;
	this._ballMesh.updateMatrix();

	// build this._shadowMesh
	var texture	= renderer._microCache.getSet('marbleShadowTexture', function(){
		return this._buildShaddowTexture();
	}.bind(this));
	var material	= new THREE.MeshBasicMaterial( { transparent: true, map: texture, opacity : 0.8 } );
	//var material	= new THREE.MeshLambertMaterial( { map: texture } );
	var geometry	= new THREE.PlaneGeometry(2*this._radius, 2*this._radius);
	this._shadowMesh= new THREE.Mesh(geometry, material);
	this._shadowMesh.rotation.x	= -90 * Math.PI/180;
	this._shadowMesh.position.z	= -0.1;	// TODO FIXME this is a silly trick to avoid zbuffer between shaddow and particles
	this._shadowMesh.position.y	= 0.1;

	// build this._mesh
	this._mesh	= new THREE.Object3D();
	this._mesh.position.copy(position)
	this._mesh.add(this._ballMesh);
	hasWebGL && this._mesh.add(this._shadowMesh);

	scene.add( this._mesh );		

	// bind the mesh with microphysics.js
	microphysics.bindMesh(this._mesh, {
		geometry	: this._ballMesh.geometry,
		physics		: {
			restitution	: 0.95
		}
	});
	microphysics.body(this._mesh)._marbleId	= this._marbleId;

	microphysics.body(this._mesh).events.on('contact', function(event, otherBody){
		// skip if the contact isnt with another Marble
		if( !otherBody._marbleId )		return;
		// skip if the contact is with a marble of lower marbleId
		// - used to have a single contact notification when 2 marbles are in contact
		if( this._marbleId >= otherBody._marbleId )	return;
		//console.log("marlbe", this._marbleId, "collide with", otherBody._marbleId)
		var volume	= this.separatingVelocity(otherBody) * 0.8 / Marble.tileSize;
		volume		= Math.min(volume, 1.0);
		soundPool.get('marbleContact').play({
			volume	: volume
		});
	});

	// apply friction
	this._frictionAccelerator	= new vphy.FrictionAccelerator({
		bodies	: [microphysics.body(this._mesh)],
		x	: friction,
		y	: 1,
		z	: friction
	});
	microphysics.world().add(this._frictionAccelerator);

	// apply maxSpeed
	this._maxSpeedAccelerator	= new vphy.MaxSpeedAccelerator({
		bodies	: [microphysics.body(this._mesh)],
		maxSpeed: this._maxSpeed
	});
	microphysics.world().add(this._maxSpeedAccelerator);
}

Marble.Marble.prototype.destroy	= function()
{	
	scene.removeObject( this._mesh );

	this._frictionAccelerator && microphysics.world().remove(this._frictionAccelerator);
	this._frictionAccelerator	= null;

	this._maxSpeedAccelerator && microphysics.world().remove(this._maxSpeedAccelerator);
	this._maxSpeedAccelerator	= null;
}


Marble.Marble.prototype.mesh		= function(){	return this._mesh;	}
Marble.Marble.prototype.marbleId	= function(){	return this._marbleId;	}

/**
 * dynamically generate the texture for the shaddow
*/
Marble.Marble.prototype._buildShaddowTexture	= function()
{
	var canvasW	= 64;
	var canvasH	= 64;
	// init canvas
	var canvas	= document.createElement( 'canvas' );
	var context	= canvas.getContext( '2d' );
	canvas.width	= canvasW;
	canvas.height	= canvasH;
	// build gradient
	var gradient	= context.createRadialGradient( canvas.width/2, canvas.height /2, 0, canvas.width /2, canvas.height /2, canvas.width /2 );				
	gradient.addColorStop( 0.0, 'rgba( 5, 5, 5, 0.7)' );
	gradient.addColorStop( 0.6, 'rgba( 5, 5, 5, 0.7)' );
	gradient.addColorStop( 0.9, 'rgba( 0, 0, 0, 0.0)' );
	// do path
	context.beginPath();
	context.arc(canvasW/2, canvasH/2, canvasW/2, 0, Math.PI*2, false);
	context.closePath();
	// fill path with gradient
	context.fillStyle	= gradient;
//	context.fillStyle	= "red";
	context.fill();
	// build texture
	var texture	= new THREE.Texture( canvas );
	texture.needsUpdate = true;
	// return texture
	return texture;	
}

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
	var body	= microphysics.body(this._mesh);
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
	
	mesh.updateMatrixWorld(true);
}


/**
 * put the shadow on the ground
*/
Marble.Marble.prototype._updateShadow	= function()
{
	var scale	= 1;
	var voxelHeight	= gameLevel.map().getHeight(this._mesh.position.x, this._mesh.position.z);
	// if no voxel below
	if( voxelHeight === undefined ){
		this._shadowMesh.position.y	= -Number.MAX_VALUE;
		this._shadowMesh.scale.set(scale, scale, scale)
		return;
	}
	
	var deltaHeight	= this._mesh.position.y - voxelHeight;
	// +0.1 to ensure the map is above the ground without z-fighting
	this._shadowMesh.position.y	= -deltaHeight + 0.1;
	scale	= 1 + 0.3 * deltaHeight / Marble.tileSize;
	this._shadowMesh.scale.set(scale, scale, scale)
}
