Marble.PageLandingMain	= function()
{
	this._pageSel		= "#pageLandingContainer";	
	jQuery(this._pageSel).show();
	
	this._menuShow();
	
	jQuery(this._pageSel+" .menuDialog .button.tutorial").click(function(){
		this._tutorialShow();
	}.bind(this))
	jQuery(this._pageSel+" .menuDialog .button.about").click(function(){
		this._aboutShow();
	}.bind(this))
}

Marble.PageLandingMain.prototype.destroy	= function()
{
	jQuery(this._pageSel).hide();
}

Marble.PageLandingMain.prototype._menuShow	= function()
{
	var dialogSel	= this._pageSel+' .menuDialog';
	jQuery(dialogSel).jqm({
		overlay	: 0
	});
	jQuery(dialogSel).jqmShow();
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
