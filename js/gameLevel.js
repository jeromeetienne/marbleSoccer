/**
*/
Marble.GameLevel	= function()
{
	this._player		= new Marble.Player();
	this._map		= new Marble.Map();
	this._camera		= new Marble.Camera();
	//this._skybox		= new Marble.Skymap();

	this._visualFxs		= [];

	this.visualFxAdd(new Marble.VisualFxLightNormal());
	
	//var visualFx	= new Marble.VisualFxLightNormal();
	//this._visualFxs.push(visualFx);
	//setTimeout(function(){
	//	console.log('change visualfx');
	//	visualFx.destroy();
	//
	//	var visualFx2	= new Marble.VisualFxLightRed();
	//	this._visualFxs.push(visualFx2);
	//}.bind(this), 5*1000)

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

Marble.GameLevel.prototype.destroy	= function()
{
	this._player	&& this._player.destroy();
	this._player	= null;

	this._balls	.forEach(function(item){ item.destroy(); });
	this._balls	= [];

	this._enemies	.forEach(function(item){ item.destroy(); });
	this._enemies	= [];

	this._skybox	&& this._skybox.destroy();
	this._skybox	= null;

	this._visualFxs	.forEach(function(item){ item.destroy(); });
	this._visualFxs	= [];
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.GameLevel.prototype.visualFxAdd	= function(visualFx)
{
	console.assert( this._visualFxs.indexOf(visualFx) === -1, "visualFx MUST NOT be present" );
	this._visualFxs.push(visualFx);

	visualFx.bind('autodestroy', function(){
		console.log("autodetroy")
		visualFx.destroy();
		this.visualFxRemove(visualFx);
	}.bind(this));
}

Marble.GameLevel.prototype.visualFxRemove	= function(visualFx)
{
	console.assert( this._visualFxs.indexOf(visualFx) !== -1, "visualFx MUST be present" );
	this._visualFxs.splice( this._visualFxs.indexOf(visualFx), 1 );
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

/**
 * callback when a contact event occors between a voxel and a marble
*/
Marble.GameLevel.prototype.onContactMarbleVoxel	= function(marbleId, voxelType)
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


Marble.GameLevel.prototype.player	= function(){	return this._player;	}
Marble.GameLevel.prototype.map		= function(){	return this._map;	}
Marble.GameLevel.prototype.camera	= function(){	return this._camera;	}

Marble.GameLevel.prototype.tick	= function()
{
	this._player.tick();
	this._balls  .forEach(	function(item){ item.tick(); });
	this._enemies.forEach(	function(item){	item.tick(); });
	
	osdLayer.update();

	this._map.tick();
	this._camera.tick();
}