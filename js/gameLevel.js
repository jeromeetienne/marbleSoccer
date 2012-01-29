var microphysics;

/**
*/
Marble.GameLevel	= function()
{
	this._visualFxs	= [];

	this.visualFxAdd(new Marble.VisualFxLightNormal());


	// init THREEx.Microphysics
	microphysics	= new THREEx.Microphysics().start();

	this._player	= new Marble.Player();
	this._map	= new Marble.Map();
	this._camera	= new Marble.Camera();
	this._skybox	= new Marble.Skymap();

	// create all the balls
	this._balls	= [];
	//for(var i = 0; i < 1; i++)	this._ballCtor('8');
	this._ballBuild9Rack();

	// create all the enemies
	this._enemies	= [];
	for(var i = 0; i < 0; i++){
		this._enemies.push( new Marble.Enemy() );
	}

	this.visualFxAdd(new Marble.VisualFxSparks());
	
	this._timeoutCtor();
}

Marble.GameLevel.prototype.destroy	= function()
{
	this._timeoutDtor();

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
	
	microphysics	= null;
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Marble.GameLevel.prototype.visualFxAdd	= function(visualFx)
{
	console.assert( visualFx instanceof Marble.VisualFx );
	console.assert( this._visualFxs.indexOf(visualFx) === -1, "visualFx MUST NOT be present" );
	this._visualFxs.push(visualFx);

	visualFx.bind('autodestroy', function(){
		console.log("autodetroy");
		visualFx.destroy();
		this.visualFxRemove(visualFx);
	}.bind(this));
}

Marble.GameLevel.prototype.visualFxRemove	= function(visualFx)
{
	console.assert( visualFx instanceof Marble.VisualFx );
	console.assert( this._visualFxs.indexOf(visualFx) !== -1, "visualFx MUST be present" );
	this._visualFxs.splice( this._visualFxs.indexOf(visualFx), 1 );
}

Marble.GameLevel.prototype._visualFxUpdate	= function()
{
	this._visualFxs.forEach(function(visualFx){
		visualFx.update();
	});
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
	// update THREEx.Microphysics
	microphysics.update(scene);

	this._map.tick();

	this._player.tick();
	this._balls  .forEach(	function(item){ item.tick(); });
	this._enemies.forEach(	function(item){	item.tick(); });
	
	this._visualFxUpdate();

	this._camera.tick();

	// check if the level is completed
	// - count the amount of visible balls
	var nbVisible	= 0;
	this._balls.forEach(function(ball){
		nbVisible	+= ball.isVisible() ? 1 : 0;
	});
// removed during r46...
	if( nbVisible === 0 )	pageGameLife.triggerEndOfLevel('win', 'levelCompleted');

	osdLayer.update();
}

//////////////////////////////////////////////////////////////////////////////////
//		balls								//
//////////////////////////////////////////////////////////////////////////////////

Marble.GameLevel.prototype._ballCtor	= function(ballOpts)
{
	var ball	= new Marble.Ball(ballOpts);

	this._balls.push(ball);

	ball.bind('goal', function(){
		
		ball.setInvisible();
		gameLevel.player().scoreChange(20);
		soundPool.get('goal').play();
		
		// add a particle where the ball disapeared
		//this.visualFxAdd(new Marble.VisualFxParticles({
		//	position	: ball.mesh().position
		//}));

	}.bind(this));
}

Marble.GameLevel.prototype._ballBuild9Rack	= function(){
	var radius	= Marble.tileSize; 
	var rack	= new THREE.Vector3(0,0, -6 * radius);
	var offset;
	var addBall	= function(arr, offset){
		arr.forEach(function(ballDesc, index){
			this._ballCtor({
				ballDesc	: ballDesc,
				position	: new THREE.Vector3(index * radius,0,0).addSelf(offset)
			});
		}.bind(this));
	}.bind(this);
	// in a rack, ball are touching => equilateral triangle between 3 balls => all angles = Math.PI/3
	var offsetY	= Math.sin(Math.PI/3);

	// front line
	offset	= rack.clone().addSelf(new THREE.Vector3(0,0,0));
	addBall(['1'], offset)

	// second line
	offset	= rack.clone().addSelf(new THREE.Vector3(-0.5*radius,0, -1 * offsetY * radius));
	addBall(['2', '3'], offset);

	// third line
	offset	= rack.clone().addSelf(new THREE.Vector3(-1*radius,0, -2 * offsetY * radius));
	addBall(['4', '9', '5'], offset);

	// forth line
	offset	= rack.clone().addSelf(new THREE.Vector3(-0.5*radius,0, -3 * offsetY * radius));
	addBall(['6', '7'], offset);

	// fitth line
	offset	= rack.clone().addSelf(new THREE.Vector3(0,0, -4 * offsetY * radius));
	addBall(['8'], offset);
}

//////////////////////////////////////////////////////////////////////////////////
//		timeoutCtor							//
//////////////////////////////////////////////////////////////////////////////////

Marble.GameLevel.prototype._timeoutCtor	= function()
{
	console.assert( !this._timeoutId )
	this._timeoutId	= setTimeout(this._timeoutCallback.bind(this), 1*1000);
	this._timeout	= 120; 
}

Marble.GameLevel.prototype._timeoutDtor	= function()
{
	if( !this._timeoutId )	return;
	clearTimeout(this._timeoutId);
	this._timeoutId	= null;
}

Marble.GameLevel.prototype._timeoutCallback	= function()
{
	if( this._timeout < 0 ){
		pageGameLife.triggerEndOfLevel('dead', 'timeout');
		return;
	}
	osdLayer.timeoutSet(this._timeout+'s');
	
	this._timeout--;
	this._timeoutId	= setTimeout(this._timeoutCallback.bind(this), 1*1000);
}

