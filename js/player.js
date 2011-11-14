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
		//maxSpeed	: 0.9*Marble.tileSize
	});
	
	this._devOrientationEnable	= false;

	// accelerator for keyboard control
	this._keyboardAcc	= new Marble.Player._keyboardAccelerator({
		bodies		: [microphysics.body(this.mesh())],
		acceleration	: 8*Marble.tileSize,
		keyboard	: keyboard
	})
	microphysics.world().add(this._keyboardAcc);

	// accelerator for deviceOrientation
	this._devOrientAcc	= {
		type	: vphy.types.ACCELERATOR,
		remove	: function(){ this.to_remove	= true;	},	// TODO this SHOULD be in microphysic
		perform	: this._acceleratorDeviceOrientation.bind(this)
	};		
	microphysics.world().add(this._devOrientAcc);
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
		pageGameRound.triggerGameOver('dead');
	}
}

/**
 * TODO put that elsewhere
*/
Marble.Player._keyboardAccelerator	= vphy.Class({
	__extends__	: vphy.Accelerator,
	__init__	: function(args){
		var params = vphy.extend({
		}, args);
		this.bodies		= params.bodies;
		this.acceleration	= params.acceleration;
		this.keyboard		= params.keyboard;
	},
	perform		: function(){
		var keyboard	= this.keyboard;
		var acc		= this.acceleration;
		var key		= {
			left	: keyboard.pressed('A') || keyboard.pressed('J') || keyboard.pressed('left') 	|| keyboard.pressed('Q') ,
			right	: keyboard.pressed('D') || keyboard.pressed('L') || keyboard.pressed('right'),
			up	: keyboard.pressed('W') || keyboard.pressed('I') || keyboard.pressed('up')	 || keyboard.pressed('Z') ,
			down	: keyboard.pressed('S') || keyboard.pressed('K') || keyboard.pressed('down')
		};
		var key		= {
			left	: keyboard.pressed('left'),
			right	: keyboard.pressed('right'),
			up	: keyboard.pressed('up'),
			down	: keyboard.pressed('down')
		};
		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];
			if( key.right )	body.accelerate(+acc,0,0);
			if( key.left )	body.accelerate(-acc,0,0);
			if( key.up )	body.accelerate(0,0,-acc);
			if( key.down )	body.accelerate(0,0,+acc);
		}
	}
});

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

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.Player.prototype.scoreChange	= function(delta)
{
	osdLayer.scoreChange(delta);
}

Marble.Player.prototype.tick	= function()
{
	// call the parent class .tick()
	this.parent.tick.call(this);
}