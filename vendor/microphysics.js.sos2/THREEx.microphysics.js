var THREEx	= THREEx 		|| {};

THREEx.Microphysics	= function(opts)
{
	opts		= opts	|| {};
	this._timeStep	= opts.timeStep	? opts.timeStep : 1/60;
	this._world	= new vphy.World();
	return this;
}

THREEx.Microphysics.prototype.start	= function()
{
	this._world.start(Date.now()/1000);
	return this;
}

THREEx.Microphysics.prototype.world	= function()
{
	return this._world;
}

THREEx.Microphysics.prototype.update	= function(scene)
{
	console.assert(scene instanceof THREE.Scene);
	
	// the actualTime is only for old version of the library
	var actualTime	= this._world.step(this._timeStep, Date.now()/1000);
	
	// go thru each mesh and find the one with the physics
	// - set there position accordingly
	scene.children.forEach(function(mesh){
		if( typeof mesh === THREE.Mesh )	return;
		if( ! mesh._vphyBody )			return;

		var body	= mesh._vphyBody;
		var bodyPosition= body.getPosition(actualTime);
		mesh.position.x	= bodyPosition[0];
		mesh.position.y	= bodyPosition[1];
		mesh.position.z	= bodyPosition[2];
if( body instanceof vphy.AABB ){
	mesh.position.y	+= body.height/2;	// __doc__ this height/2 seems like a bug ?
}
	})
	return this;
}

THREEx.Microphysics.prototype.addMesh	= function(mesh, opts)
{
	opts		= opts	|| {};
	var geometry	= opts.geometry	|| mesh.geometry;
	if( geometry instanceof THREE.SphereGeometry ){
		return this._addSphere( mesh, opts );
	}else if( geometry instanceof THREE.CubeGeometry ){
		return this._addCube( mesh, opts );
	}else	console.assert(false);
	return this;
}

THREEx.Microphysics.prototype._addCube	= function(mesh, opts)
{
	console.assert( mesh.geometry instanceof THREE.CubeGeometry );
	opts		= opts	|| {};
	var geometry	= opts.geometry		|| mesh.geometry;
	var restitution	= opts.restitution	? opts.restitution	: 0.6;

// backward compatibility
console.assert(opts.flipped !== true);

	console.assert( geometry instanceof THREE.CubeGeometry );

	geometry.computeBoundingBox();
	var width	= geometry.boundingBox.x[1] - geometry.boundingBox.x[0];
	var height	= geometry.boundingBox.y[1] - geometry.boundingBox.y[0];
	var depth	= geometry.boundingBox.z[1] - geometry.boundingBox.z[0];
	mesh._vphyBody	= new vphy.AABB({
		width		: width,
		height		: height,
		depth		: depth,
		x		: mesh.position.x,
		y		: mesh.position.y-height/2,	// __doc__ this height/2 seems like a bug ?
		z		: mesh.position.z,
		restitution	: restitution
	});
	
	this._world.add(mesh._vphyBody);
	return this;
}

THREEx.Microphysics.prototype._addSphere	= function(mesh, opts)
{
	opts		= opts			|| {};
	var geometry	= opts.geometry		|| mesh.geometry;
	var restitution	= opts.restitution	? opts.restitution	: 0.6;

	console.assert( geometry instanceof THREE.SphereGeometry );

	geometry.computeBoundingBox();
	mesh._vphyBody	= new vphy.Sphere({
		restitution	: restitution,
		radius		: (geometry.boundingBox.x[1] - geometry.boundingBox.x[0])/2,
		x		: mesh.position.x,
		y		: mesh.position.y,
		z		: mesh.position.z
	});
	this._world.add(mesh._vphyBody);

	return this;
}

