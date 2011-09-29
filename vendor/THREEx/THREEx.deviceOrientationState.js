/** @namespace */
var THREEx	= THREEx || {};

THREEx.DeviceOrientationState	= function()
{
	// to store the current state
	this._state	= {};

	this._$callback	= function(event){ this._onDeviceOrientation(event); }.bind(this);
	
	// bind events
	// - spec http://dev.w3.org/geo/api/spec-source-orientation.html
	window.addEventListener('deviceorientation', this._$callback);
}

/**
 * To stop listening of the keyboard events
*/
THREEx.DeviceOrientationState.prototype.destroy	= function()
{
	// unbind events
	window.removeEventListener('deviceorientation', this._$callback);
}

/**
 * to process the keyboard dom event
*/
THREEx.DeviceOrientationState.prototype._onDeviceOrientation	= function(event)
{
	this._state.alpha	= event.alpha;
	this._state.beta	= event.beta;
	this._state.gamma	= event.gamma;
}

THREEx.DeviceOrientationState.prototype.angleY	= function()
{
	if( !this._state.alpha )	return 0;
	return this._state.alpha * Math.PI / 180;
}

THREEx.DeviceOrientationState.prototype.angleX	= function()
{
	if( !this._state.beta )		return 0;
	return this._state.beta * Math.PI / 180;
}

THREEx.DeviceOrientationState.prototype.angleZ	= function()
{
	if( !this._state.gamma )	return 0;
	return this._state.gamma * Math.PI / 180;
}

