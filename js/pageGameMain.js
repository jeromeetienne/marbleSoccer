var osdLayer;
var pageGameRound;

Marble.PageGameMain	= function()
{
	this._playerLives	= 3;

	osdLayer	= new Marble.OsdLayer();
	osdLayer.livesSet( this._playerLives );

	this._gameRoundCtor();
}

Marble.PageGameMain.prototype.destroy	= function()
{
	this._gameRoundDtor();

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


