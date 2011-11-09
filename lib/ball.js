/**
*/
Marble.Ball	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this)
	this.parent.init.call(this, {
		color	: 0xFFAA00,
		position: new THREE.Vector3(75+Math.random()*100, Math.random()*100, 75+Math.random()*100)
	});
}

// inherit from Marble.Marble methods
Marble.Ball.prototype			= new Marble.Marble();
Marble.Ball.prototype.constructor	= Marble.Marble;
Marble.Ball.prototype.parent		= Marble.Marble.prototype;

Marble.Ball.prototype.onContactVoxel	= function(voxelType)
{
	var body	= microphysics.body( this.mesh() );
	if( voxelType === 0 ){
		// TODO vphy.Body.setPosition
		body.x	= body.y = body.z = 0;
		body.setVelocity(0,0,0);
		world.sounds()['goal'].play();
	}
}

Marble.Ball.prototype.tick	= function()
{
	// call the parent class .tick()
	this.parent.tick.call(this);
}