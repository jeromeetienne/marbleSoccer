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
