/**
 * Handle the skymap
 *
 * TODO port that to threex
 * * this is simple and easy to explain
 * * add an update in the proper blog post
*/
Marble.Skymap	= function()
{
	//var urls	= THREEx.SkyMap.UrlsPx("images/pisa/", ".png");
	var urls	= THREEx.SkyMap.UrlsPx("images/cube/SwedishRoyalCastle/", ".jpg");
	//var urls	= THREEx.SkyMap.UrlsPx("images/cube/redsky/", ".jpg");
	this._mesh	= THREEx.SkyMap.buildMesh(urls);
}

/**
*/
Marble.Skymap.prototype.mesh	= function()
{
	return this._mesh;
}