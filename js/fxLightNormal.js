Marble.FxLightNormal	= function()
{
	var ambient	= new THREE.AmbientLight( 0xAAAAAA, 2 );
	scene.addLight( ambient );

	var directionalLight = new THREE.DirectionalLight( 0xcccccc, 1 );
	directionalLight.position.set( -10, 10, 5 ).normalize();
	scene.addLight( directionalLight );

	var directionalLight = new THREE.DirectionalLight( 0x004400, 0.3 );
	directionalLight.position.set( 5, 5, -2 ).normalize();
	scene.addLight( directionalLight );
	
}
Marble.FxLightNormal.prototype.destroy	= function()
{
	
}