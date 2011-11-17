//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

/**
*/
Marble.Ball	= function(opts)
{
	var ballDesc	= opts.ballDesc	|| "8";
	var position	= opts.position	|| new THREE.Vector3(75+Math.random()*100, Marble.tileSize, 75+Math.random()*100);

	// call parent class constructor
	this.parent.constructor.call(this)
	this.parent.init.call(this, {
		material	: Marble.PoolBallUtils.ballMaterial(ballDesc),
		position	: position,
		//rotation	: new THREE.Vector3(-Math.PI/2, Math.PI/2, 0),
		rotation	: new THREE.Vector3(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI)
	});
}

// inherit from Marble.Marble methods
Marble.Ball.prototype			= new Marble.Marble();
Marble.Ball.prototype.constructor	= Marble.Marble;
Marble.Ball.prototype.parent		= Marble.Marble.prototype;

// mixin MicroEvent
MicroEvent.mixin(Marble.Ball);

Marble.Ball.prototype.destroy		= function()
{
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.Ball.prototype.onContactVoxel	= function(voxelType)
{
	if( voxelType === 0 )		this.trigger('goal');
}

/**
 * ugly kludge to make it invisible, maybe do it better
*/
Marble.Ball.prototype.setInvisible	= function()
{
	var body	= microphysics.body( this._mesh );
	body.setPosition(0, Marble.tileSize, +99999);
	//body.setPosition(Marble.tileSize*(Math.random()*2-1)*2, Marble.tileSize*(Math.random()*2)*2, Marble.tileSize*(Math.random()*2-1)*2);
	body.setVelocity(0,0,0);	
}
Marble.Ball.prototype.isVisible	= function()
{
	var body	= microphysics.body( this._mesh );
	var positions	= body.getPosition();
	var positionZ	= positions[2];
	return positionZ < 90000 ? true : false;
}

Marble.Ball.prototype.tick	= function()
{
	if( this.isVisible() === false && false ){	// TODO somehow this crash the physics ???
		this.setInvisible();
	}
	// call the parent class .tick()
	this.parent.tick.call(this);
}
