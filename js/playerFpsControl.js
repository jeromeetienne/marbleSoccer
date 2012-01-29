Marble.PlayerFpsControl	= function()
{
	this._angleY	= -Math.PI/2;
	// bind events
	this._$onMouseMove	= this._onMouseMove.bind(this);
	this._$onFullscreenChange=this._onFullscreenChange.bind(this);
	

	if( this.isSupported() === false ){
		console.log("mouse lock unsupported :(");
		return;
	}
	console.log("mouse lock supported!!");
	
	// some compatibility layer for firefox/webkit
	navigator.pointer	= navigator.pointer || navigator.webkitPointer;
	navigator.pointer.islocked	= navigator.pointer.islocked || function(){ return navigator.pointer.isLocked; };

	document.addEventListener('mozfullscreenchange'		, this._$onFullscreenChange, false);
	document.addEventListener('webkitfullscreenchange'	, this._$onFullscreenChange, false);
}

Marble.PlayerFpsControl.prototype.destroy	= function()
{
	document.removeEventListener('mozfullscreenchange'	, this._$onFullscreenChange);
	document.removeEventListener('webkitfullscreenchange'	, this._$onFullscreenChange);

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

		navigator.pointer.lock(document.body, function(){
			console.log("navigator.pointer.lock() succeed", navigator.pointer.islocked())

		},function(){
			console.log("navigator.pointer.lock() failled")
		});

		document.addEventListener('mousemove', this._$onMouseMove, false);

		// accelerator for keyboard control
		var player	= gameLevel.player();
		this._fpsAcc	= new Marble.PlayerFpsControl.FpsAccelerator({
			bodies		: [microphysics.body(player.mesh())],
			acceleration	: 8*Marble.tileSize,
			keyboard	: keyboard
		});
		microphysics.world().add(this._fpsAcc);

		//console.log("after pointer lock, isLocked is", navigator.pointer.islocked());
		//console.assert(navigator.pointer.islocked());

	}else{
		navigator.pointer.unlock();		
		document.removeEventListener('mousemove', this._$onMousemove);

		this._fpsAcc	&& microphysics.world().remove(this._fpsAcc);
		this._fpsAcc	= null;
	}
}

Marble.PlayerFpsControl.prototype.isSupported	= function(domEvent)
{
	return navigator.pointer !== undefined || navigator.webkitPointer !== undefined;
}

Marble.PlayerFpsControl.prototype.isActivated	= function(domEvent)
{
	if( !this.isSupported() )	return false;
	var isLocked	= navigator.pointer.islocked();
	return isLocked;
}

Marble.PlayerFpsControl.prototype._onMouseMove	= function(domEvent)
{
	var movementX	= domEvent.movementX !== undefined ? domEvent.movementX : domEvent.webkitMovementX;
	var movementY	= domEvent.movementY !== undefined ? domEvent.movementY : domEvent.webkitMovementY;
	console.assert( movementX !== undefined );
	console.assert( movementY !== undefined );

	//console.log("_onMouseMove", movementX, movementY);console.dir(domEvent);

	var speed	= 1 / 1024;	// nPixPerPI;
	var deltaAngle	= movementX * speed * Math.PI;
	this._angleY	+= deltaAngle;
	this._angleY	%= 2*Math.PI;
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
		var key		= {
			left	: keyboard.pressed('A') || keyboard.pressed('J') || keyboard.pressed('Q'),
			right	: keyboard.pressed('D') || keyboard.pressed('L') ,
			up	: keyboard.pressed('W') || keyboard.pressed('I') || keyboard.pressed('Z'),
			down	: keyboard.pressed('S') || keyboard.pressed('K')
		};
		var angle	= gameLevel.player().fpsControl().angleY();
		var accX	= Math.cos(angle) * this.acceleration;
		var accZ	= Math.sin(angle) * this.acceleration;;
		for(var i = 0; i < this.bodies.length; i++){
			var body	= this.bodies[i];
			if( key.right )	body.accelerate(-accZ,0,+accX);
			if( key.left )	body.accelerate(+accZ,0,-accX);
			if( key.up )	body.accelerate(+accX,0,+accZ);
			if( key.down )	body.accelerate(-accX,0,-accZ);
		}
	}
});

