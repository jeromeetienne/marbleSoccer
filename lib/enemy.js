/**
*/
Marble.Enemy	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this)
	this.parent.init.call(this, {
		color	: 0x6666AA,
		position: new THREE.Vector3(75+Math.random()*100, Math.random()*100, 75+Math.random()*100)
	});

	// apply attractionToPlayer
	microphysics.world().add({
		type	: vphy.types.ACCELERATOR,
		perform	: this._acceleratorToPlayer.bind(this)
	});
}

// inherit from Marble.Marble methods
Marble.Enemy.prototype			= new Marble.Marble();
Marble.Enemy.prototype.constructor	= Marble.Marble;
Marble.Enemy.prototype.parent		= Marble.Marble.prototype;


Marble.Enemy.prototype._acceleratorToPlayer	= function()
{
	var body	= this.mesh()._vphyBody;
// TODO should take the position from the body
	var enemyPos	= this.mesh().position;
	var playerPos	= world.player().mesh().position;

	var acceleration= 10*Marble.tileSize;

	// compute the target position
	var distance	= 100;
	var target	= playerPos.clone().subSelf(enemyPos);
	target.subSelf( target.clone().normalize().multiplyScalar(distance) );
	
	// if the enemy is minLength away or less, do a surFriction.
	// - this avoids infinite small move
	var minLength	= 0.5*Marble.tileSize;
	var surFriction	= 0.95;
	if( target.length() > minLength ){
		target.normalize().multiplyScalar(acceleration);
		body.accelerate(target.x, target.y, target.z);
	}else{
		var speed	= body.getVelocity();
		body.setVelocity(speed.x*surFriction, speed.y*surFriction, speed.z*surFriction);
	}
}

Marble.Enemy.prototype.tick	= function()
{
	// call the parent class .tick()
	this.parent.tick.call(this);
}