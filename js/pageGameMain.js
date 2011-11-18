var osdLayer;
var pageGameLife;

Marble.PageGameMain	= function()
{
	this._playerLives	= 3;

	osdLayer	= new Marble.OsdLayer();
	osdLayer.livesSet( this._playerLives );

	this._gameLifeCtor();
}

Marble.PageGameMain.prototype.destroy	= function()
{
	this._gameLifeDtor();

	osdLayer	&& osdLayer.destroy();
	osdLayer	= null;
}

// mixin MicroEvent
MicroEvent.mixin(Marble.PageGameMain);

//////////////////////////////////////////////////////////////////////////////////
//		pageGameLife							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameMain.prototype._gameLifeCtor	= function()
{
	console.assert(!this._gameLife);

	this._gameLife		= new Marble.PageGameLife();

	this._$gameLifeOnCompleted	= this._gameLifeOnCompleted.bind(this);
	this._gameLife.bind("completed", this._$gameLifeOnCompleted);

	// export as a global
	pageGameLife	= this._gameLife;
}

Marble.PageGameMain.prototype._gameLifeDtor	= function()
{
	if( !this._gameLife )	return;
	
	this._gameLife.unbind("completed", this._$gameLifeOnCompleted);

	this._gameLife	&& this._gameLife.destroy();
	this._gameLife	= null;
	
	// export as a global
	pageGameLife	= this._gameLife;
}
Marble.PageGameMain.prototype._gameLifeOnCompleted	= function()
{
	this._gameLifeDtor();	

	if( this._playerLives === 0 ){
		this.trigger('completed');
		return;
	}

	this._playerLives--;
	osdLayer.livesSet( this._playerLives );
	
	this._gameLifeCtor();
}


