/**
*/
Marble.World	= function()
{
	this._player		= new Marble.Player();
	this._map		= new Marble.Map();
	this._camera		= new Marble.Camera();
	this._skybox		= new Marble.Skymap();
	this._fxLightNormal	= new Marble.FxLightNormal();

	// create all the balls
	this._balls	= [];
	for(var i = 0; i < 8; i++){
		this._balls.push(new Marble.Ball({
			ballDesc	: String(i+1)
		}));
	}

	// create all the enemies
	this._enemies	= [];
	for(var i = 0; i < 0; i++){
		this._enemies.push( new Marble.Enemy() );
	}
}

Marble.World.prototype.destroy	= function()
{
	this._player	&& this._player.destroy();
	this._balls	.forEach(function(item){ item.destroy(); });
	this._enemies	.forEach(function(item){ item.destroy(); });

	this._skybox.destroy();

	this._fxLightNormal	&& this._fxLightNormal.destroy();
	this._fxLightNormal	= null;
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

Marble.World.prototype.tick	= function()
{
	this._player.tick();
	this._balls  .forEach(	function(item){ item.tick(); });
	this._enemies.forEach(	function(item){	item.tick(); });
	
	osdLayer.update();

	this._map.tick();
	this._camera.tick();
}