// This THREEx helper makes it easy to handle navigator.mozApps API.
// * https://developer.mozilla.org/en/Apps/Apps_JavaScript_API
// 
// # Code

//


/** @namespace */
var THREEx			= THREEx 			|| {};
THREEx.MozillaWebStoreInstall	= THREEx.MozillaWebStoreInstall	|| {};

/**
 * test if the API is available
 * @returns {Boolean} true if the API is available, false otherwise
*/
THREEx.MozillaWebStoreInstall.apiAvailable	= function()
{
	return navigator.mozApps ? true : false;
}

/**
 * Test if the application is already installed
 * 
 * @returns {Boolean} true if the application is installed, false otherwise
*/
THREEx.MozillaWebStoreInstall.isInstalled	= function(callback)
{
	console.assert( this.apiAvailable() );
	navigator.mozApps.amInstalled(callback);
}

/**
 * Trigger an installation
 * @param {String} url of the application (optional)
 * @param {Function} callback called if installation succeed
 * @param {Function} callback called if installation failed
*/
THREEx.MozillaWebStoreInstall.install	= function(url, successCallback, failureCallback)
{
	navigator.mozApps.install(url, successCallback, failureCallback);
}