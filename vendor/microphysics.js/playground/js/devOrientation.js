var Playground	= Playground	|| {};

Playground.DevOrientation	= function()
{
	this._orientationState	= new THREEx.DeviceOrientationState();
	this._accelerator	= {
		type: vphy.types.ACCELERATOR,
		perform: function(bodies, deltaTime){
			if( !deviceOrientation )	return;
			var vector	= new THREE.Vector3(0, -10 * 250, 0);
			var angleX	= this._orientationState.angleX();
			var angleZ	= this._orientationState.angleZ();
			
			var srcMatrix	= new THREE.Matrix4();
			srcMatrix.setPosition(vector);
			//angleY		= Math.PI;
			
			var rotMatrix	= new THREE.Matrix4();
			rotMatrix.multiplySelf(new THREE.Matrix4().setRotationX(angleX));
			rotMatrix.multiplySelf(new THREE.Matrix4().setRotationZ(-angleZ)); 
		
			rotMatrix.multiplySelf(srcMatrix);
			var position	= rotMatrix.getPosition();
			for(var i=0; i < bodies.length; i++){
				var body	= bodies[i];
				body.accelerate(position.x, position.y, position.z); 
			}
		}.bind(this),
		remove	: function(){
			this.to_remove	= true;
		}
	};
	microphysics.world().add(this._accelerator);
}

Playground.DevOrientation.prototype.destroy	= function()
{
	this._orientationState.destroy();
	this._orientationState	= null;
	
	microphysics.world().remove(this._accelerator);
	this._accelerator	= null;
}

