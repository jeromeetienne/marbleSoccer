Marble.VisualFx	= function(){}

Marble.VisualFx.prototype.init	= function(opts)
{
	this._timeout	= opts.timeout	|| undefined;

	if( this._timeout ){
		this._timeoutId = setTimeout(function(){
			this.trigger('autodestroy');
		}.bind(this), this._timeout);
	}
}

// mixin MicroEvent
MicroEvent.mixin(Marble.VisualFx);

Marble.VisualFx.prototype.destroy	= function()
{
	this._timeoutId		&& clearTimeout(this._timeoutId)
	this._timeoutId		= null;	
}

Marble.VisualFx.prototype.update	= function()
{
	// do nothing
}