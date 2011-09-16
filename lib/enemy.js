/**
*/
Marble.Enemy	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this, {
		color	: 0x6666AA
	});
}

// inherit from Marble.Marble methods
Marble.Enemy.prototype			= new Marble.Marble();
Marble.Enemy.prototype.constructor	= Marble.Marble;
Marble.Enemy.prototype.parent		= Marble.Marble.prototype;

Marble.Enemy.prototype.tick	= function()
{
	var enemyPos	= this.mesh().position;
	var playerPos	= world.player().mesh().position;

	var acceleration= 0.2;
	var distance	= 100;
	var vector	= playerPos.clone().subSelf(enemyPos);
	// handle the distance
	vector.subSelf( vector.clone().normalize().multiplyScalar(distance) );
	
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