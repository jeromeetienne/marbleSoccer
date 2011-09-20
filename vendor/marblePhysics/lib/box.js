/**
 * handle bounding box or AABB
*/
MarblePhysics.Box	= function(width, height, depth)
{
	this.parent.constructor.call(this);
	
	this.halfX	= dx/2;
	this.halfY	= dy/2;
	this.halfZ	= dz/2;
}

// inherit from MarblePhysics.Marble methods
MarblePhysics.Box.prototype		= new MarblePhysics.Body();
MarblePhysics.Box.prototype.constructor	= MarblePhysics.Body;
MarblePhysics.Box.prototype.parent	= MarblePhysics.Body.prototype;

