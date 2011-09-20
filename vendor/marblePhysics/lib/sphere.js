/**
*/
MarblePhysics.Sphere	= function(radius)
{
	this.parent.constructor.call(this);

	this.radius	= radius;
}

// inherit from MarblePhysics.Marble methods
MarblePhysics.Sphere.prototype			= new MarblePhysics.Body();
MarblePhysics.Sphere.prototype.constructor	= MarblePhysics.Body;
MarblePhysics.Sphere.prototype.parent		= MarblePhysics.Body.prototype;


/**
 * TODO rename .colliding()
*/
MarblePhysics.Sphere.prototype.collideWith	= function(otherBody)
{
	if( otherBody instanceof MarblePhysics.Sphere ){
		return this.collidingSphere(otherBody);
	}else	console.assert(false);
	return undefined;
}

MarblePhysics.Sphere.prototype._collisionResponse0	= function(normalImpact)
{
	this.position.copy(this._prevPos);

	var angle	= this.speed.clone().negate().angleWith(normalImpact);
	var rotation	= 2 * angle;

// TODO use dot product to project on the normal
// - i want the this.speed symmetry with normalImpact as symmetry axis
// - this will be the new speed vector
// - what about its magnitude ?
// - is there a notion of mass ?
//   - not currently
//   - currently all sphere got same mass
//   - all box are unmovable

//console.log("normalImpact", JSON.stringify(normalImpact))
//console.log("speed", JSON.stringify(this.speed))
//console.log("angle", angle / Math.PI * 180);
//console.log("rotation", rotation );

	var matrix	= new MarblePhysics.Matrix4().setRotationZ(rotation);
	
	this.speed	= matrix.multiplyVector3( this.speed.clone().negate() );
}

MarblePhysics.Sphere.prototype._collisionResponse	= function(normalImpact)
{
	this.position.copy(this._prevPos);

//console.log("speed", JSON.stringify(this.speed));
//console.log("normalImpact", JSON.stringify(normalImpact));

	var symPoint	= this.speed.reflectionSymmmetryWith(normalImpact)

	this.speed.copy(symPoint);
}

MarblePhysics.Sphere.prototype.collidingSphere	= function(other)
{
	console.assert( other instanceof MarblePhysics.Sphere );

	var collided	= MarblePhysics.CollisionDetection.sphere2Sphere(this, other);
	if( !collided )	return false;

console.log("collided ******************");

	var this2other	= other.position.clone().subSelf(this.position);
	console.assert( this2other.isZero() === false );

	var normalImpact= this2other.clone().negate().normalize();

	this._collisionResponse(normalImpact);
	other._collisionResponse(normalImpact.clone().negate());

	return true;
}
