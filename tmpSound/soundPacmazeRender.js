var WebyMaze	= WebyMaze || {};

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

WebyMaze.SoundRender	= function(opts)
{
	// get parameters from opts
	this._enableFx		= 'enableFx'	in opts ? opts.enableFx		: false;
	this._enableTrack	= 'enableTrack'	in opts ? opts.enableTrack	: false;

	// init instance variable
	this._soundsFx	= {};
	this._fxIdToUrl	= {
		'die'		: 'sounds/pacman/die.mp3',
		'win'		: 'sounds/pacman/vcs_90.mp3',
		'eatPill'	: 'sounds/pacman/eating.short.mp3',
		'eatEnergizer'	: 'sounds/pacman/eatpill.mp3',
		'eatGhost'	: 'sounds/pacman/eatghost.mp3',
		'siren'		: 'sounds/pacman/siren.mp3',
		'opening_sound'	: 'sounds/pacman/opening_song.mp3'
	};
	this._soundTrack= null;


	// call the contructor
	soundManager.onready(function(){
		// check if SM2 successfully loaded..
		if( !soundManager.supported() ){
			alert("soundmanager is not supported. no sound")
			return;
		}
		// tigger the event
		this.trigger('ready');
		// create the sound track
		if( this._enableTrack )	this.soundTrackStart();
		// create all soundsFx
		this._soundFxCtor();		
	}.bind(this));
}

WebyMaze.SoundRender.prototype.destroy	= function()
{
	this._soundTrackDtor();
	this._soundFxDtor();
}

// mixin MicroEvent 
MicroEvent.mixin(WebyMaze.SoundRender);

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

WebyMaze.SoundRender.prototype.enableFx	= function(val)
{
	if( typeof val === 'undefined' )	return this._enableFx;
	// TODO here stop all the currently playing sound	
	return this._enableFx = val;			
}

WebyMaze.SoundRender.prototype.soundFxStart		= function(fxId, opts)
{
	// return now if opts.enabledFx
	if( this._enableFx === false )	return;
	console.log("soundRender.play() ", fxId, opts);
	// if the sound isnt yet init, do nothing
	if( !this._soundsFx[fxId] )	console.log("sound "+fxId+" isnt init");
	if( !this._soundsFx[fxId] )	return;
	// trigger the soundPlay
	if(opts && opts.loops){
		// NOTE: working around the 'loops' parameter failing
		console.assert( ! opts.onfinish)
		opts.onfinish	= function(){
			// honor the loop counting
			if( opts.loops === 0 )	return;
			opts.loops--;
			// relaunch to loop
			this._soundsFx[fxId].play(opts);
		}.bind(this)
	}
	this._soundsFx[fxId].play(opts)
}

WebyMaze.SoundRender.prototype.soundFxStop		= function(fxId)
{
	// return now if opts.enabledFx
	if( this._enableFx === false )	return;
	console.log("soundRender.stop() ", fxId);
	// if the sound isnt yet init, do nothing
	if( !this._soundsFx[fxId] )	console.log("sound "+fxId+" isnt init");
	if( !this._soundsFx[fxId] )	return;
	// stop the sound
	this._soundsFx[fxId].stop();
}

WebyMaze.SoundRender.prototype._soundFxCtor	= function()
{
	// create all soundsFx
	Object.keys(this._fxIdToUrl).forEach(function(fxId){
		var url	= this._fxIdToUrl[fxId];
		//console.log("soundFx", fxId, " is starting init")
		this._soundsFx[fxId]	= soundManager.createSound({
			id	: fxId,
			volume	: 50,
			url	: url,
			autoLoad: true,
			onload	: function(success){
				//console.log("soundFx", fxId, "is loaded");
			}
		});
	}.bind(this));
}

WebyMaze.SoundRender.prototype._soundFxDtor	= function()
{
	Object.keys(this._fxIdToUrl).forEach(function(fxId){
		this.soundFxStop(fxId)
	}.bind(this));	
}


//////////////////////////////////////////////////////////////////////////////////
//		soundTrack							//
//////////////////////////////////////////////////////////////////////////////////

/**
 * Initialize the soundtrack
 *
 * - it is looping for ever
*/
WebyMaze.SoundRender.prototype._soundTrackCtor	= function(){
	// create the sound
	this._soundTrack	= soundManager.createSound({
		id	: 'soundTrack',
		url	: 'sounds/Hot-Butter-Popcorn.mp3',
		autoLoad: true,
		volume	: 100,
		onload	: function() {
			this._soundTrack.play();
		}.bind(this),
		onfinish	: function(){
			this._soundTrack.play();
		}.bind(this)
	});
}

WebyMaze.SoundRender.prototype._soundTrackDtor	= function(){
	if( this._soundTrack ){
		this._soundTrack.destruct();
		this._soundTrack	= null;			
	}
}

WebyMaze.SoundRender.prototype.soundTrackRunning	= function(){
	return this._soundTrack ? true : false;
}

WebyMaze.SoundRender.prototype.soundTrackStart	= function()
{
	this._soundTrackDtor();
	this._soundTrackCtor();
}

WebyMaze.SoundRender.prototype.soundTrackStop	= function(){
	this._soundTrackDtor();
}

