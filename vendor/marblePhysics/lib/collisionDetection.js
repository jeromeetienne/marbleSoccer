MarblePhysics.CollisionDetection	= {};

MarblePhysics.CollisionDetection.sphere2Sphere	= function(body1, body2)
{
	console.assert( body1 instanceof MarblePhysics.Sphere );
	console.assert( body2 instanceof MarblePhysics.Sphere );

	var distance	= body1.position.distanceTo(body2.position);
	var collided	= distance < body1.radius + body2.radius;

	if( !collided ) return false;
	return true;
}

MarblePhysics.CollisionDetection.box2Box	= function(body1, body2)
{
	console.assert( body1 instanceof MarblePhysics.Box );
	console.assert( body2 instanceof MarblePhysics.Box );

	// from http://wp.freya.no/3d-math-and-physics/simple-aabb-vs-aabb-collision-detection/
	if( Math.abs( body1.position.x - body2.position.x ) > (body1.halfX + body2.halfX) )	return false;
	if( Math.abs( body1.position.y - body2.position.y ) > (body1.halfY + body2.halfY) )	return false;
	if( Math.abs( body1.position.z - body2.position.z ) > (body1.halfZ + body2.halfZ) )	return false;

	return true;
}

