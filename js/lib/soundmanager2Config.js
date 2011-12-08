console.assert(soundManager, "soundmanager2 is not loaded");
soundManager.url		= 'vendor/soundmanager2/swf';
soundManager.debugMode		= false;
// FIXME no clue why but this useHTML5Audio trigger a http request for "null"
soundManager.useHTML5Audio	= true;
