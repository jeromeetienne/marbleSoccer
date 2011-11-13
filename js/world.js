/**
*/
Marble.World	= function(opts)
{
	this._scene	= opts.scene	|| console.assert(false);
	console.assert(this._scene instanceof THREE.Scene);

	// create the player
	this._player	= new Marble.Player();
	this._scene.addObject( this._player.mesh() );

	this._map	= new Marble.Map();
	this._scene.addObject( this._map.mesh() );

	this._camera	= new Marble.Camera();
	
	if( true ){
		var skybox	= new Marble.Skymap();
		scene.addObject( skybox.mesh() );
	}

// TODO sound should be at pageGameMain level
	this._sounds	= {};
	this._sounds['goal']	= new Marble.Sound({
		urls	: ['sounds/pacman/eatghost.mp3']
	});
	this._sounds['die']	= new Marble.Sound({
		urls	: ['sounds/pacman/die.mp3']
	});


	// create all the balls
	this._balls	= [];
	for(var i = 0; i < 8; i++){
		var ball	= new Marble.Ball({
			ballDesc	: String(i+1)
		});
		this._balls.push( ball );
		scene.addObject( ball.mesh() );		
	}

	// create all the enemies
	this._enemies	= [];
	for(var i = 0; i < 0; i++){
		var enemy	= new Marble.Enemy();
		this._enemies.push( enemy );
		scene.addObject( enemy.mesh() );		
	}
}

Marble.World.prototype.destroy	= function()
{
	this._player	&& this._player.destroy();
	this._balls	.forEach(function(item){ item.destroy(); });
	this._enemies	.forEach(function(item){ item.destroy(); });
	Object.keys(this._sounds).forEach(function(key){
		this._sounds[key].destroy();
	}.bind(this));
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////


/**
 * callback when a contact event occors between a voxel and a marble
*/
Marble.World.prototype.onContactMarbleVoxel	= function(marbleId, voxelType)
{
	// handle player
	if( this._player.marbleId() === marbleId )	return this._player.onContactVoxel(voxelType);
	// handle this._balls
	for( var i = 0; i < this._balls.length; i++ ){
		var ball	= this._balls[i];
		if( ball.marbleId() === marbleId )	return ball.onContactVoxel(voxelType);
	}
	// handle this._enemies
	for( var i = 0; i < this._enemies.length; i++ ){
		var enemy	= this._enemies[i];
		if( enemy.marbleId() === marbleId )	return enemy.onContactVoxel(voxelType);
	}
	// if nothing is found, return now
	return null;
}


Marble.World.prototype.player	= function(){	return this._player;	}
Marble.World.prototype.map	= function(){	return this._map;	}
Marble.World.prototype.camera	= function(){	return this._camera;	}
Marble.World.prototype.sounds	= function(){	return this._sounds;	}

Marble.World.prototype.tick	= function()
{
	this._player.tick();
	this._balls.forEach(function(ball){
		ball.tick();
	});
	this._enemies.forEach(function(enemy){
		enemy.tick();
	});
	
	osdLayer.update();

	this._map.tick();
	this._camera.tick();
}