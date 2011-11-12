Marble.PageGameMain	= function()
{
	this._playerLives	= 3;

	this._gameRoundCtor();
}

Marble.PageGameMain.prototype.destroy	= function()
{
	this._gameRoundDtor();
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
}

Marble.PageGameMain.prototype._gameRoundDtor	= function()
{
	if( !this._gameRound )	return;
	
	this._gameRound.unbind("completed", this._$gameRoundOnCompleted);

	this._gameRound	&& this._gameRound.destroy();
	this._gameRound	= null;	
}
Marble.PageGameMain.prototype._gameRoundOnCompleted	= function()
{
	console.log("completed", this._playerLives)
	
	this._gameRoundDtor();
	
	this._playerLives--;

	if( this._playerLives === 0 ){
		this.trigger('completed');
		return;
	}
	
	this._gameRoundCtor();
}