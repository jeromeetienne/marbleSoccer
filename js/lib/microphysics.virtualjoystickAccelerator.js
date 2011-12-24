vphy.VirtualJoystickAccelerator	= vphy.Class({
	__extends__	: vphy.Accelerator,
	__init__	: function(args){
		var params = vphy.extend({
		}, args);
		this.bodies		= params.bodies;
		this.joystick		= params.joystick;
		this.acceleration	= params.acceleration;
	},
	perform		: function(){
		var joystick	= this.joystick;
		var acc		= this.acceleration;
		var key		= {
			right	: joystick.right(),
			up	: joystick.up(),
			left	: joystick.left(),
			down	: joystick.down()
		};
		// TODO do something like device orientation
		// something which takes advantage of the analogic part
		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];
			if( key.right )	body.accelerate(+acc,0,0);
			if( key.left )	body.accelerate(-acc,0,0);
			if( key.up )	body.accelerate(0,0,-acc);
			if( key.down )	body.accelerate(0,0,+acc);
		}
	}
});
