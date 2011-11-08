var SoundRenderer	= function()
{
	// call the contructor
	soundManager.onready(function(){
		// check if SM2 successfully loaded..
		if( !soundManager.supported() ){
			this.trigger('unsupported');
			return;
		}
		// tigger the event
		this.trigger('ready');
	}.bind(this));
}

SoundRenderer.prototype.destroy	= function()
{
}

// mixin MicroEvent 
MicroEvent.mixin(SoundRenderer);
