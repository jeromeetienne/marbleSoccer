Marble.PageLandingMain	= function()
{
	this._pageSel		= "#pageLandingContainer";
	
	this._pageGameMain	= null;

	jQuery(this._pageSel).show();
	
	this._menuShow();
	this._chromeWebStoreCtor();
	
	this._$playButtonClick		= this._playClick.bind(this);
	this._$tutorialButtonClick	= this._tutorialShow.bind(this);
	this._$aboutButtonClick		= this._aboutShow.bind(this);
	jQuery(this._pageSel+" .menuDialog .button.play").bind('click'		, this._$playButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.tutorial").bind('click'	, this._$tutorialButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.about").bind('click'		, this._$aboutButtonClick);

// go directly to pageGameMain
this._pageGameMainCtor();

}

Marble.PageLandingMain.prototype.destroy	= function()
{
	this._pageGameMainDtor();

	jQuery(this._pageSel).hide();
	jQuery(this._pageSel+" .menuDialog .button.play").unbind('click'	, this._$playButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.tutorial").unbind('click'	, this._$tutorialButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.about").unbind('click'	, this._$aboutButtonClick);
}

Marble.PageLandingMain.prototype._menuShow	= function()
{
	var dialogSel	= this._pageSel+' .menuDialog';
	jQuery(dialogSel).jqm({
		overlay	: 0
	});
	jQuery(dialogSel).jqmShow();
}

//////////////////////////////////////////////////////////////////////////////////
//		callbacks for button						//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._playClick	= function()
{
	this._pageGameMainCtor();
}


Marble.PageLandingMain.prototype._tutorialShow	= function()
{
	var dialogSel	= this._pageSel+' .tutorialDialog';
	jQuery(dialogSel).jqm();
	jQuery(dialogSel).jqmShow();
}

Marble.PageLandingMain.prototype._aboutShow	= function()
{
	var dialogSel	= this._pageSel+' .aboutDialog';
	jQuery(dialogSel).jqm();
	jQuery(dialogSel).jqmShow();
}

//////////////////////////////////////////////////////////////////////////////////
//		chromeWebStore							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._chromeWebStoreCtor	= function()
{
	var domSelector	= this._pageSel + ' .chromeWebStoreInstall';

	var isAvailable	= THREEx.ChromeWebStoreInstall.apiAvailable()
	if( isAvailable === false )	return;

	var isInstalled	= THREEx.ChromeWebStoreInstall.isInstalled();
	if( isInstalled ){
		jQuery(domSelector+" .value").text('Installed');
		jQuery(domSelector).addClass("installed");
	}else{
		jQuery(domSelector+" .value").text('Available');
		jQuery(domSelector).addClass("toInstall");
		jQuery(domSelector).bind('click', function(event){
			event.preventDefault();
			THREEx.ChromeWebStoreInstall.install();
		}.bind(this));
	}
	jQuery(domSelector).show();
}

Marble.PageLandingMain.prototype._chromeWebStoreDtor	= function()
{
	var domSelector	= this._pageSel + ' .chromeWebStoreInstall';
	jQuery(domSelector).hide();
}
//////////////////////////////////////////////////////////////////////////////////
//		pageGameMain							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._pageGameMainCtor	= function()
{
	console.assert( !this._pageGameMain );
	
	this._pageGameMain	= new Marble.PageGameMain();
	
	this._$pageGameMainOnCompleted	= this._pageGameMainOnCompleted.bind(this);
	this._pageGameMain.bind('completed', this._$pageGameMainOnCompleted);

	jQuery(this._pageSel).hide();
}

Marble.PageLandingMain.prototype._pageGameMainDtor	= function()
{
	if( !this._pageGameMain )	return;
	
	this._pageGameMain.unbind('completed', this._$pageGameMainOnCompleted);
	this._pageGameMain.destroy();
	this._pageGameMain	= null;
}

Marble.PageLandingMain.prototype._pageGameMainOnCompleted	= function()
{
	this._pageGameMainDtor();
	jQuery(this._pageSel).show();
}
