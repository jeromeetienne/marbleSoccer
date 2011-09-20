/**
*/
MarblePhysics.World	= function()
{
	this.bodies	= [];
}


MarblePhysics.World.prototype.addBody	= function(body)
{
	console.assert( body instanceof MarblePhysics.Body );
	this.bodies.push(body);
}

MarblePhysics.World.prototype.update	= function(deltaTime)
{
	this.bodies.forEach(function(body){
		body.update();
	})
	
	this._handleCollision();
}

MarblePhysics.World.prototype._handleCollision	= function()
{
	for(var i = 0; i < this.bodies.length; i++ ){
		for(var j = i+1; j < this.bodies.length; j++ ){
			var collided	= this.bodies[i].collideWith( this.bodies[j] );
			//console.log(i, j, collided);
		}
	}
}