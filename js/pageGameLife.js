// TODO reduce the amount of global
var gameLevel;
var camera, scene, renderer;
var vJoystick;

//////////////////////////////////////////////////////////////////////////////////
//		ctor/dtor							//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameLife	= function()
{
	this._containerSel	= '#canvasContainer';

	console.log("enter PageGameLife")

	// test if webgl is supported
	//console.assert( Detector.webgl, "WebGL isnt supported" );

	this._requestAnimId	= null;

	// initialiaze everything
	this._init();
	this._animate();
}

Marble.PageGameLife.prototype.destroy	= function()
{	
	this._requestAnimId	&& cancelRequestAnimationFrame( this._requestAnimId );
	this._requestAnimId	= null;
	
	this._winResize 	&& this._winResize.stop();

	this._stats 		&& this._stats.domElement.parentNode.removeChild(this._stats.domElement);

	gameLevel.destroy();
	gameLevel	= null;

	renderer	= null;

	jQuery(this._containerSel).empty();
}

// mixin MicroEvent
MicroEvent.mixin(Marble.PageGameLife);

//////////////////////////////////////////////////////////////////////////////////
//		misc								//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameLife.prototype.triggerEndOfLevel	= function(result, reason)
{
	console.assert( result === 'win' || result === 'dead' );
	if( result === 'dead' ){
		this.trigger('completed', reason);
	}
}

//////////////////////////////////////////////////////////////////////////////////
//		misc								//
//////////////////////////////////////////////////////////////////////////////////

Marble.PageGameLife.prototype._init	= function(){
	// create the container element
	var container = jQuery(this._containerSel).get(0);

	// init the WebGL renderer and append it to the Dom
	var supportWebGL= Detector.webgl ? true : false;
	var useWebGL	= supportWebGL;
	useWebGL	= jQuery.url().param('render') ? false : useWebGL;
	if( useWebGL ){
		renderer = new THREE.WebGLRenderer({
			antialias		: true,
			preserveDrawingBuffer	: true 
		});		
	}else{
		renderer	= new THREE.CanvasRenderer();
	}
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
	//var mesh	= new THREE.Mesh( new THREE.SphereGeometry(75,16,8), new THREE.MeshNormalMaterial() );
	//scene.add(mesh);
	
	// for debug - display xyz axes on the screen
	scene.add(new THREE.Axes());

// TODO fix this init
// - add a destructor
(function(){
	//if( 'createTouch' in document === false )	return;
	var container	= document.createElement('div');
	container.style.width		= '100%';
	container.style.height		= '100%';
	container.style.position	= 'absolute';
	container.style.top		= '0px';
	container.style.left		= '0px';
	
	document.body.appendChild(container);

	var subContainer= document.createElement('div');
	subContainer.style.position	= 'relative';
	subContainer.style.width	= '100%';
	subContainer.style.height	= '100%';
	container.appendChild(subContainer);
	
	var joystick	= vJoystick	= new VirtualJoystick({
		container	: subContainer,
		debug		: true
	});
}());


	gameLevel	= new Marble.GameLevel();

	this._winResize	= THREEx.WindowResize(renderer, gameLevel.camera().object());
}

// ## Animate and Display the Scene
Marble.PageGameLife.prototype._animate	= function(){
	// render the 3D scene
	this._render();
	// relaunch the 'timer' 
	this._requestAnimId	= requestAnimationFrame( this._animate.bind(this) );
	// update the stats
	this._stats.update();
}

// ## Render the 3D Scene
Marble.PageGameLife.prototype._render = function()
{
	// gameLevel .tick()
	gameLevel.tick();
	
	// FIXME this should be INSIDE webgl renderer... bug
	renderer instanceof THREE.WebGLRenderer	&& renderer.context.depthMask( true );

	// actually display the scene in the Dom element
	renderer.render( scene, gameLevel.camera().object() );
}
