// TODO reduce the amount of global
var world;
var microphysics;
var camera, scene, renderer;

//////////////////////////////////////////////////////////////////////////////////
//		ctor/dtor							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameRound	= function()
{
	this._containerSel	= '#canvasContainer';

	console.log("enter PageGameRound")

	// test if webgl is supported
	console.assert( Detector.webgl, "WebGL isnt supported" );

	this._requestAnimId	= null;

	// initialiaze everything
	this._init();
	this._animate();
}

Marble.PageGameRound.prototype.destroy	= function()
{	
	this._requestAnimId	&& cancelRequestAnimationFrame( this._requestAnimId );
	this._requestAnimId	= null;
	
	this._winResize 	&& this._winResize.stop();

	this._stats 		&& this._stats.domElement.parentNode.removeChild(this._stats.domElement);

	world.destroy();
	world	= null;

	renderer	= null;

	jQuery(this._containerSel).empty();
}

// mixin MicroEvent
MicroEvent.mixin(Marble.PageGameRound);


//////////////////////////////////////////////////////////////////////////////////
//		misc								//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameRound.prototype.triggerGameOver	= function(reason)
{
	this.trigger('completed', reason);
}

//////////////////////////////////////////////////////////////////////////////////
//		misc								//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameRound.prototype._init	= function(){
	// create the container element
	var container = jQuery(this._containerSel).get(0);

	// init the WebGL renderer and append it to the Dom
	renderer = new THREE.WebGLRenderer({
		antialias		: true,
		preserveDrawingBuffer	: true 
	});

	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	
	// create the renderer cache
	renderer._microCache	= new MicroCache();

	// init the Stats and append it to the Dom - performance vuemeter
	this._stats	= new Stats();
	this._stats.domElement.style.position = 'absolute';
	this._stats.domElement.style.bottom	= '0px';
	container.appendChild( this._stats.domElement );

	// create the Scene
	scene = new THREE.Scene();

	// for debug
	var mesh	= new THREE.Mesh( new THREE.SphereGeometry(75,16,8), new THREE.MeshNormalMaterial() );
	scene.addObject(mesh);	
		
	// init THREEx.Microphysics
	// - move that world ?
	microphysics	= new THREEx.Microphysics().start();

	world		= new Marble.GameLevel();

	this._winResize	= THREEx.WindowResize(renderer, world.camera().object());
}

// ## Animate and Display the Scene
Marble.PageGameRound.prototype._animate	= function(){
	// render the 3D scene
	this._render();
	// relaunch the 'timer' 
	this._requestAnimId	= requestAnimationFrame( this._animate.bind(this) );
	// update the stats
	this._stats.update();
}

// ## Render the 3D Scene
Marble.PageGameRound.prototype._render = function(){
	// update THREEx.Microphysics
	microphysics.update(scene);

	// world .tick()
	world.tick();
	
	// actually display the scene in the Dom element
	renderer.render( scene, world.camera().object() );
}
