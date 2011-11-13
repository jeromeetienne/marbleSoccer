// This THREEx helper makes it easy to handle chrome.webstore.install API.
// * api description http://code.google.com/chrome/webstore/docs/inline_installation.html 
// * paul kinlan post on g+ https://plus.google.com/116059998563577101552/posts/c9zYiA9RdC5
//
// # Code

//


/** @namespace */
var THREEx			= THREEx 			|| {};
THREEx.ChromeWebStoreInstall	= THREEx.ChromeWebStoreInstall	|| {};

THREEx.ChromeWebStoreInstall.apiAvailable	= function()
{
	var available	= chrome && chrome.webstore && chrome.webstore.install;
	return available ? true : false;
}

THREEx.ChromeWebStoreInstall.isInstalled	= function()
{
	if( !this.apiAvailable() )	return false;
	return chrome.app.isInstalled ? true : false;
}

THREEx.ChromeWebStoreInstall.install	= function(url, successCallback, failureCallback)
{
	console.assert( this.apiAvailable() )
	chrome.webstore.install(url, successCallback, failureCallback);
}