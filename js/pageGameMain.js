var osdLayer;
var pageGameMain;

Marble.PageGameMain	= function()
{
	this._playerLives	= 3;

	osdLayer	= new Marble.OsdLayer();
	osdLayer.livesSet( this._playerLives );

	this._gameRoundCtor();

	this._timeoutCtor();
}

Marble.PageGameMain.prototype.destroy	= function()
{
	this._gameRoundDtor();
	this._timeoutDtor();

	osdLayer	&& osdLayer.destroy();
	osdLayer	= null;
}

// mixin MicroEvent
MicroEvent.mixin(Marble.PageGameMain);


//////////////////////////////////////////////////////////////////////////////////
//		pageGameRound							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameMain.prototype._gameRoundCtor	= function()
{
	console.assert(!this._gameRound);

	this._gameRound		= new Marble.PageGameRound();

	this._$gameRoundOnCompleted	= this._gameRoundOnCompleted.bind(this);
	this._gameRound.bind("completed", this._$gameRoundOnCompleted);

	// export as a global
	pageGameRound	= this._gameRound;
}

Marble.PageGameMain.prototype._gameRoundDtor	= function()
{
	if( !this._gameRound )	return;
	
	this._gameRound.unbind("completed", this._$gameRoundOnCompleted);

	this._gameRound	&& this._gameRound.destroy();
	this._gameRound	= null;
	
	// export as a global
	pageGameRound	= this._gameRound;
}
Marble.PageGameMain.prototype._gameRoundOnCompleted	= function()
{
	this._gameRoundDtor();	

	if( this._playerLives === 0 ){
		this.trigger('completed');
		return;
	}

	this._playerLives--;
	osdLayer.livesSet( this._playerLives );
	
	this._gameRoundCtor();
}


//////////////////////////////////////////////////////////////////////////////////
//		timeoutCtor							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameMain.prototype._timeoutCtor	= function()
{
	console.assert( !this._timeoutId )
	this._timeoutId	= setTimeout(this._timeoutCallback.bind(this), 1*1000);
	this._timeout	= 120;
}
Marble.PageGameMain.prototype._timeoutDtor	= function()
{
	if( !this._timeoutId )	return;
	clearTimeout(this._timeoutId);
	this._timeoutId	= null;
}

Marble.PageGameMain.prototype._timeoutCallback	= function()
{
	if( this._timeout < 0 ){
		this.trigger('completed', 'timeout');
		return;
	}
	osdLayer.timeoutSet(this._timeout+'s');
	
	this._timeout--;
	this._timeoutId	= setTimeout(this._timeoutCallback.bind(this), 1*1000);
}
