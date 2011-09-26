/**
*/
Marble.Player	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {
		color	: 0xAAAAAA
	});
	
	this._devOrientationEnable	= false;
}

// inherit from Marble.Marble methods
Marble.Player.prototype			= new Marble.Marble();
Marble.Player.prototype.constructor	= Marble.Marble;
Marble.Player.prototype.parent		= Marble.Marble.prototype;


Marble.Player.prototype._controlKeyboard	= function()
{
	var key		= {
		left	: keyboard.pressed('A') || keyboard.pressed('J') || keyboard.pressed('left') 	|| keyboard.pressed('Q') ,
		right	: keyboard.pressed('D') || keyboard.pressed('L') || keyboard.pressed('right'),
		up	: keyboard.pressed('W') || keyboard.pressed('I') || keyboard.pressed('up')	 || keyboard.pressed('Z') ,
		down	: keyboard.pressed('S') || keyboard.pressed('K') || keyboard.pressed('down')
	};

	var acceleration= 0.5;
	if( key.left )	this._speed.x	-= acceleration;
	if( key.right )	this._speed.x	+= acceleration;
	if( key.up )	this._speed.z	-= acceleration;
	if( key.down )	this._speed.z	+= acceleration;	
}

Marble.Player.prototype._controlDevOrientation	= function()
{
	var maxAngleX	= 25 * Math.PI/180;
	var epsilonX	=  2 * Math.PI/180;
	var maxAccelX	= 0.5;
	var angleX	= devOrientation.angleX();	
	angleX		= Math.min(+maxAngleX, angleX);
	angleX		= Math.max(-maxAngleX, angleX);
	angleX		= Math.abs(angleX) < epsilonX ? 0 : angleX;
	this._speed.z	+= maxAccelX * angleX / maxAngleX;


	var maxAngleZ	= 25 * Math.PI/180;
	var epsilonZ	=  2 * Math.PI/180;
	var maxAccelZ	= 0.5;
	var angleZ	= devOrientation.angleZ();	
	angleZ		= Math.min(+maxAngleZ, angleZ);
	angleZ		= Math.max(-maxAngleZ, angleZ);
	angleZ		= Math.abs(angleZ) < epsilonZ ? 0 : angleZ;
	this._speed.x	+= maxAccelZ * angleZ / maxAngleZ;
}

Marble.Player.prototype.tick	= function()
{
	// if 'G' is pressed, disabled this._devOrientationEnable, if 'shift+G' enable it
	if( keyboard.pressed('G') )		this._devOrientationEnable	= keyboard.pressed('shift');
		
	this._controlKeyboard();
	if( this._devOrientationEnable )	this._controlDevOrientation();

	// call the parent class .tick()
	this.parent.tick.call(this);
}