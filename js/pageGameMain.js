var osdLayer;
var pageGameLife;
var vJoystick;

Marble.PageGameMain	= function()
{
	this._playerLives	= 3;

	osdLayer	= new Marble.OsdLayer();
	osdLayer.livesSet( this._playerLives );

	var needCanvas	= jQuery.url().param('render') ? true : false;
	if( needCanvas || VirtualJoystick.touchScreenAvailable() ){
		this._virtualJoystick	= new VirtualJoystick({
			mouseSupport	: true
		});
		vJoystick	= this._virtualJoystick;
	}

	this._gameLifeCtor();
}

Marble.PageGameMain.prototype.destroy	= function()
{
	this._gameLifeDtor();

	this._virtualJoystick	&& this._virtualJoystick.destroy();
	this._virtualJoystick	= null;
	vJoystick		= this._virtualJoystick;

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


