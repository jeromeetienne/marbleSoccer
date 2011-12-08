Marble.SoundPool	= function()
{
	this._sounds	= {};
}

Marble.SoundPool.prototype.destroy	= function(opts)
{
	Object.keys(this._sounds).forEach(function(key){
		this._sounds[key].destroy();
	}.bind(this));	
}

Marble.SoundPool.prototype.sounds	= function(){		return this._sounds;		}
Marble.SoundPool.prototype.get		= function(key){	return this._sounds[key];	}

Marble.SoundPool.prototype.insert	= function(key, sound)
{
	console.assert( sound instanceof Marble.Sound );
	console.assert( key in this._sounds === false );
	this._sounds[key]	= sound;
}

Marble.SoundPool.prototype.remove	= function(key)
{
	console.assert( this._sounds[key] instanceof Marble.Sound)
	this._sounds[key].destroy();
	delete this._sounds[key];
}

