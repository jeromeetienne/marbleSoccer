vphy.FrictionAccelerator	= vphy.Class({
	__extends__	: vphy.Accelerator,
	__init__	: function(args){
		var params = vphy.extend({
			x	: 1,
			y	: 1,
			z	: 1
		}, args);
		this.bodies	= params.bodies;
		this.frictionX	= params.x;
		this.frictionY	= params.y;
		this.frictionZ	= params.z;
	},
	perform		: function(){
		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];
			var speed	= body.getVelocity();
			speed[0]	*= this.frictionX;
			speed[1]	*= this.frictionY;
			speed[2]	*= this.frictionZ;
			body.setVelocity(speed[0], speed[1], speed[2]);				
		}
	}
});
