// This source is the javascript needed to build a simple moving
// cube in **three.js** based on this
// [example](https://raw.github.com/mrdoob/three.js/master/examples/canvas_geometry_cube.html)
// It is the source about this [blog post](/blog/2011/08/06/lets-do-a-cube/).

// ## Now lets start

// declare a bunch of variable we will need later
var startTime	= Date.now();
var camera, scene, world, renderer, stats;
var container;

// ## bootstrap functions
// initialiaze everything
init();
// make it move			
animate();

// ## Initialize everything
function init() {
	// test if webgl is supported
	if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

	// create the camera
	camera = new THREE.Camera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
	camera.position.z = 100;

	// create the Scene
	scene = new THREE.Scene();

	scene.addLight( new THREE.AmbientLight(0xFFFFFF) );

	var light	= new THREE.DirectionalLight( 0xffffff, 1 );
	light.position.y = 3;
	scene.addLight( light );
	
(function(){
	var speed	= new MarblePhysics.Vector3();
	speed.set(1, 0.3, 0);
	var normal	= new MarblePhysics.Vector3();
	normal.set(-1, 0, 0);
	
	console.log("speed", JSON.stringify(speed))
	console.log("normal", JSON.stringify(normal))
	
	var scalarProj	= speed.scalarProjectionOn(normal);
	var centerPoint	= normal.clone().normalize().multiplyScalar(scalarProj);

	
	var symPoint	= speed.clone().negate().addSelf( centerPoint ).addSelf( centerPoint );
	
	console.log("speed.scalarProjectionTo(normal)", scalarProj);
	console.log("centerPoint", JSON.stringify(centerPoint));
	console.log("symPoint", JSON.stringify(symPoint));

	var angleNormal	= Math.PI - speed.angleWith(normal);
	console.log("speed.angleWith(normal)", angleNormal * 180 / Math.PI);
}());

	world	= new MarblePhysics.World();
	
	for( var i = 0; i < 2; i++ ){
		var radius	= 10;
		
		var materials	= [
			new THREE.MeshLambertMaterial( { color: i == 0 ? 0xFF6666 : 0x6666FF } ),
			new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true, wireframeLinewidth: 2 } )
		];
		var materials	= new THREE.MeshNormalMaterial();
		var mesh	= new THREE.Mesh( new THREE.SphereGeometry( radius, 30, 30 ), materials );
		scene.addObject( mesh );
		
		var body	= new MarblePhysics.Sphere( radius );
		body.position	.set( -30, i == 0 ? -30 : 30, 0 );
		body.speed	.set( -1, i == 0 ? +1 : -1, 0 );
		body.damping	= 1;

		world.addBody(body);
		
		mesh._physicsBody	= body; 
	}

	// create the container element
	container = document.createElement( 'div' );
	document.body.appendChild( container );

	// init the WebGL renderer and append it to the Dom
	renderer = new THREE.WebGLRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	container.appendChild( renderer.domElement );
	
	// init the Stats and append it to the Dom - performance vuemeter
	stats = new Stats();
	stats.domElement.style.position = 'absolute';
	stats.domElement.style.top = '0px';
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

	world.update();

	scene.children.forEach(function(mesh){
		if( mesh._physicsBody === undefined )	return;

		var body	= mesh._physicsBody;
		mesh.position.x	= body.position.x;
		mesh.position.y	= body.position.y;
		mesh.position.z	= body.position.z;
	})
	

	// actually display the scene in the Dom element
	renderer.render( scene, camera );
}
