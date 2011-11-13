// TODO reduce the amount of global
var keyboard, devOrientation;
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

	//setTimeout(function(){
	//	console.log("kill by timeout")
	//	this.trigger('completed', 'timeout')
	//}.bind(this), 5*1000)
}

Marble.PageGameRound.prototype.destroy	= function()
{
	if( this._winResize )	this._winResize.stop();

	if( this._stats )	this._stats.domElement.parentNode.removeChild(this._stats.domElement);

	world.destroy();
	world	= null;

	renderer	= null;

	keyboard.destroy();
	keyboard	= null;

	devOrientation.destroy();
	devOrientation	= null;

	if( this._requestAnimId	)	cancelRequestAnimationFrame( this._requestAnimId );

	jQuery(this._containerSel).empty();
}

// mixin MicroEvent
MicroEvent.mixin(Marble.PageGameRound);


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
	
	keyboard	= new THREEx.KeyboardState();
	devOrientation	= new THREEx.DeviceOrientationState();

	// create the renderer cache
	renderer._microCache	= new MicroCache();

	// init the Stats and append it to the Dom - performance vuemeter
	this._stats	= new Stats();
	this._stats.domElement.style.position = 'absolute';
	this._stats.domElement.style.bottom	= '0px';
	container.appendChild( this._stats.domElement );

	// create the Scene
	scene = new THREE.Scene();

	var ambient	= new THREE.AmbientLight( 0xFFFFFF );
	scene.addLight( ambient );

	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 1, 0, 1 ).normalize();
	scene.addLight( directionalLight );
	
	var mesh	= new THREE.Mesh( new THREE.SphereGeometry(75,16,8), new THREE.MeshNormalMaterial() );
	scene.addObject(mesh);	
	
	// init THREEx.Microphysics
	microphysics	= new THREEx.Microphysics().start();

	world		= new Marble.World({
		scene	: scene
	});

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
