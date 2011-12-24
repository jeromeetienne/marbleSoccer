//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

/**
*/
Marble.Player	= function()
{
	// call parent class constructor
	this.parent.constructor.call(this);
	this.parent.init.call(this, {
		material	: Marble.PoolBallUtils.ballMaterial('cue'),
		position	: new THREE.Vector3(0,Marble.tileSize*2.5,0)
	});

	// accelerator for keyboard control
	this._keyboardAcc	= new vphy.ThreexKeyboardAccelerator({
		bodies		: [microphysics.body(this.mesh())],
		acceleration	: 8*Marble.tileSize,
		keyboard	: keyboard
	});
	microphysics.world().add(this._keyboardAcc);

	// accelerator for deviceOrientation
	if( false ){
		this._devOrientAcc	= new vphy.ThreexDeviceOrientationAccelerator({
			bodies			: [microphysics.body(this.mesh())],
			deviceOrientation	: devOrientation
		});
		microphysics.world().add(this._devOrientAcc);		
	}
	
	// accelerator for deviceOrientation
	if( vJoystick ){
		this._virtualJoystickAcc	= new vphy.VirtualJoystickAccelerator({
			bodies		: [microphysics.body(this.mesh())],
			acceleration	: 8*Marble.tileSize,
			joystick	: vJoystick
		});
		microphysics.world().add(this._virtualJoystickAcc);		
	}
	
	this._fpsControl	= new Marble.PlayerFpsControl();
}

// inherit from Marble.Marble methods
Marble.Player.prototype			= new Marble.Marble();
Marble.Player.prototype.constructor	= Marble.Marble;
Marble.Player.prototype.parent		= Marble.Marble.prototype;

// mixin MicroEvent
MicroEvent.mixin(Marble.Player);

Marble.Player.prototype.destroy	= function()
{
	this._keyboardAcc	&& microphysics.world().remove(this._keyboardAcc);
	this._keyboardAcc	= null;
	
	this._devOrientAcc	&& microphysics.world().remove(this._devOrientAcc);
	this._devOrientAcc	= null;	

	this._virtualJoystickAcc&& microphysics.world().remove(this._virtualJoystickAcc);
	this._virtualJoystickAcc	= null;	

	this._fpsControl	&& this._fpsControl.destroy();
	this._fpsControl	= null;	
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.Player.prototype.onContactVoxel	= function(voxelType)
{
	var body	= microphysics.body( this.mesh() );
//return;
// experimentation on what is possible to do with the 
	if( voxelType === 0 ){
		body.setPosition(0, Marble.tileSize, 0);
		body.setVelocity(0,0,0);
		soundPool.get('die').play();
		pageGameLife.triggerEndOfLevel('dead', 'killed');
	}
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.Player.prototype.fpsControl	= function(){ return this._fpsControl;	}

Marble.Player.prototype.scoreChange	= function(delta)
{
	osdLayer.scoreChange(delta);
}

Marble.Player.prototype.tick	= function()
{
	// call the parent class .tick()
	this.parent.tick.call(this);
}