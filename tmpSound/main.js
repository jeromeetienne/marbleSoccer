// TODO to remove - only there as experimentation

var sound	= new Marble.Sound({
	urls	: ['../sounds/pacman/die.mp3'],
});

setInterval(function(){
	sound.play();
}, 5*1000);

sound.bind('loaded', function(){
	this.play();
});


var soundTrack	= new Marble.Sound({
	urls	: ['../sounds/Hot-Butter-Popcorn.mp3']
});

soundTrack.bind('loaded', function(){
	this.play();
});