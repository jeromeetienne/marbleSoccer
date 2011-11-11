Marble.OsdLayer	= function()
{
	this._score	= 0;
	this._scoreDirty= true;
	
	// bind .helpButton
	this._$helpButtonOnClick	= this._helpButtonOnClick.bind(this);
	jQuery("#osdContainer .helpButton").bind('click', this._$helpButtonOnClick);	
}

Marble.OsdLayer.prototype.destroy	= function()
{
	jQuery("#osdContainer .helpButton").unbind('click', this._$helpButtonOnClick);	
}

Marble.OsdLayer.prototype._helpButtonOnClick	= function()
{
	var dialogSel	= '#osdContainer .helpDialog';
	jQuery(dialogSel).jqm();
	jQuery(dialogSel).jqmShow();
}

Marble.OsdLayer.prototype.scoreChange	= function(delta)
{
	this._score	+= delta;
	this._scoreDirty= true;
}

Marble.OsdLayer.prototype.update	= function()
{
	if( this._scoreDirty ){
		jQuery("#osdContainer .score .value").html(this._score);
		this._scoreDirty	= false;
	}
}