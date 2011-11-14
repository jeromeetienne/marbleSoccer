vphy.ThreexKeyboardAccelerator	= vphy.Class({
	__extends__	: vphy.Accelerator,
	__init__	: function(args){
		var params = vphy.extend({
		}, args);
		this.bodies		= params.bodies;
		this.keyboard		= params.keyboard;
		this.acceleration	= params.acceleration;
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
