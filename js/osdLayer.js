Marble.OsdLayer	= function()
{
	this._pageSel	= '#osdContainer';

	// show the page
	jQuery(this._pageSel).show();

	this._score	= 0;
	this._scoreDirty= true;
	
	this._lives	= 0;
	this._livesDirty= true;
	
	this._timeout		= '';
	this._timeoutDirty	= true;

	// bind .helpButton
	this._$helpButtonOnClick	= this._helpButtonOnClick.bind(this);
	jQuery("#osdContainer .helpButton").bind('click', this._$helpButtonOnClick);	

	// bind .screenshotButton
	this._$screenshotButtonOnClick	= this._screenshotButtonOnClick.bind(this);
	jQuery("#osdContainer .screenshotButton").bind('click', this._$screenshotButtonOnClick);	

	// bind .fullscreenButton
	if( THREEx.FullScreen.available() ){
		this._$fullscreenButtonOnClick	= this._fullscreenButtonOnClick.bind(this);
		jQuery("#osdContainer .fullscreenButton").bind('click', this._$fullscreenButtonOnClick);
	}else{
		jQuery("#osdContainer .fullscreenButton").hide();		
	}
}

Marble.OsdLayer.prototype.destroy	= function()
{
	// hide the page
	jQuery(this._pageSel).hide();
	// unbind .helpButton
	jQuery("#osdContainer .helpButton").unbind('click', this._$helpButtonOnClick);	
	// unbind .screenshotButton
	jQuery("#osdContainer .screenshotButton").unbind('click', this._$screenshotButtonOnClick);	
	// unbind .fullscreenButton
	if( THREEx.FullScreen.available() ){
		jQuery("#osdContainer .fullscreenButton").unbind('click', this._$fullscreenButtonOnClick);
	}
}

//////////////////////////////////////////////////////////////////////////////////
//			button							//
//////////////////////////////////////////////////////////////////////////////////

Marble.OsdLayer.prototype._helpButtonOnClick	= function()
{
	var dialogSel	= '#osdContainer .helpDialog';
	jQuery(dialogSel).jqm();
	jQuery(dialogSel).jqmShow();
}


Marble.OsdLayer.prototype._screenshotButtonOnClick	= function()
{
	// From http://29a.ch/2011/9/11/uploading-from-html5-canvas-to-imgur-data-uri
	// able to upload your screenshot without running servers

	var canvas	= renderer.domElement;
	try {
		var url = canvas.toDataURL('image/jpeg', 0.7);
	} catch(e) {
		var url = canvas.toDataURL();
	}

	var winHtml	= jQuery('#osdContainer .screenshotWindow').html();
	var win		= window.open();
	win.document.write(winHtml);
	jQuery('img', win.document).attr('src', url);

	// upload to imgur using jquery/CORS
	// https://developer.mozilla.org/En/HTTP_access_control
	jQuery.ajax({
		url	: 'http://api.imgur.com/2/upload.json',
		type	: 'POST',
		data	: {
			type	: 'base64',
			// get your key here, quick and fast http://imgur.com/register/api_anon
			key	: 'a25f210e5e6f682fb052d63b19987a56',
			name	: 'marblesoccer-screenshot.jpg',
			title	: 'Fun time with Marble Soccer http://marblesoccer.com',
			caption	: 'Screenshot of a good game',
			image	: url.split(',')[1]
		},
		dataType	: 'json'
	}).success(function(data) {
		console.log("result data", data)
		win.location.href = data['upload']['links']['imgur_page'];
	}).error(function() {
		alert('Could not reach api.imgur.com. Sorry :(');
		win.close();
	});
}

Marble.OsdLayer.prototype._fullscreenButtonOnClick	= function()
{
	if( THREEx.FullScreen.activated() ){
		THREEx.FullScreen.cancel();
	}else{
		THREEx.FullScreen.request();
	}
}

//////////////////////////////////////////////////////////////////////////////////
//		Update								//
//////////////////////////////////////////////////////////////////////////////////


Marble.OsdLayer.prototype.scoreChange	= function(delta)
{
	this._score	+= delta;
	this._scoreDirty= true;
}

Marble.OsdLayer.prototype.livesSet	= function(newValue)
{
	if( newValue === this._lives )	return;
	this._lives	= newValue;
	this._livesDirty= true;
}

Marble.OsdLayer.prototype.timeoutSet	= function(newValue)
{
	if( newValue === this._timeout )	return;
	this._timeout		= newValue;
	this._timeoutDirty	= true;
}

Marble.OsdLayer.prototype.update	= function()
{
	if( this._scoreDirty ){
		jQuery("#osdContainer .score .value").html(this._score);
		this._scoreDirty	= false;
	}
	if( this._livesDirty ){
		jQuery("#osdContainer .lives .value").html(this._lives);
		this._livesDirty	= false;
	}
	if( this._timeoutDirty ){
		jQuery("#osdContainer .timeout .value").html(this._timeout);
		this._timeoutDirty	= false;
	}
}