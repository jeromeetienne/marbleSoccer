Marble.PlayerFpsControl	= function()
{
	this._angleY	= 0;
	// bind events
	this._$onMouseMove	= this._onMouseMove.bind(this);
	this._$onFullscreenChange=this._onFullscreenChange.bind(this);
	document.addEventListener('mozfullscreenchange', this._$onFullscreenChange, false);
}

Marble.PlayerFpsControl.prototype.destroy	= function()
{
	document.removeEventListener('mozfullscreenchange'	, this._$onFullscreenChange);

	document.removeEventListener('mousemove'		, this._$onMousemove);

	this._fpsAcc	&& microphysics.world().remove(this._fpsAcc);
	this._fpsAcc	= null;
}

Marble.PlayerFpsControl.prototype.angleY	= function()
{
	return this._angleY;
}

Marble.PlayerFpsControl.prototype._onFullscreenChange	= function()
{
	if( THREEx.FullScreen.activated() ){

		navigator.pointer.lock(document.body);

		console.log("after pointer lock, isLocked is", navigator.pointer.islocked());
		console.assert(navigator.pointer.islocked());

		document.addEventListener('mousemove', this._$onMouseMove, false);

		// accelerator for keyboard control
		var player	= gameLevel.player();
		this._fpsAcc	= new Marble.PlayerFpsControl.FpsAccelerator({
			bodies		: [microphysics.body(player.mesh())],
			acceleration	: 8*Marble.tileSize,
			keyboard	: keyboard
		});
		microphysics.world().add(this._fpsAcc);

	}else{
		navigator.pointer.unlock();		
		document.removeEventListener('mousemove', this._$onMousemove);

		this._fpsAcc	&& microphysics.world().remove(this._fpsAcc);
		this._fpsAcc	= null;
	}
}

Marble.PlayerFpsControl.prototype.isSupported	= function(domEvent)
{
	return navigator.pointer !== undefined;
}
Marble.PlayerFpsControl.prototype.isActivated	= function(domEvent)
{
	if( !this.isSupported() )	return false;
	var isLocked	= navigator.pointer.islocked();
	return isLocked;
}

Marble.PlayerFpsControl.prototype._onMouseMove	= function(domEvent)
{
	console.assert( domEvent.movementX !== undefined );
	console.assert( domEvent.movementY !== undefined );
	console.log("mousemove", "movementX", domEvent.movementX, "movementY", domEvent.movementY);

	var speed	= 1 / 1024;
	var deltaAngle	= domEvent.movementX * speed * Math.PI * -1;
	this._angleY	+= deltaAngle;
	this._angleY	%= 2*Math.PI;

	console.log("angleY", this._angleY/Math.PI*180);
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.PlayerFpsControl.FpsAccelerator	= vphy.Class({
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
			left	: keyboard.pressed('A') || keyboard.pressed('J') || keyboard.pressed('Q') ,
			right	: keyboard.pressed('D') || keyboard.pressed('L') ,
			up	: keyboard.pressed('W') || keyboard.pressed('I') || keyboard.pressed('Z') ,
			down	: keyboard.pressed('S') || keyboard.pressed('K')
		};
		// TODO rewrite formula in a controlled manner
		var angle	= gameLevel.player().fpsControl().angleY();
		var accX	= - Math.sin(angle) * this.acceleration;
		var accZ	= - Math.cos(angle) * this.acceleration;;
		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];
			if( key.right )	body.accelerate(-accZ,0,+accX);
			if( key.left )	body.accelerate(+accZ,0,-accX);
			if( key.up )	body.accelerate(+accX,0,+accZ);
			if( key.down )	body.accelerate(-accX,0,-accZ);
		}
	}
});

