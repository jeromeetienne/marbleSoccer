vphy.ThreexDeviceOrientationAccelerator	= vphy.Class({
	__extends__	: vphy.Accelerator,
	__init__	: function(args){
		var params = vphy.extend({
		}, args);
		this.bodies		= params.bodies;
		this.deviceOrientation	= params.deviceOrientation;
	},
	perform		: function(){
		var devOrientation	= this.deviceOrientation;
// TODO make those tunnable
		var maxAngleX	= 25 * Math.PI/180;
		var epsilonX	=  2 * Math.PI/180;
		var maxAccelX	= 20 * Marble.tileSize;

		var maxAngleZ	= 25 * Math.PI/180;
		var epsilonZ	=  2 * Math.PI/180;
		var maxAccelZ	= 20 * Marble.tileSize;

		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];

			var angleX	= devOrientation.angleX();	
			angleX		= Math.min(+maxAngleX, angleX);
			angleX		= Math.max(-maxAngleX, angleX);
			angleX		= Math.abs(angleX) < epsilonX ? 0 : angleX;
			var accelX	= maxAccelX * angleX / maxAngleX;

			var angleZ	= devOrientation.angleZ();	
			angleZ		= Math.min(+maxAngleZ, angleZ);
			angleZ		= Math.max(-maxAngleZ, angleZ);
			angleZ		= Math.abs(angleZ) < epsilonZ ? 0 : angleZ;
			var accelZ	= maxAccelZ * angleZ / maxAngleZ;

			body.accelerate(accelZ, 0, accelX);
		}
	}
});
