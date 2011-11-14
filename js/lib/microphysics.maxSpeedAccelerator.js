vphy.MaxSpeedAccelerator	= vphy.Class({
	__extends__	: vphy.Accelerator,
	__init__	: function(args){
		var params = vphy.extend({
		}, args);
		this.bodies	= params.bodies;
		this.maxSpeed	= params.maxSpeed;
	},
	perform		: function(){
		var maxSpeed	= this.maxSpeed;
		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];
			var velocity	= body.getVelocity();
			var speed	= Math.sqrt(velocity[0]*velocity[0], velocity[1]*velocity[1], velocity[2]*velocity[2]);
			if( speed > maxSpeed ){
				velocity[0]	= velocity[0]/speed * maxSpeed;
				velocity[1]	= velocity[1]/speed * maxSpeed;
				velocity[2]	= velocity[2]/speed * maxSpeed;
				body.setVelocity(velocity[0], velocity[1], velocity[2]);
			}
		}
	}
});
