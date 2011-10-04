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

	// accelerator for keyboard control	
	microphysics.world().add({
		type	: vphy.types.ACCELERATOR,
		perform	: this._acceleratorKeyboard.bind(this)
	});
	// accelerator for deviceOrientation
	microphysics.world().add({
		type	: vphy.types.ACCELERATOR,
		perform	: this._acceleratorDeviceOrientation.bind(this)
	});		
}

// inherit from Marble.Marble methods
Marble.Player.prototype			= new Marble.Marble();
Marble.Player.prototype.constructor	= Marble.Marble;
Marble.Player.prototype.parent		= Marble.Marble.prototype;


Marble.Player.prototype._acceleratorKeyboard	= function()
{
	var key		= {
		left	: keyboard.pressed('A') || keyboard.pressed('J') || keyboard.pressed('left') 	|| keyboard.pressed('Q') ,
		right	: keyboard.pressed('D') || keyboard.pressed('L') || keyboard.pressed('right'),
		up	: keyboard.pressed('W') || keyboard.pressed('I') || keyboard.pressed('up')	 || keyboard.pressed('Z') ,
		down	: keyboard.pressed('S') || keyboard.pressed('K') || keyboard.pressed('down')
	};
	var body	= this.mesh()._vphyBody;
	var acc		= 30*Marble.tileSize;
	if( key.right )	body.accelerate(+acc,0,0);
	if( key.left )	body.accelerate(-acc,0,0);
	if( key.up )	body.accelerate(0,0,-acc);
	if( key.down )	body.accelerate(0,0,+acc);
}

Marble.Player.prototype._acceleratorDeviceOrientation	= function()
{
	// if 'G' is pressed, disabled this._devOrientationEnable, if 'shift+G' enable it
	if( keyboard.pressed('G') )		this._devOrientationEnable	= keyboard.pressed('shift');

	// return now if this._devOrientationEnable is false
	if( !this._devOrientationEnable )	return;

	var maxAngleX	= 25 * Math.PI/180;
	var epsilonX	=  2 * Math.PI/180;
	var maxAccelX	= 20 * Marble.tileSize;
	var angleX	= devOrientation.angleX();	
	angleX		= Math.min(+maxAngleX, angleX);
	angleX		= Math.max(-maxAngleX, angleX);
	angleX		= Math.abs(angleX) < epsilonX ? 0 : angleX;
	var accelX	= maxAccelX * angleX / maxAngleX;

	var maxAngleZ	= 25 * Math.PI/180;
	var epsilonZ	=  2 * Math.PI/180;
	var maxAccelZ	= 20 * Marble.tileSize;
	var angleZ	= devOrientation.angleZ();	
	angleZ		= Math.min(+maxAngleZ, angleZ);
	angleZ		= Math.max(-maxAngleZ, angleZ);
	angleZ		= Math.abs(angleZ) < epsilonZ ? 0 : angleZ;
	var accelZ	= maxAccelZ * angleZ / maxAngleZ;

	var body	= this.mesh()._vphyBody;
	body.accelerate(accelZ, 0, accelX);
}

Marble.Player.prototype.tick	= function()
{
	// call the parent class .tick()
	this.parent.tick.call(this);
}