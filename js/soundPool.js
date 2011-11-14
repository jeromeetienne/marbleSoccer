Marble.SoundPool	= function(opts)
{
	this._sounds	= {};
	this._sounds['goal']	= new Marble.Sound({
		urls	: ['sounds/pacman/eatghost.mp3']
	});
	this._sounds['die']	= new Marble.Sound({
		urls	: ['sounds/pacman/die.mp3']
	});
}

Marble.SoundPool.prototype.destroy	= function(opts)
{
	Object.keys(this._sounds).forEach(function(key){
		this._sounds[key].destroy();
	}.bind(this));	
}

Marble.SoundPool.prototype.sounds	= function(){		return this._sounds;		}
Marble.SoundPool.prototype.get		= function(key){	return this._sounds[key];	}
