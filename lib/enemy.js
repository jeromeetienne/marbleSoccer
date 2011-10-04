/**
*/
Marble.Enemy	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this)
	this.parent.init.call(this, {
		color	: 0x6666AA,
		position: new THREE.Vector3(75, 0, 75)
	});

// for microphysics.js
if( true ){
	// apply attraction to player
	microphysics.world().add({
		type: vphy.types.ACCELERATOR,
		perform: function(){
			var body	= this.mesh()._vphyBody;
			var enemyPos	= this.mesh().position;
			var playerPos	= world.player().mesh().position;

			var acceleration= 10*Marble.tileSize;

			// compute the target position
			var distance	= 100;
			var target	= playerPos.clone().subSelf(enemyPos);
			target.subSelf( target.clone().normalize().multiplyScalar(distance) );
			
			// if the enemy is minLength away or less, do a surFriction.
			// - this avoids infinit small move
			var minLength	= 0.5*Marble.tileSize;
			var surFriction	= 0.95;
			if( target.length() > minLength ){
				target.normalize().multiplyScalar(acceleration);
				body.accelerate(target.x, target.y, target.z);
			}else{
				var speed	= body.getVelocity();
				body.setVelocity(speed.x*surFriction, speed.y*surFriction, speed.z*surFriction);
			}
		}.bind(this)
	});
}
}

// inherit from Marble.Marble methods
Marble.Enemy.prototype			= new Marble.Marble();
Marble.Enemy.prototype.constructor	= Marble.Marble;
Marble.Enemy.prototype.parent		= Marble.Marble.prototype;

Marble.Enemy.prototype.tick	= function()
{
// testing microphysics.js
if( true ){
	// call the parent class .tick()
	this.parent.tick.call(this);
	return;
}
	var enemyPos	= this.mesh().position;
	var playerPos	= world.player().mesh().position;

	var acceleration= 0.2;
	var distance	= 100;
	var vector	= playerPos.clone().subSelf(enemyPos);
	// handle the distance
	vector.subSelf( vector.clone().normalize().multiplyScalar(distance) );
	
	// if the enemy is minLength away or less, do a surFriction.
	// - this avoids infinit small move
	var minLength	= 5;
	var surFriction	= 0.95;
	if( vector.length() > minLength ){
		vector.normalize().multiplyScalar(acceleration);
		this._speed.addSelf(vector);		
	}else{
		this._speed.multiplyScalar( surFriction );		
	}


	// call the parent class .tick()
	this.parent.tick.call(this);
}