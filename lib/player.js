/**
*/
Marble.Player	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this, {
		color	: 0x888888
	});
}

// inherit from Marble.Marble methods
Marble.Player.prototype			= new Marble.Marble();
Marble.Player.prototype.constructor	= Marble.Marble;
Marble.Player.prototype.parent		= Marble.Marble.prototype;

Marble.Player.prototype.tick	= function()
{
	var key		= {
		left	: keyboard.pressed('A') || keyboard.pressed('J') || keyboard.pressed('Q'),
		right	: keyboard.pressed('D') || keyboard.pressed('L'),
		up	: keyboard.pressed('W') || keyboard.pressed('I') || keyboard.pressed('Z'),
		down	: keyboard.pressed('S') || keyboard.pressed('K')
	};

	var acceleration= 0.5;
	if( key.left )	this._speed.x	-= acceleration;
	if( key.right )	this._speed.x	+= acceleration;
	if( key.up )	this._speed.z	-= acceleration;
	if( key.down )	this._speed.z	+= acceleration;

	// call the parent class .tick()
	this.parent.tick.call(this);
}