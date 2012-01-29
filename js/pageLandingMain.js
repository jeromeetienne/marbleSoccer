var pageGameMain;
var soundPool;
var keyboard, devOrientation;

Marble.PageLandingMain	= function()
{
	this._pageSel		= "#pageLandingContainer";

	// create Marble.SoundPool
	this._soundsCtor();
	this._preloadCtor();


	keyboard	= new THREEx.KeyboardState();
	devOrientation	= new THREEx.DeviceOrientationState();
	
	this._pageGameMain	= null;

	jQuery(this._pageSel).show();
	
	if( !Detector.webgl && !jQuery.url().param('render') ){
		this._nowebglShow();		
	}else{
		this._menuShow();		
	}
	this._chromeWebStoreCtor();

	jQuery(this._pageSel+" .menuDialog .button.play").addClass('disable');
	
	this._$playButtonClick		= this._playClick.bind(this);
	this._$tutorialButtonClick	= this._tutorialShow.bind(this);
	this._$aboutButtonClick		= this._aboutShow.bind(this);
	jQuery(this._pageSel+" .menuDialog .button.play").bind('click'		, this._$playButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.tutorial").bind('click'	, this._$tutorialButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.about").bind('click'		, this._$aboutButtonClick);

	// go directly to pageGameMain
	if( jQuery.url().param('bypasslanding') !== undefined )	this._pageGameMainCtor();
}

Marble.PageLandingMain.prototype.destroy	= function()
{
	this._pageGameMainDtor();

	this._prealoadDtor();
	this._soundsDtor();

	keyboard.destroy();
	keyboard	= null;

	devOrientation.destroy();
	devOrientation	= null;

	this._soundPool && this._soundPool.destroy();
	this._soundPool	= null;
	// export in global
	soundPool	= this._soundPool;

	jQuery(this._pageSel).hide();
	jQuery(this._pageSel+" .menuDialog .button.play").unbind('click'	, this._$playButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.tutorial").unbind('click'	, this._$tutorialButtonClick);
	jQuery(this._pageSel+" .menuDialog .button.about").unbind('click'	, this._$aboutButtonClick);
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._menuShow	= function()
{
	var dialogSel	= this._pageSel+' .menuDialog';
	jQuery(dialogSel).jqm( {overlay : 0} );
	jQuery(dialogSel).jqmShow();
}

Marble.PageLandingMain.prototype._nowebglShow	= function()
{
	var dialogSel	= this._pageSel+' .nowebglDialog';

	var youtubeUrl	= 'http://www.youtube.com/embed/kW4oHaHCilo';
	var youtubeHtml	= '<iframe width="560" height="315" src="'+youtubeUrl+'" frameborder="0" allowfullscreen></iframe>';
	jQuery(dialogSel+ ' .youtube').html(youtubeHtml);
	
	jQuery(dialogSel).jqm( {overlay : 0} );
	jQuery(dialogSel).jqmShow();
}

//////////////////////////////////////////////////////////////////////////////////
//		callbacks for button						//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._playClick	= function()
{
	var disable	= jQuery(this._pageSel+" .menuDialog .button.play").hasClass('disable');
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
//		sounds								//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._preloadCtor	= function()
{
	this._preloader	= new THREEx.Preloader();
// TODO well there is a preloader... but what happened to it ?
	this._preloader.bind('complete', function(){
		jQuery(this._pageSel+" .menuDialog .button.play").removeClass('disable');
	}.bind(this));
	this._preloader.start();
}

Marble.PageLandingMain.prototype._preloadDtor	= function()
{	
	this._preloader && this._preloader.destroy();
}

//////////////////////////////////////////////////////////////////////////////////
//		sounds								//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageLandingMain.prototype._soundsCtor	= function()
{
	console.assert( !this._soundPool );

	var disabled	= jQuery.url().param('nosound') !== undefined ? true : false;

	this._soundPool	= new Marble.SoundPool();
	this._soundPool.insert('goal', new Marble.Sound({
		//urls	: ['sounds/pacman/eatghost.mp3'],
		urls	: ['sounds/flashkit.com/Poolshot-GamePro9-8159_hifi.mp3'],
		disabled: disabled
	}));
	this._soundPool.insert('die', new Marble.Sound({
		urls	: ['sounds/pacman/die.mp3'],
		disabled: disabled
	}));
	this._soundPool.insert('marbleContact', new Marble.Sound({
		//urls	: ['sounds/pacman/eating.short.mp3'],
		urls	: ['sounds/flashkit.com/Poolshot-GamePro9-8159_hifi.mp3'],
		disabled: disabled
	}));

	// export in global
	soundPool	= this._soundPool;
}

Marble.PageLandingMain.prototype._soundsDtor	= function()
{
	this._soundPool.destroy();
	this._soundPool	= null;
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

	// export as a global
	pageGameMain	= this._pageGameMain;
}

Marble.PageLandingMain.prototype._pageGameMainDtor	= function()
{
	if( !this._pageGameMain )	return;
	
	this._pageGameMain.unbind('completed', this._$pageGameMainOnCompleted);
	this._pageGameMain.destroy();
	this._pageGameMain	= null;

	// export as a global
	pageGameMain	= this._pageGameMain;
}

Marble.PageLandingMain.prototype._pageGameMainOnCompleted	= function()
{
	this._pageGameMainDtor();
	jQuery(this._pageSel).show();
}
