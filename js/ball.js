/**
*/
Marble.Ball	= function(opts)
{
	var ballDesc	= opts.ballDesc	|| "8";

	// call parent class constructor
	this.parent.constructor.call(this)
	this.parent.init.call(this, {
		color		: 0xFFAA00,
		material	: Marble.PoolBallUtils.ballMaterial(ballDesc),
		position	: new THREE.Vector3(75+Math.random()*100, Marble.tileSize, 75+Math.random()*100)
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
		body.x	= body.z = 0;
		body.y	= Marble.tileSize;
		body.setVelocity(0,0,0);

		world.player().scoreChange(20);
		world.sounds()['goal'].play();
	}
}

Marble.Ball.prototype.tick	= function()
{
	// call the parent class .tick()
	this.parent.tick.call(this);
}