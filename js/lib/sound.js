Marble.Sound	= function(opts)
{
	opts		= opts || {};
	this._urls	= opts.urls	|| console.assert(false, "urls parameter MUST be provided");
	this._disabled	= opts.disabled !== undefined	? opts.disabled : false;
	this._volume	= opts.volume !== undefined	? opts.volume : 1.0;

	this._id	= "sound-"+Math.floor(Math.random()*99999999).toString(36);

	this._sound	= null;
	this._initialize();
}

Marble.Sound.prototype.destroy	= function()
{
	if( this._sound )	this._sound.destruct();
}

// mixin MicroEvent
MicroEvent.mixin(Marble.Sound);

Marble.Sound.prototype.isInitialized	= function()
{
	if( !this._sound )	return false;
	return this._sound.loaded;
}

Marble.Sound.prototype._createSound	= function()
{
	this._sound	= soundManager.createSound({
		id	: this._id,
		url	: this._urls[0],
		autoLoad: true,
		onload	: function(success){
			console.log("loading sound", this._id, success ? "suceed" : "failed");
			if( success )	this.trigger('loaded');
			else		this.trigger('errorLoading');
		}.bind(this)
	});		
}

Marble.Sound.prototype._initialize	= function()
{
	if( this._disabled )	return;
	if( soundManager.ok() ){
		this._createSound();
	}else{
		soundManager.onready(function(){
			this._createSound();
		}.bind(this));		
	}
}


Marble.Sound.prototype.play	= function(opts)
{
	opts		= opts || {};
	var volume	= opts.volume	|| this._volume;

	if( !this.isInitialized() ){
		this._initialize();
		return;
	}

	this._sound.play({
		volume	: volume * 100
	});
}

Marble.Sound.prototype.stop	= function()
{
	if( !this.isInitialized() ){
		this._initialize();
		return;
	}
	this._sound.stop();
}

