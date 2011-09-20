/**
*/
MarblePhysics.Body	= function()
{
	this.position	= new MarblePhysics.Vector3();
	this.speed	= new MarblePhysics.Vector3();
	this.mass	= 1;
	this.damping	= 0.985;

	this._prevPos	= new MarblePhysics.Vector3();
};

MarblePhysics.Body.prototype.update	= function()
{
	this._prevPos.copy( this.position );
	
	this.speed.multiplyScalar(this.damping);
	
	this.position.addSelf( this.speed );
};
