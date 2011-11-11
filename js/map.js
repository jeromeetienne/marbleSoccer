Marble.Map	= function()
{
	// small dev map
	//var map	= [{"x":-3,"y":0,"z":-2,"t":0},{"x":-2,"y":0,"z":-2,"t":0},{"x":-1,"y":0,"z":-3,"t":1},{"x":-1,"y":0,"z":-2,"t":1},{"x":0,"y":0,"z":-2,"t":1},{"x":1,"y":0,"z":-2,"t":1},{"x":-1,"y":0,"z":-1,"t":3},{"x":-1,"y":0,"z":0,"t":3},{"x":-1,"y":0,"z":1,"t":3},{"x":-1,"y":1,"z":0,"t":9},{"x":1,"y":1,"z":-2,"t":9},{"x":0,"y":0,"z":-1,"t":9},{"x":0,"y":0,"z":0,"t":5}];
	var map	= [{"x":0,"y":0,"z":0,"t":0}, {"x":0,"y":0,"z":1,"t":0}];
	// big map - anne
	var map	= [{"x":8,"y":0,"z":3,"t":2},{"x":8,"y":0,"z":2,"t":2},{"x":8,"y":0,"z":1,"t":2},{"x":8,"y":0,"z":0,"t":2},{"x":8,"y":0,"z":-1,"t":2},{"x":8,"y":0,"z":-2,"t":2},{"x":8,"y":0,"z":-4,"t":2},{"x":8,"y":0,"z":-3,"t":2},{"x":8,"y":0,"z":-5,"t":2},{"x":8,"y":0,"z":-6,"t":2},{"x":8,"y":0,"z":-7,"t":2},{"x":8,"y":0,"z":-8,"t":2},{"x":8,"y":0,"z":-9,"t":2},{"x":8,"y":0,"z":-10,"t":2},{"x":8,"y":0,"z":-11,"t":2},{"x":8,"y":0,"z":-12,"t":2},{"x":8,"y":0,"z":-13,"t":2},{"x":-4,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":3,"t":2},{"x":-6,"y":0,"z":2,"t":2},{"x":-5,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":0,"t":2},{"x":-6,"y":0,"z":-1,"t":2},{"x":-6,"y":0,"z":-2,"t":2},{"x":-6,"y":0,"z":-3,"t":2},{"x":-6,"y":0,"z":-7,"t":2},{"x":-6,"y":0,"z":-8,"t":2},{"x":-6,"y":0,"z":-9,"t":2},{"x":-6,"y":0,"z":-10,"t":2},{"x":-6,"y":0,"z":-11,"t":2},{"x":-6,"y":0,"z":-12,"t":2},{"x":5,"y":0,"z":-16,"t":2},{"x":4,"y":0,"z":-16,"t":2},{"x":3,"y":0,"z":-16,"t":2},{"x":2,"y":0,"z":-16,"t":2},{"x":1,"y":0,"z":-16,"t":2},{"x":0,"y":0,"z":-16,"t":2},{"x":-1,"y":0,"z":-16,"t":2},{"x":-2,"y":0,"z":-16,"t":2},{"x":-3,"y":0,"z":-16,"t":2},{"x":-4,"y":0,"z":-16,"t":2},{"x":-6,"y":0,"z":-13,"t":2},{"x":7,"y":0,"z":2,"t":2},{"x":7,"y":0,"z":1,"t":2},{"x":5,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":0,"t":2},{"x":6,"y":0,"z":1,"t":2},{"x":5,"y":0,"z":0,"t":2},{"x":4,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":0,"t":2},{"x":2,"y":0,"z":1,"t":2},{"x":0,"y":0,"z":1,"t":2},{"x":0,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":1,"t":2},{"x":-2,"y":0,"z":1,"t":2},{"x":-3,"y":0,"z":1,"t":2},{"x":-4,"y":0,"z":0,"t":2},{"x":-5,"y":0,"z":0,"t":2},{"x":-4,"y":0,"z":-1,"t":2},{"x":-3,"y":0,"z":0,"t":2},{"x":-3,"y":0,"z":-1,"t":2},{"x":-2,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":-1,"t":2},{"x":2,"y":0,"z":0,"t":2},{"x":1,"y":0,"z":-1,"t":2},{"x":0,"y":0,"z":-1,"t":2},{"x":2,"y":0,"z":-1,"t":2},{"x":3,"y":0,"z":-1,"t":2},{"x":4,"y":0,"z":0,"t":2},{"x":4,"y":0,"z":-1,"t":2},{"x":5,"y":0,"z":-1,"t":2},{"x":6,"y":0,"z":0,"t":2},{"x":7,"y":0,"z":-1,"t":2},{"x":6,"y":0,"z":-1,"t":2},{"x":5,"y":0,"z":-2,"t":2},{"x":4,"y":0,"z":-2,"t":2},{"x":4,"y":0,"z":-3,"t":2},{"x":6,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":-3,"t":2},{"x":5,"y":0,"z":-3,"t":2},{"x":3,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-2,"t":2},{"x":-1,"y":0,"z":-2,"t":2},{"x":-2,"y":0,"z":-1,"t":2},{"x":-4,"y":0,"z":-3,"t":2},{"x":-5,"y":0,"z":-2,"t":2},{"x":1,"y":0,"z":1,"t":2},{"x":1,"y":0,"z":0,"t":2},{"x":1,"y":0,"z":-2,"t":2},{"x":0,"y":0,"z":-2,"t":2},{"x":-2,"y":0,"z":-2,"t":2},{"x":-3,"y":0,"z":-2,"t":2},{"x":-4,"y":0,"z":-2,"t":2},{"x":-5,"y":0,"z":-1,"t":2},{"x":-3,"y":0,"z":-3,"t":2},{"x":-2,"y":0,"z":-3,"t":2},{"x":-1,"y":0,"z":-3,"t":2},{"x":0,"y":0,"z":-3,"t":2},{"x":1,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-4,"t":2},{"x":1,"y":0,"z":-4,"t":2},{"x":0,"y":0,"z":-4,"t":2},{"x":-1,"y":0,"z":-4,"t":2},{"x":-2,"y":0,"z":-4,"t":2},{"x":-3,"y":0,"z":-4,"t":2},{"x":-3,"y":0,"z":-5,"t":2},{"x":-2,"y":0,"z":-5,"t":2},{"x":0,"y":0,"z":-5,"t":2},{"x":2,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-5,"t":2},{"x":1,"y":0,"z":-5,"t":2},{"x":2,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-4,"t":2},{"x":3,"y":0,"z":-4,"t":2},{"x":3,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-6,"t":2},{"x":3,"y":0,"z":-6,"t":2},{"x":4,"y":0,"z":-7,"t":2},{"x":1,"y":0,"z":-7,"t":2},{"x":1,"y":0,"z":-6,"t":2},{"x":0,"y":0,"z":-6,"t":2},{"x":-3,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-7,"t":2},{"x":-2,"y":0,"z":-6,"t":2},{"x":-2,"y":0,"z":-7,"t":2},{"x":-3,"y":0,"z":-7,"t":2},{"x":-4,"y":0,"z":-7,"t":2},{"x":0,"y":0,"z":-7,"t":2},{"x":2,"y":0,"z":-7,"t":2},{"x":3,"y":0,"z":-7,"t":2},{"x":5,"y":0,"z":-7,"t":2},{"x":6,"y":0,"z":-8,"t":2},{"x":7,"y":0,"z":-7,"t":2},{"x":7,"y":0,"z":-8,"t":2},{"x":5,"y":0,"z":-8,"t":2},{"x":4,"y":0,"z":-8,"t":2},{"x":3,"y":0,"z":-8,"t":2},{"x":2,"y":0,"z":-8,"t":2},{"x":1,"y":0,"z":-8,"t":2},{"x":1,"y":0,"z":-9,"t":2},{"x":0,"y":0,"z":-8,"t":2},{"x":-1,"y":0,"z":-8,"t":2},{"x":-2,"y":0,"z":-8,"t":2},{"x":-3,"y":0,"z":-8,"t":2},{"x":-4,"y":0,"z":-8,"t":2},{"x":-5,"y":0,"z":-8,"t":2},{"x":-5,"y":0,"z":-9,"t":2},{"x":-4,"y":0,"z":-9,"t":2},{"x":-3,"y":0,"z":-9,"t":2},{"x":-2,"y":0,"z":-9,"t":2},{"x":-1,"y":0,"z":-9,"t":2},{"x":0,"y":0,"z":-9,"t":2},{"x":2,"y":0,"z":-9,"t":2},{"x":3,"y":0,"z":-9,"t":2},{"x":4,"y":0,"z":-9,"t":2},{"x":5,"y":0,"z":-9,"t":2},{"x":6,"y":0,"z":-9,"t":2},{"x":7,"y":0,"z":-9,"t":2},{"x":7,"y":0,"z":-10,"t":2},{"x":6,"y":0,"z":-10,"t":2},{"x":5,"y":0,"z":-10,"t":2},{"x":4,"y":0,"z":-10,"t":2},{"x":4,"y":0,"z":-11,"t":2},{"x":2,"y":0,"z":-10,"t":2},{"x":2,"y":0,"z":-11,"t":2},{"x":3,"y":0,"z":-10,"t":2},{"x":3,"y":0,"z":-11,"t":2},{"x":5,"y":0,"z":-11,"t":2},{"x":6,"y":0,"z":-11,"t":2},{"x":7,"y":0,"z":-11,"t":2},{"x":7,"y":0,"z":-12,"t":2},{"x":7,"y":0,"z":-13,"t":2},{"x":5,"y":0,"z":-14,"t":2},{"x":4,"y":0,"z":-14,"t":2},{"x":-5,"y":0,"z":-11,"t":2},{"x":-5,"y":0,"z":-12,"t":2},{"x":-4,"y":0,"z":-10,"t":2},{"x":-4,"y":0,"z":-11,"t":2},{"x":-3,"y":0,"z":-10,"t":2},{"x":-2,"y":0,"z":-10,"t":2},{"x":-2,"y":0,"z":-11,"t":2},{"x":-1,"y":0,"z":-10,"t":2},{"x":1,"y":0,"z":-10,"t":2},{"x":1,"y":0,"z":-11,"t":2},{"x":0,"y":0,"z":-10,"t":2},{"x":-5,"y":0,"z":-13,"t":2},{"x":-4,"y":0,"z":-14,"t":2},{"x":-3,"y":0,"z":-14,"t":2},{"x":-1,"y":0,"z":-14,"t":2},{"x":-2,"y":0,"z":-14,"t":2},{"x":-1,"y":0,"z":-15,"t":2},{"x":0,"y":0,"z":-14,"t":2},{"x":1,"y":0,"z":-14,"t":2},{"x":2,"y":0,"z":-14,"t":2},{"x":3,"y":0,"z":-14,"t":2},{"x":-4,"y":0,"z":-15,"t":2},{"x":-2,"y":0,"z":-15,"t":2},{"x":-3,"y":0,"z":-15,"t":2},{"x":-5,"y":0,"z":-10,"t":2},{"x":-3,"y":0,"z":-11,"t":2},{"x":0,"y":0,"z":-11,"t":2},{"x":-1,"y":0,"z":-11,"t":2},{"x":5,"y":0,"z":-15,"t":2},{"x":4,"y":0,"z":-15,"t":2},{"x":3,"y":0,"z":-15,"t":2},{"x":2,"y":0,"z":-15,"t":2},{"x":1,"y":0,"z":-15,"t":2},{"x":0,"y":0,"z":-15,"t":2},{"x":-6,"y":0,"z":4,"t":2},{"x":-7,"y":0,"z":4,"t":2},{"x":-4,"y":0,"z":4,"t":2},{"x":-5,"y":0,"z":4,"t":2},{"x":-3,"y":0,"z":4,"t":2},{"x":-3,"y":0,"z":5,"t":2},{"x":-2,"y":0,"z":4,"t":2},{"x":0,"y":0,"z":4,"t":2},{"x":-1,"y":0,"z":4,"t":2},{"x":2,"y":0,"z":4,"t":2},{"x":0,"y":0,"z":5,"t":2},{"x":1,"y":0,"z":4,"t":2},{"x":8,"y":0,"z":4,"t":2},{"x":7,"y":0,"z":4,"t":2},{"x":6,"y":0,"z":4,"t":2},{"x":5,"y":0,"z":4,"t":2},{"x":4,"y":0,"z":4,"t":2},{"x":3,"y":0,"z":4,"t":2},{"x":-1,"y":0,"z":5,"t":2},{"x":-2,"y":0,"z":5,"t":2},{"x":-4,"y":0,"z":5,"t":2},{"x":1,"y":0,"z":5,"t":2},{"x":2,"y":0,"z":5,"t":2},{"x":3,"y":0,"z":5,"t":2},{"x":4,"y":0,"z":5,"t":2},{"x":4,"y":0,"z":6,"t":2},{"x":5,"y":0,"z":5,"t":2},{"x":5,"y":0,"z":6,"t":2},{"x":3,"y":0,"z":6,"t":2},{"x":2,"y":0,"z":6,"t":2},{"x":1,"y":0,"z":6,"t":2},{"x":0,"y":0,"z":6,"t":2},{"x":-1,"y":0,"z":6,"t":2},{"x":-2,"y":0,"z":6,"t":2},{"x":-3,"y":0,"z":6,"t":2},{"x":-4,"y":0,"z":6,"t":2},{"x":-4,"y":0,"z":7,"t":2},{"x":-3,"y":0,"z":7,"t":2},{"x":-2,"y":0,"z":7,"t":2},{"x":-1,"y":0,"z":7,"t":2},{"x":0,"y":0,"z":7,"t":2},{"x":1,"y":0,"z":7,"t":2},{"x":2,"y":0,"z":7,"t":2},{"x":3,"y":0,"z":7,"t":2},{"x":4,"y":0,"z":7,"t":2},{"x":5,"y":0,"z":7,"t":2},{"x":-7,"y":0,"z":3,"t":2},{"x":-7,"y":0,"z":2,"t":2},{"x":-7,"y":0,"z":1,"t":2},{"x":-7,"y":0,"z":0,"t":2},{"x":-7,"y":0,"z":-1,"t":2},{"x":-7,"y":0,"z":-2,"t":2},{"x":-7,"y":0,"z":-3,"t":2},{"x":-7,"y":0,"z":-4,"t":2},{"x":-7,"y":0,"z":-5,"t":2},{"x":-7,"y":0,"z":-6,"t":2},{"x":-7,"y":0,"z":-7,"t":2},{"x":-7,"y":0,"z":-8,"t":2},{"x":-7,"y":0,"z":-9,"t":2},{"x":-7,"y":0,"z":-10,"t":2},{"x":-7,"y":0,"z":-11,"t":2},{"x":-7,"y":0,"z":-12,"t":2},{"x":-7,"y":0,"z":-13,"t":2},{"x":8,"y":1,"z":4,"t":2},{"x":8,"y":1,"z":3,"t":2},{"x":8,"y":1,"z":2,"t":2},{"x":8,"y":1,"z":0,"t":2},{"x":8,"y":1,"z":1,"t":2},{"x":8,"y":1,"z":-1,"t":2},{"x":8,"y":1,"z":-2,"t":2},{"x":8,"y":1,"z":-3,"t":2},{"x":8,"y":1,"z":-4,"t":2},{"x":8,"y":1,"z":-5,"t":2},{"x":8,"y":1,"z":-6,"t":2},{"x":8,"y":1,"z":-8,"t":2},{"x":8,"y":1,"z":-7,"t":2},{"x":8,"y":1,"z":-9,"t":2},{"x":8,"y":1,"z":-10,"t":2},{"x":8,"y":1,"z":-11,"t":2},{"x":8,"y":1,"z":-12,"t":2},{"x":8,"y":1,"z":-13,"t":2},{"x":5,"y":1,"z":-16,"t":2},{"x":3,"y":1,"z":-16,"t":2},{"x":4,"y":1,"z":-16,"t":2},{"x":-2,"y":1,"z":-16,"t":2},{"x":-3,"y":1,"z":-16,"t":2},{"x":-4,"y":1,"z":-16,"t":2},{"x":-7,"y":1,"z":-13,"t":2},{"x":-7,"y":1,"z":-12,"t":2},{"x":-7,"y":1,"z":-11,"t":2},{"x":-7,"y":1,"z":-10,"t":2},{"x":-7,"y":1,"z":-9,"t":2},{"x":-7,"y":1,"z":-8,"t":2},{"x":-7,"y":1,"z":-7,"t":2},{"x":-7,"y":1,"z":-6,"t":2},{"x":-7,"y":1,"z":-5,"t":2},{"x":-7,"y":1,"z":-4,"t":2},{"x":-7,"y":1,"z":-3,"t":2},{"x":-7,"y":1,"z":-2,"t":2},{"x":-7,"y":1,"z":-1,"t":2},{"x":-7,"y":1,"z":0,"t":2},{"x":-7,"y":1,"z":1,"t":2},{"x":-7,"y":1,"z":2,"t":2},{"x":-7,"y":1,"z":3,"t":2},{"x":-7,"y":1,"z":4,"t":2},{"x":-4,"y":1,"z":7,"t":2},{"x":-3,"y":1,"z":7,"t":2},{"x":-2,"y":1,"z":7,"t":2},{"x":3,"y":1,"z":7,"t":2},{"x":4,"y":1,"z":7,"t":2},{"x":5,"y":1,"z":7,"t":2},{"x":7,"y":0,"z":3,"t":2},{"x":6,"y":0,"z":3,"t":1},{"x":5,"y":0,"z":3,"t":1},{"x":4,"y":0,"z":3,"t":1},{"x":3,"y":0,"z":3,"t":1},{"x":2,"y":0,"z":3,"t":1},{"x":1,"y":0,"z":3,"t":1},{"x":0,"y":0,"z":3,"t":1},{"x":-1,"y":0,"z":3,"t":1},{"x":-2,"y":0,"z":3,"t":1},{"x":-3,"y":0,"z":3,"t":1},{"x":-4,"y":0,"z":3,"t":1},{"x":-5,"y":0,"z":3,"t":1},{"x":6,"y":0,"z":2,"t":1},{"x":5,"y":0,"z":2,"t":1},{"x":4,"y":0,"z":2,"t":1},{"x":3,"y":0,"z":2,"t":1},{"x":2,"y":0,"z":2,"t":1},{"x":1,"y":0,"z":2,"t":1},{"x":0,"y":0,"z":2,"t":1},{"x":-1,"y":0,"z":2,"t":1},{"x":-2,"y":0,"z":2,"t":1},{"x":-3,"y":0,"z":2,"t":1},{"x":-4,"y":0,"z":2,"t":1},{"x":-5,"y":0,"z":2,"t":1},{"x":2,"y":1,"z":7,"t":0},{"x":1,"y":1,"z":7,"t":0},{"x":0,"y":1,"z":7,"t":0},{"x":-1,"y":1,"z":7,"t":0},{"x":6,"y":0,"z":-13,"t":1},{"x":6,"y":0,"z":-12,"t":1},{"x":5,"y":0,"z":-12,"t":1},{"x":5,"y":0,"z":-13,"t":1},{"x":4,"y":0,"z":-13,"t":1},{"x":4,"y":0,"z":-12,"t":1},{"x":3,"y":0,"z":-12,"t":1},{"x":3,"y":0,"z":-13,"t":1},{"x":2,"y":0,"z":-13,"t":1},{"x":2,"y":0,"z":-12,"t":1},{"x":1,"y":0,"z":-12,"t":1},{"x":1,"y":0,"z":-13,"t":1},{"x":0,"y":0,"z":-13,"t":1},{"x":0,"y":0,"z":-12,"t":1},{"x":-1,"y":0,"z":-12,"t":1},{"x":-1,"y":0,"z":-13,"t":1},{"x":-2,"y":0,"z":-13,"t":1},{"x":-2,"y":0,"z":-12,"t":1},{"x":-3,"y":0,"z":-12,"t":1},{"x":-3,"y":0,"z":-13,"t":1},{"x":-4,"y":0,"z":-13,"t":1},{"x":-4,"y":0,"z":-12,"t":1},{"x":7,"y":0,"z":-6,"t":5},{"x":7,"y":0,"z":-4,"t":5},{"x":6,"y":0,"z":-5,"t":5},{"x":5,"y":0,"z":-6,"t":5},{"x":5,"y":0,"z":-4,"t":5},{"x":6,"y":0,"z":-7,"t":5},{"x":6,"y":0,"z":-3,"t":5},{"x":7,"y":0,"z":-5,"t":8},{"x":6,"y":0,"z":-6,"t":8},{"x":6,"y":0,"z":-4,"t":8},{"x":5,"y":0,"z":-5,"t":8},{"x":-5,"y":0,"z":-4,"t":8},{"x":-5,"y":0,"z":-6,"t":8},{"x":-4,"y":0,"z":-5,"t":8},{"x":-6,"y":0,"z":-5,"t":8},{"x":-5,"y":0,"z":-3,"t":5},{"x":-6,"y":0,"z":-4,"t":5},{"x":-5,"y":0,"z":-5,"t":5},{"x":-4,"y":0,"z":-4,"t":5},{"x":-4,"y":0,"z":-6,"t":5},{"x":-5,"y":0,"z":-7,"t":5},{"x":-6,"y":0,"z":-6,"t":5},{"x":8,"y":0,"z":5,"t":3},{"x":8,"y":0,"z":6,"t":3},{"x":8,"y":0,"z":7,"t":3},{"x":7,"y":0,"z":7,"t":3},{"x":6,"y":0,"z":7,"t":3},{"x":6,"y":1,"z":7,"t":3},{"x":7,"y":1,"z":7,"t":3},{"x":8,"y":1,"z":7,"t":3},{"x":8,"y":1,"z":6,"t":3},{"x":8,"y":1,"z":5,"t":3},{"x":6,"y":-1,"z":5,"t":0},{"x":7,"y":-1,"z":5,"t":0},{"x":7,"y":-1,"z":6,"t":0},{"x":6,"y":-1,"z":6,"t":0},{"x":-6,"y":-1,"z":5,"t":0},{"x":-5,"y":-1,"z":5,"t":0},{"x":-5,"y":-1,"z":6,"t":0},{"x":-6,"y":-1,"z":6,"t":0},{"x":-7,"y":0,"z":5,"t":3},{"x":-7,"y":1,"z":5,"t":3},{"x":-7,"y":0,"z":6,"t":3},{"x":-7,"y":1,"z":6,"t":3},{"x":-7,"y":0,"z":7,"t":3},{"x":-7,"y":1,"z":7,"t":3},{"x":-5,"y":0,"z":7,"t":3},{"x":-5,"y":1,"z":7,"t":3},{"x":-6,"y":0,"z":7,"t":3},{"x":-6,"y":1,"z":7,"t":3},{"x":6,"y":-1,"z":-15,"t":0},{"x":7,"y":-1,"z":-15,"t":0},{"x":7,"y":-1,"z":-14,"t":0},{"x":6,"y":-1,"z":-14,"t":0},{"x":6,"y":0,"z":-16,"t":3},{"x":6,"y":1,"z":-16,"t":3},{"x":7,"y":0,"z":-16,"t":3},{"x":7,"y":1,"z":-16,"t":3},{"x":8,"y":0,"z":-16,"t":3},{"x":8,"y":1,"z":-16,"t":3},{"x":8,"y":0,"z":-15,"t":3},{"x":8,"y":1,"z":-15,"t":3},{"x":8,"y":0,"z":-14,"t":3},{"x":8,"y":1,"z":-14,"t":3},{"x":-6,"y":-1,"z":-14,"t":0},{"x":-6,"y":-1,"z":-15,"t":0},{"x":-5,"y":-1,"z":-15,"t":0},{"x":-5,"y":-1,"z":-14,"t":0},{"x":-5,"y":0,"z":-16,"t":3},{"x":-6,"y":0,"z":-16,"t":3},{"x":-7,"y":0,"z":-16,"t":3},{"x":-6,"y":1,"z":-16,"t":3},{"x":-5,"y":1,"z":-16,"t":3},{"x":-7,"y":1,"z":-16,"t":3},{"x":-7,"y":0,"z":-15,"t":3},{"x":-7,"y":1,"z":-15,"t":3},{"x":-7,"y":0,"z":-14,"t":3},{"x":-7,"y":1,"z":-14,"t":3},{"x":2,"y":1,"z":-16,"t":2},{"x":1,"y":1,"z":-16,"t":2},{"x":0,"y":1,"z":-16,"t":2},{"x":-1,"y":1,"z":-16,"t":2}];
	this._voxelMap	= new Marble.VoxelMap({map : map});
	
	if( true ){
		this._bindPhysics2();
		this._buildMesh();		
	}else{
		this._buildMesh();
		this._bindPhysics();
	}
}

Marble.Map.prototype._bindPhysicsContact	= function(body, voxelType)
{
	/**
	 * TODO notify the marble entering in contact
	 * - so you need to know the marble
	 * - is that an enemy ? a player ?
	 * - how to get that info in the contact callback ?
	 * - put a name/id per marble ?
	*/
	var type2contact	= [
		function(event, otherBody){
			var thisBody	= this;
			var marbleId	= otherBody._marbleId;
			var voxelType	= thisBody._voxelType;
			voxelType	= 0;	// TODO suddently super slow if i set thisBody._voxelType, reason unknown
			//console.log("type", thisBody._voxelType, otherBody._marbleId, world);
			world.onContactMarbleVoxel(marbleId, voxelType);
		},
		function(event, otherBody){
			var thisBody	= this;
			var marbleId	= otherBody._marbleId;
			var voxelType	= thisBody._voxelType;
			voxelType	= 1;	// TODO suddently super slow if i set thisBody._voxelType, reason unknown
			//console.log("type", thisBody._voxelType, otherBody._marbleId, world);
			world.onContactMarbleVoxel(marbleId, voxelType);
		},
		null,
		null,
		null,
		
		null,
		null,
		null,
		null,
		null,
	];

	// register the contact callback if any
	var contactFct	= type2contact[voxelType];
	if( contactFct )	body.events.on('contact', contactFct);

	// TODO suddently super slow if i set thisBody._voxelType, reason unknown
	//body._voxelType	= voxelType;
	//body.prout	= "kkkk";
}

Marble.Map.prototype._bindPhysics	= function()
{
	// add gravity in microphysics
	if( true ){
		microphysics.world().add(new vphy.LinearAccelerator({
			x	:  0, 
			y	: -9.8  * Marble.tileSize,
			z	:  0
		}));		
	}


	// TODO: it may be faster if aggregated by voxel
	// - additionnaly it will be better physics
	this._voxels.forEach(function(voxel){
		var mesh	= voxel.mesh();

		microphysics.bindMesh(mesh, {
			physics	: {
				restitution	: 0.8
			}
		});
		
		this._bindPhysicsContact(microphysics.body(mesh), voxel.type());

	}.bind(this));
}

Marble.Map.prototype._bindPhysics2	= function()
{
	// add gravity in microphysics
	if( true ){
		microphysics.world().add(new vphy.LinearAccelerator({
			x	:  0, 
			y	: -9.8  * Marble.tileSize,
			z	:  0
		}));		
	}

	var voxelMap	= this._voxelMap.clone();
	//var voxelMap	= this._voxelMap;
	while( voxelMap.map().length ){
		var item= voxelMap.map()[0];
		var box	= voxelMap._growBox(item.x,item.y,item.z,item.t);
		voxelMap._removeBox(box.minX, box.minY, box.minZ, box.maxX, box.maxY, box.maxZ, item.t);

		var width	= (box.maxX - box.minX + 1) * Marble.tileSize;
		var height	= (box.maxY - box.minY + 1) * Marble.tileSize;
		var depth	= (box.maxZ - box.minZ + 1) * Marble.tileSize;
		var positionX	= (box.maxX + box.minX) / 2 * Marble.tileSize;
		var positionY	= (box.maxY + box.minY) / 2 * Marble.tileSize - Marble.tileSize/2;
		var positionZ	= (box.maxZ + box.minZ) / 2 * Marble.tileSize;

		var vphyOpts	= {
			restitution	: 0.8,
			width		: width,
			height		: height,
			depth		: depth,
			x		: positionX,
			y		: positionY - Marble.tileSize/2,	// __doc__ this height/2 seems like a bug ?
			z		: positionZ
		};

		// create physics body and add it to microphysics.world()
		var body	= new vphy.AABB(vphyOpts)
		microphysics.world().add(body);
		
		this._bindPhysicsContact(body, item.t);


		if( false ){			
			console.log("**************");
			console.log("item", JSON.stringify(item), Marble.Voxel._type2colors[item.t].getHex())
			console.log("box", JSON.stringify(box))
			console.log("vphyOpts", JSON.stringify(vphyOpts))
		}

		if( false ){
			var geometry	= new THREE.CubeGeometry(width, height, depth);
			var material	= [
				//new THREE.MeshNormalMaterial(),
				new THREE.MeshBasicMaterial( { color: Marble.Voxel._type2colors[item.t].getHex() } ),
				new THREE.MeshBasicMaterial( { color: 0x000000, wireframe: true } )
			];
			var mesh	= new THREE.Mesh(new THREE.CubeGeometry(width, height, depth), material);
			mesh.position.set(positionX, positionY, positionZ);
			scene.addObject(mesh);			
		}
	}
}

/**
 * Build the map according to this._mapVoxels
*/
Marble.Map.prototype._buildMesh	= function()
{
	var geometry	= new THREE.Geometry();
	this._voxels	= [];
	this._voxelMap.map().forEach(function(mapVoxel){
		var voxel	= new Marble.Voxel({
			type	: mapVoxel.t
		});
		var mesh	= voxel.mesh();
		mesh.position.x	= mapVoxel.x * Marble.tileSize;
		mesh.position.y	= mapVoxel.y * Marble.tileSize - Marble.tileSize/2;
		mesh.position.z	= mapVoxel.z * Marble.tileSize;
		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();
		
		this._voxels.push( voxel );

		// merge all the geometries
		THREE.GeometryUtils.merge( geometry, mesh );		
	}.bind(this));

	// build the THREE.Mesh itself
	var mesh	= new THREE.Mesh( geometry, new THREE.MeshFaceMaterial() );
	mesh.matrixAutoUpdate = false;
	mesh.updateMatrix();
	
	this._mesh	= mesh;
}

/**
 * return the three.js object for the map
*/
Marble.Map.prototype.mesh	= function(){	return this._mesh;	}

/**
 * return true if there is a voxel at this coordinate, false otherwise
*/
Marble.Map.prototype.getHeight	= function(worldX, worldZ)
{
	var voxelX	= Math.floor((worldX + Marble.tileSize/2) / Marble.tileSize);
	var voxelZ	= Math.floor((worldZ + Marble.tileSize/2) / Marble.tileSize);

	var voxelHeight	= this._voxelMap.getHeight(voxelX, voxelZ);
	if( voxelHeight === undefined )	return undefined;
	return voxelHeight * Marble.tileSize;
}

Marble.Map.prototype.tick	= function()
{
	// do nothing
}