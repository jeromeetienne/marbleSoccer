/**
*/
Marble.World	= function(opts)
{
	this._scene	= opts.scene	|| console.assert(false);
	console.assert(this._scene instanceof THREE.Scene);

	this._player	= new Marble.Player();
	this._scene.addObject( this._player.mesh() );

	this._map	= new Marble.Map();
	this._scene.addObject( this._map.mesh() );

	this._camera	= new Marble.Camera();

	if( true ){
		var skybox	= new Marble.Skymap();
		skyboxMesh	= skybox.mesh();
		scene.addObject( skyboxMesh );
	}

	// one enemy
	this._enemies	= [];
	for(var i = 0; i < 0; i++){
		var enemy	= new Marble.Enemy();
		this._enemies.push( enemy );
		scene.addObject( enemy.mesh() );		
	}
}

/**
 * callback when a contact event occors between a voxel and a marble
*/
Marble.World.prototype.onContactMarbleVoxel	= function(marbleId, voxelType)
{
	// handle player
	var player	= this._player;
	if( player.marbleId() === marbleId )	return player.onContactVoxel(voxelType);
	// handle this._enemies
	for( var i = 0; i < this._enemies.length; i++ ){
		var enemy	= this._enemies[i];
		if( enemy.marbleId() === marbleId )	return enemy.onContactVoxel(voxelType);
	}
	// if nothing is found, return now
	return null;
}


Marble.World.prototype.player	= function(){
	return this._player;
}

Marble.World.prototype.map	= function(){
	return this._map;
}

Marble.World.prototype.camera	= function(){
	return this._camera;
}

Marble.World.prototype.tick	= function()
{
	this._player.tick();
	this._enemies.forEach(function(enemy){
		enemy.tick();
	});

	this._map.tick();
	this._camera.tick();
}