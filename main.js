// This source is the javascript needed to build a sky box in **three.js**
// It is the source about this [blog post](/blog/2011/08/15/lets-do-a-sky/).

// ## Now lets start

// declare a bunch of variable we will need later
var startTime	= Date.now();
var container;
var keyboard, player, map;
var camera, scene, renderer, stats;
var skyboxMesh;

// ## bootstrap functions
if ( ! Detector.webgl ){
	// test if webgl is supported
	Detector.addGetWebGLMessage();
}else{
	// initialiaze everything
	init();
	// make it move			
	animate();	
}

// ## Initialize everything
function init() {
	// create the camera
	camera = new THREE.Camera( 60, window.innerWidth / window.innerHeight, 1, 100000 );
	camera.position.y	= 100;
	camera.position.z	= 500;

	// create the Scene
	scene = new THREE.Scene();
	
	// ## Begining of the Skybox Code
	

	var ambient	= new THREE.AmbientLight( 0xFFFFFF );
	scene.addLight( ambient );

	var directionalLight = new THREE.DirectionalLight( 0xffffff );
	directionalLight.position.set( 0, 0, 1 ).normalize();
	scene.addLight( directionalLight );
				
	if( false ){
		var skybox	= new Marble.Skymap();
		skyboxMesh	= skybox.mesh();
		scene.addObject( skyboxMesh );
	}


	map		= new Marble.Map();
	scene.addObject( map.mesh() );

	player		= new Marble.Player();
	scene.addObject( player.mesh() );

	// ## End of the Skybox Code

	// create the container element
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// init the WebGL renderer and append it to the Dom
	renderer = new THREE.WebGLRenderer({
		antialias	: true
	});
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	
	THREEx.WindowResize(renderer, camera);
	keyboard	= new THREEx.KeyboardState();

	// init the Stats and append it to the Dom - performance vuemeter
	stats	= new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.bottom	= '0px';
	container.appendChild( stats.domElement );
}

// ## Animate and Display the Scene
function animate() {
	// render the 3D scene
	render();
	// relaunch the 'timer' 
	requestAnimationFrame( animate );
	// update the stats
	stats.update();
}


// ## Render the 3D Scene
function render() {
	// move the camera based on a timer
	if( false ){
		var timer	= - new Date().getTime() * 0.0004;
		camera.position.x = 1000 * Math.cos( timer );
		camera.position.z = 1000 * Math.sin( timer );		
	}

	player.tick(); 
	map.tick(); 

	// make the camera follow the player
	if( true ){
		camera.position.x = player.mesh().position.x;
		camera.position.y = player.mesh().position.y + 100;
		camera.position.z = player.mesh().position.z + 500;
		
		camera.target.position	= player.mesh().position;
	}

	// actually display the scene in the Dom element
	renderer.render( scene, camera );
}
