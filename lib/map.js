Marble.Map	= function()
{
	// small dev map
	this._mapVoxels	= [{"x":-3,"y":0,"z":-2,"t":0},{"x":-2,"y":0,"z":-2,"t":0},{"x":-1,"y":0,"z":-3,"t":1},{"x":-1,"y":0,"z":-2,"t":1},{"x":0,"y":0,"z":-2,"t":1},{"x":1,"y":0,"z":-2,"t":1},{"x":-1,"y":0,"z":-1,"t":3},{"x":-1,"y":0,"z":0,"t":3},{"x":-1,"y":0,"z":1,"t":3},{"x":-1,"y":1,"z":0,"t":9},{"x":1,"y":1,"z":-2,"t":9},{"x":0,"y":0,"z":-1,"t":9},{"x":0,"y":0,"z":0,"t":5}];
	this._mapVoxels	= [{"x":0,"y":0,"z":0,"t":0}, {"x":2,"y":0,"z":2,"t":0}];
	// big map - anne
	//this._mapVoxels	= [{"x":8,"y":0,"z":3,"t":2},{"x":8,"y":0,"z":2,"t":2},{"x":8,"y":0,"z":1,"t":2},{"x":8,"y":0,"z":0,"t":2},{"x":8,"y":0,"z":-1,"t":2},{"x":8,"y":0,"z":-2,"t":2},{"x":8,"y":0,"z":-4,"t":2},{"x":8,"y":0,"z":-3,"t":2},{"x":8,"y":0,"z":-5,"t":2},{"x":8,"y":0,"z":-6,"t":2},{"x":8,"y":0,"z":-7,"t":2},{"x":8,"y":0,"z":-8,"t":2},{"x":8,"y":0,"z":-9,"t":2},{"x":8,"y":0,"z":-10,"t":2},{"x":8,"y":0,"z":-11,"t":2},{"x":8,"y":0,"z":-12,"t":2},{"x":8,"y":0,"z":-13,"t":2},{"x":-4,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":3,"t":2},{"x":-6,"y":0,"z":2,"t":2},{"x":-5,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":0,"t":2},{"x":-6,"y":0,"z":-1,"t":2},{"x":-6,"y":0,"z":-2,"t":2},{"x":-6,"y":0,"z":-3,"t":2},{"x":-6,"y":0,"z":-7,"t":2},{"x":-6,"y":0,"z":-8,"t":2},{"x":-6,"y":0,"z":-9,"t":2},{"x":-6,"y":0,"z":-10,"t":2},{"x":-6,"y":0,"z":-11,"t":2},{"x":-6,"y":0,"z":-12,"t":2},{"x":5,"y":0,"z":-16,"t":2},{"x":4,"y":0,"z":-16,"t":2},{"x":3,"y":0,"z":-16,"t":2},{"x":2,"y":0,"z":-16,"t":2},{"x":1,"y":0,"z":-16,"t":2},{"x":0,"y":0,"z":-16,"t":2},{"x":-1,"y":0,"z":-16,"t":2},{"x":-2,"y":0,"z":-16,"t":2},{"x":-3,"y":0,"z":-16,"t":2},{"x":-4,"y":0,"z":-16,"t":2},{"x":-6,"y":0,"z":-13,"t":2},{"x":7,"y":0,"z":2,"t":2},{"x":7,"y":0,"z":1,"t":2},{"x":5,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":0,"t":2},{"x":6,"y":0,"z":1,"t":2},{"x":5,"y":0,"z":0,"t":2},{"x":4,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":0,"t":2},{"x":2,"y":0,"z":1,"t":2},{"x":0,"y":0,"z":1,"t":2},{"x":0,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":1,"t":2},{"x":-2,"y":0,"z":1,"t":2},{"x":-3,"y":0,"z":1,"t":2},{"x":-4,"y":0,"z":0,"t":2},{"x":-5,"y":0,"z":0,"t":2},{"x":-4,"y":0,"z":-1,"t":2},{"x":-3,"y":0,"z":0,"t":2},{"x":-3,"y":0,"z":-1,"t":2},{"x":-2,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":-1,"t":2},{"x":2,"y":0,"z":0,"t":2},{"x":1,"y":0,"z":-1,"t":2},{"x":0,"y":0,"z":-1,"t":2},{"x":2,"y":0,"z":-1,"t":2},{"x":3,"y":0,"z":-1,"t":2},{"x":4,"y":0,"z":0,"t":2},{"x":4,"y":0,"z":-1,"t":2},{"x":5,"y":0,"z":-1,"t":2},{"x":6,"y":0,"z":0,"t":2},{"x":7,"y":0,"z":-1,"t":2},{"x":6,"y":0,"z":-1,"t":2},{"x":5,"y":0,"z":-2,"t":2},{"x":4,"y":0,"z":-2,"t":2},{"x":4,"y":0,"z":-3,"t":2},{"x":6,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":-3,"t":2},{"x":5,"y":0,"z":-3,"t":2},{"x":3,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-2,"t":2},{"x":-1,"y":0,"z":-2,"t":2},{"x":-2,"y":0,"z":-1,"t":2},{"x":-4,"y":0,"z":-3,"t":2},{"x":-5,"y":0,"z":-2,"t":2},{"x":1,"y":0,"z":1,"t":2},{"x":1,"y":0,"z":0,"t":2},{"x":1,"y":0,"z":-2,"t":2},{"x":0,"y":0,"z":-2,"t":2},{"x":-2,"y":0,"z":-2,"t":2},{"x":-3,"y":0,"z":-2,"t":2},{"x":-4,"y":0,"z":-2,"t":2},{"x":-5,"y":0,"z":-1,"t":2},{"x":-3,"y":0,"z":-3,"t":2},{"x":-2,"y":0,"z":-3,"t":2},{"x":-1,"y":0,"z":-3,"t":2},{"x":0,"y":0,"z":-3,"t":2},{"x":1,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-4,"t":2},{"x":1,"y":0,"z":-4,"t":2},{"x":0,"y":0,"z":-4,"t":2},{"x":-1,"y":0,"z":-4,"t":2},{"x":-2,"y":0,"z":-4,"t":2},{"x":-3,"y":0,"z":-4,"t":2},{"x":-3,"y":0,"z":-5,"t":2},{"x":-2,"y":0,"z":-5,"t":2},{"x":0,"y":0,"z":-5,"t":2},{"x":2,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-5,"t":2},{"x":1,"y":0,"z":-5,"t":2},{"x":2,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-4,"t":2},{"x":3,"y":0,"z":-4,"t":2},{"x":3,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-6,"t":2},{"x":3,"y":0,"z":-6,"t":2},{"x":4,"y":0,"z":-7,"t":2},{"x":1,"y":0,"z":-7,"t":2},{"x":1,"y":0,"z":-6,"t":2},{"x":0,"y":0,"z":-6,"t":2},{"x":-3,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-7,"t":2},{"x":-2,"y":0,"z":-6,"t":2},{"x":-2,"y":0,"z":-7,"t":2},{"x":-3,"y":0,"z":-7,"t":2},{"x":-4,"y":0,"z":-7,"t":2},{"x":0,"y":0,"z":-7,"t":2},{"x":2,"y":0,"z":-7,"t":2},{"x":3,"y":0,"z":-7,"t":2},{"x":5,"y":0,"z":-7,"t":2},{"x":6,"y":0,"z":-8,"t":2},{"x":7,"y":0,"z":-7,"t":2},{"x":7,"y":0,"z":-8,"t":2},{"x":5,"y":0,"z":-8,"t":2},{"x":4,"y":0,"z":-8,"t":2},{"x":3,"y":0,"z":-8,"t":2},{"x":2,"y":0,"z":-8,"t":2},{"x":1,"y":0,"z":-8,"t":2},{"x":1,"y":0,"z":-9,"t":2},{"x":0,"y":0,"z":-8,"t":2},{"x":-1,"y":0,"z":-8,"t":2},{"x":-2,"y":0,"z":-8,"t":2},{"x":-3,"y":0,"z":-8,"t":2},{"x":-4,"y":0,"z":-8,"t":2},{"x":-5,"y":0,"z":-8,"t":2},{"x":-5,"y":0,"z":-9,"t":2},{"x":-4,"y":0,"z":-9,"t":2},{"x":-3,"y":0,"z":-9,"t":2},{"x":-2,"y":0,"z":-9,"t":2},{"x":-1,"y":0,"z":-9,"t":2},{"x":0,"y":0,"z":-9,"t":2},{"x":2,"y":0,"z":-9,"t":2},{"x":3,"y":0,"z":-9,"t":2},{"x":4,"y":0,"z":-9,"t":2},{"x":5,"y":0,"z":-9,"t":2},{"x":6,"y":0,"z":-9,"t":2},{"x":7,"y":0,"z":-9,"t":2},{"x":7,"y":0,"z":-10,"t":2},{"x":6,"y":0,"z":-10,"t":2},{"x":5,"y":0,"z":-10,"t":2},{"x":4,"y":0,"z":-10,"t":2},{"x":4,"y":0,"z":-11,"t":2},{"x":2,"y":0,"z":-10,"t":2},{"x":2,"y":0,"z":-11,"t":2},{"x":3,"y":0,"z":-10,"t":2},{"x":3,"y":0,"z":-11,"t":2},{"x":5,"y":0,"z":-11,"t":2},{"x":6,"y":0,"z":-11,"t":2},{"x":7,"y":0,"z":-11,"t":2},{"x":7,"y":0,"z":-12,"t":2},{"x":7,"y":0,"z":-13,"t":2},{"x":5,"y":0,"z":-14,"t":2},{"x":4,"y":0,"z":-14,"t":2},{"x":-5,"y":0,"z":-11,"t":2},{"x":-5,"y":0,"z":-12,"t":2},{"x":-4,"y":0,"z":-10,"t":2},{"x":-4,"y":0,"z":-11,"t":2},{"x":-3,"y":0,"z":-10,"t":2},{"x":-2,"y":0,"z":-10,"t":2},{"x":-2,"y":0,"z":-11,"t":2},{"x":-1,"y":0,"z":-10,"t":2},{"x":1,"y":0,"z":-10,"t":2},{"x":1,"y":0,"z":-11,"t":2},{"x":0,"y":0,"z":-10,"t":2},{"x":-5,"y":0,"z":-13,"t":2},{"x":-4,"y":0,"z":-14,"t":2},{"x":-3,"y":0,"z":-14,"t":2},{"x":-1,"y":0,"z":-14,"t":2},{"x":-2,"y":0,"z":-14,"t":2},{"x":-1,"y":0,"z":-15,"t":2},{"x":0,"y":0,"z":-14,"t":2},{"x":1,"y":0,"z":-14,"t":2},{"x":2,"y":0,"z":-14,"t":2},{"x":3,"y":0,"z":-14,"t":2},{"x":-4,"y":0,"z":-15,"t":2},{"x":-2,"y":0,"z":-15,"t":2},{"x":-3,"y":0,"z":-15,"t":2},{"x":-5,"y":0,"z":-10,"t":2},{"x":-3,"y":0,"z":-11,"t":2},{"x":0,"y":0,"z":-11,"t":2},{"x":-1,"y":0,"z":-11,"t":2},{"x":5,"y":0,"z":-15,"t":2},{"x":4,"y":0,"z":-15,"t":2},{"x":3,"y":0,"z":-15,"t":2},{"x":2,"y":0,"z":-15,"t":2},{"x":1,"y":0,"z":-15,"t":2},{"x":0,"y":0,"z":-15,"t":2},{"x":-6,"y":0,"z":4,"t":2},{"x":-7,"y":0,"z":4,"t":2},{"x":-4,"y":0,"z":4,"t":2},{"x":-5,"y":0,"z":4,"t":2},{"x":-3,"y":0,"z":4,"t":2},{"x":-3,"y":0,"z":5,"t":2},{"x":-2,"y":0,"z":4,"t":2},{"x":0,"y":0,"z":4,"t":2},{"x":-1,"y":0,"z":4,"t":2},{"x":2,"y":0,"z":4,"t":2},{"x":0,"y":0,"z":5,"t":2},{"x":1,"y":0,"z":4,"t":2},{"x":8,"y":0,"z":4,"t":2},{"x":7,"y":0,"z":4,"t":2},{"x":6,"y":0,"z":4,"t":2},{"x":5,"y":0,"z":4,"t":2},{"x":4,"y":0,"z":4,"t":2},{"x":3,"y":0,"z":4,"t":2},{"x":-1,"y":0,"z":5,"t":2},{"x":-2,"y":0,"z":5,"t":2},{"x":-4,"y":0,"z":5,"t":2},{"x":1,"y":0,"z":5,"t":2},{"x":2,"y":0,"z":5,"t":2},{"x":3,"y":0,"z":5,"t":2},{"x":4,"y":0,"z":5,"t":2},{"x":4,"y":0,"z":6,"t":2},{"x":5,"y":0,"z":5,"t":2},{"x":5,"y":0,"z":6,"t":2},{"x":3,"y":0,"z":6,"t":2},{"x":2,"y":0,"z":6,"t":2},{"x":1,"y":0,"z":6,"t":2},{"x":0,"y":0,"z":6,"t":2},{"x":-1,"y":0,"z":6,"t":2},{"x":-2,"y":0,"z":6,"t":2},{"x":-3,"y":0,"z":6,"t":2},{"x":-4,"y":0,"z":6,"t":2},{"x":-4,"y":0,"z":7,"t":2},{"x":-3,"y":0,"z":7,"t":2},{"x":-2,"y":0,"z":7,"t":2},{"x":-1,"y":0,"z":7,"t":2},{"x":0,"y":0,"z":7,"t":2},{"x":1,"y":0,"z":7,"t":2},{"x":2,"y":0,"z":7,"t":2},{"x":3,"y":0,"z":7,"t":2},{"x":4,"y":0,"z":7,"t":2},{"x":5,"y":0,"z":7,"t":2},{"x":-7,"y":0,"z":3,"t":2},{"x":-7,"y":0,"z":2,"t":2},{"x":-7,"y":0,"z":1,"t":2},{"x":-7,"y":0,"z":0,"t":2},{"x":-7,"y":0,"z":-1,"t":2},{"x":-7,"y":0,"z":-2,"t":2},{"x":-7,"y":0,"z":-3,"t":2},{"x":-7,"y":0,"z":-4,"t":2},{"x":-7,"y":0,"z":-5,"t":2},{"x":-7,"y":0,"z":-6,"t":2},{"x":-7,"y":0,"z":-7,"t":2},{"x":-7,"y":0,"z":-8,"t":2},{"x":-7,"y":0,"z":-9,"t":2},{"x":-7,"y":0,"z":-10,"t":2},{"x":-7,"y":0,"z":-11,"t":2},{"x":-7,"y":0,"z":-12,"t":2},{"x":-7,"y":0,"z":-13,"t":2},{"x":8,"y":1,"z":4,"t":2},{"x":8,"y":1,"z":3,"t":2},{"x":8,"y":1,"z":2,"t":2},{"x":8,"y":1,"z":0,"t":2},{"x":8,"y":1,"z":1,"t":2},{"x":8,"y":1,"z":-1,"t":2},{"x":8,"y":1,"z":-2,"t":2},{"x":8,"y":1,"z":-3,"t":2},{"x":8,"y":1,"z":-4,"t":2},{"x":8,"y":1,"z":-5,"t":2},{"x":8,"y":1,"z":-6,"t":2},{"x":8,"y":1,"z":-8,"t":2},{"x":8,"y":1,"z":-7,"t":2},{"x":8,"y":1,"z":-9,"t":2},{"x":8,"y":1,"z":-10,"t":2},{"x":8,"y":1,"z":-11,"t":2},{"x":8,"y":1,"z":-12,"t":2},{"x":8,"y":1,"z":-13,"t":2},{"x":5,"y":1,"z":-16,"t":2},{"x":3,"y":1,"z":-16,"t":2},{"x":4,"y":1,"z":-16,"t":2},{"x":-2,"y":1,"z":-16,"t":2},{"x":-3,"y":1,"z":-16,"t":2},{"x":-4,"y":1,"z":-16,"t":2},{"x":-7,"y":1,"z":-13,"t":2},{"x":-7,"y":1,"z":-12,"t":2},{"x":-7,"y":1,"z":-11,"t":2},{"x":-7,"y":1,"z":-10,"t":2},{"x":-7,"y":1,"z":-9,"t":2},{"x":-7,"y":1,"z":-8,"t":2},{"x":-7,"y":1,"z":-7,"t":2},{"x":-7,"y":1,"z":-6,"t":2},{"x":-7,"y":1,"z":-5,"t":2},{"x":-7,"y":1,"z":-4,"t":2},{"x":-7,"y":1,"z":-3,"t":2},{"x":-7,"y":1,"z":-2,"t":2},{"x":-7,"y":1,"z":-1,"t":2},{"x":-7,"y":1,"z":0,"t":2},{"x":-7,"y":1,"z":1,"t":2},{"x":-7,"y":1,"z":2,"t":2},{"x":-7,"y":1,"z":3,"t":2},{"x":-7,"y":1,"z":4,"t":2},{"x":-4,"y":1,"z":7,"t":2},{"x":-3,"y":1,"z":7,"t":2},{"x":-2,"y":1,"z":7,"t":2},{"x":3,"y":1,"z":7,"t":2},{"x":4,"y":1,"z":7,"t":2},{"x":5,"y":1,"z":7,"t":2},{"x":7,"y":0,"z":3,"t":2},{"x":6,"y":0,"z":3,"t":1},{"x":5,"y":0,"z":3,"t":1},{"x":4,"y":0,"z":3,"t":1},{"x":3,"y":0,"z":3,"t":1},{"x":2,"y":0,"z":3,"t":1},{"x":1,"y":0,"z":3,"t":1},{"x":0,"y":0,"z":3,"t":1},{"x":-1,"y":0,"z":3,"t":1},{"x":-2,"y":0,"z":3,"t":1},{"x":-3,"y":0,"z":3,"t":1},{"x":-4,"y":0,"z":3,"t":1},{"x":-5,"y":0,"z":3,"t":1},{"x":6,"y":0,"z":2,"t":1},{"x":5,"y":0,"z":2,"t":1},{"x":4,"y":0,"z":2,"t":1},{"x":3,"y":0,"z":2,"t":1},{"x":2,"y":0,"z":2,"t":1},{"x":1,"y":0,"z":2,"t":1},{"x":0,"y":0,"z":2,"t":1},{"x":-1,"y":0,"z":2,"t":1},{"x":-2,"y":0,"z":2,"t":1},{"x":-3,"y":0,"z":2,"t":1},{"x":-4,"y":0,"z":2,"t":1},{"x":-5,"y":0,"z":2,"t":1},{"x":2,"y":1,"z":7,"t":0},{"x":1,"y":1,"z":7,"t":0},{"x":0,"y":1,"z":7,"t":0},{"x":-1,"y":1,"z":7,"t":0},{"x":6,"y":0,"z":-13,"t":1},{"x":6,"y":0,"z":-12,"t":1},{"x":5,"y":0,"z":-12,"t":1},{"x":5,"y":0,"z":-13,"t":1},{"x":4,"y":0,"z":-13,"t":1},{"x":4,"y":0,"z":-12,"t":1},{"x":3,"y":0,"z":-12,"t":1},{"x":3,"y":0,"z":-13,"t":1},{"x":2,"y":0,"z":-13,"t":1},{"x":2,"y":0,"z":-12,"t":1},{"x":1,"y":0,"z":-12,"t":1},{"x":1,"y":0,"z":-13,"t":1},{"x":0,"y":0,"z":-13,"t":1},{"x":0,"y":0,"z":-12,"t":1},{"x":-1,"y":0,"z":-12,"t":1},{"x":-1,"y":0,"z":-13,"t":1},{"x":-2,"y":0,"z":-13,"t":1},{"x":-2,"y":0,"z":-12,"t":1},{"x":-3,"y":0,"z":-12,"t":1},{"x":-3,"y":0,"z":-13,"t":1},{"x":-4,"y":0,"z":-13,"t":1},{"x":-4,"y":0,"z":-12,"t":1},{"x":7,"y":0,"z":-6,"t":5},{"x":7,"y":0,"z":-4,"t":5},{"x":6,"y":0,"z":-5,"t":5},{"x":5,"y":0,"z":-6,"t":5},{"x":5,"y":0,"z":-4,"t":5},{"x":6,"y":0,"z":-7,"t":5},{"x":6,"y":0,"z":-3,"t":5},{"x":7,"y":0,"z":-5,"t":8},{"x":6,"y":0,"z":-6,"t":8},{"x":6,"y":0,"z":-4,"t":8},{"x":5,"y":0,"z":-5,"t":8},{"x":-5,"y":0,"z":-4,"t":8},{"x":-5,"y":0,"z":-6,"t":8},{"x":-4,"y":0,"z":-5,"t":8},{"x":-6,"y":0,"z":-5,"t":8},{"x":-5,"y":0,"z":-3,"t":5},{"x":-6,"y":0,"z":-4,"t":5},{"x":-5,"y":0,"z":-5,"t":5},{"x":-4,"y":0,"z":-4,"t":5},{"x":-4,"y":0,"z":-6,"t":5},{"x":-5,"y":0,"z":-7,"t":5},{"x":-6,"y":0,"z":-6,"t":5},{"x":8,"y":0,"z":5,"t":3},{"x":8,"y":0,"z":6,"t":3},{"x":8,"y":0,"z":7,"t":3},{"x":7,"y":0,"z":7,"t":3},{"x":6,"y":0,"z":7,"t":3},{"x":6,"y":1,"z":7,"t":3},{"x":7,"y":1,"z":7,"t":3},{"x":8,"y":1,"z":7,"t":3},{"x":8,"y":1,"z":6,"t":3},{"x":8,"y":1,"z":5,"t":3},{"x":6,"y":-1,"z":5,"t":0},{"x":7,"y":-1,"z":5,"t":0},{"x":7,"y":-1,"z":6,"t":0},{"x":6,"y":-1,"z":6,"t":0},{"x":-6,"y":-1,"z":5,"t":0},{"x":-5,"y":-1,"z":5,"t":0},{"x":-5,"y":-1,"z":6,"t":0},{"x":-6,"y":-1,"z":6,"t":0},{"x":-7,"y":0,"z":5,"t":3},{"x":-7,"y":1,"z":5,"t":3},{"x":-7,"y":0,"z":6,"t":3},{"x":-7,"y":1,"z":6,"t":3},{"x":-7,"y":0,"z":7,"t":3},{"x":-7,"y":1,"z":7,"t":3},{"x":-5,"y":0,"z":7,"t":3},{"x":-5,"y":1,"z":7,"t":3},{"x":-6,"y":0,"z":7,"t":3},{"x":-6,"y":1,"z":7,"t":3},{"x":6,"y":-1,"z":-15,"t":0},{"x":7,"y":-1,"z":-15,"t":0},{"x":7,"y":-1,"z":-14,"t":0},{"x":6,"y":-1,"z":-14,"t":0},{"x":6,"y":0,"z":-16,"t":3},{"x":6,"y":1,"z":-16,"t":3},{"x":7,"y":0,"z":-16,"t":3},{"x":7,"y":1,"z":-16,"t":3},{"x":8,"y":0,"z":-16,"t":3},{"x":8,"y":1,"z":-16,"t":3},{"x":8,"y":0,"z":-15,"t":3},{"x":8,"y":1,"z":-15,"t":3},{"x":8,"y":0,"z":-14,"t":3},{"x":8,"y":1,"z":-14,"t":3},{"x":-6,"y":-1,"z":-14,"t":0},{"x":-6,"y":-1,"z":-15,"t":0},{"x":-5,"y":-1,"z":-15,"t":0},{"x":-5,"y":-1,"z":-14,"t":0},{"x":-5,"y":0,"z":-16,"t":3},{"x":-6,"y":0,"z":-16,"t":3},{"x":-7,"y":0,"z":-16,"t":3},{"x":-6,"y":1,"z":-16,"t":3},{"x":-5,"y":1,"z":-16,"t":3},{"x":-7,"y":1,"z":-16,"t":3},{"x":-7,"y":0,"z":-15,"t":3},{"x":-7,"y":1,"z":-15,"t":3},{"x":-7,"y":0,"z":-14,"t":3},{"x":-7,"y":1,"z":-14,"t":3},{"x":2,"y":1,"z":-16,"t":2},{"x":1,"y":1,"z":-16,"t":2},{"x":0,"y":1,"z":-16,"t":2},{"x":-1,"y":1,"z":-16,"t":2}];

	//this._buildMapVoxelNaive();
	this._buildMapVoxelMerged();
	//this._buildMapFlat();

if( true ){
	// add gravity in microphysics
	microphysics.world().add(new vphy.LinearAccelerator({
		x	: 0, 
		y	: -9.8  * Marble.tileSize,
		z	: 0
	}));
}
if( true ){
	// outter cube - testin microphysics.js
	var geometry	= new THREE.CubeGeometry( 5*Marble.tileSize, Marble.tileSize, 5*Marble.tileSize, 5, 5, 5);
	//var material	= [new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } ),new THREE.MeshNormalMaterial()];
	var material	= [new THREE.MeshBasicMaterial( { color: 0xffaa00, wireframe: true } )];
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.position.y	= -Marble.tileSize/2;
	scene.addChild(mesh);
	microphysics.addMesh(mesh, { restitution: 1 });
}
}


/**
 * Build the map according to this.
*/
Marble.Map.prototype._buildMapVoxelMerged	= function()
{
	var geometry	= new THREE.Geometry();
	this._voxels	= [];
	this._mapVoxels.forEach(function(mapVoxel){
		var voxel	= new Marble.Voxel({
			type	: mapVoxel.t
		});
		var mesh	= voxel.mesh();
		mesh.position.x	= mapVoxel.x * Marble.tileSize;
		mesh.position.y	= mapVoxel.y * Marble.tileSize;
		mesh.position.z	= mapVoxel.z * Marble.tileSize;
		mesh.position.y	-= Marble.tileSize/2;
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
 * Build the map according to this._mapVoxels
*/
Marble.Map.prototype._buildMapVoxelNaive	= function()
{
	this._mesh	= new THREE.Object3D();
	this._voxels	= [];	
	this._mapVoxels.forEach(function(mapVoxel){
		var voxel	= new Marble.Voxel({
			type	: mapVoxel.t
		});
		var mesh	= voxel.mesh();
		mesh.position.x	= mapVoxel.x * Marble.tileSize;
		mesh.position.y	= mapVoxel.y * Marble.tileSize;
		mesh.position.z	= mapVoxel.z * Marble.tileSize;
		mesh.position.y	-= Marble.tileSize/2;
		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();

		this._voxels.push( voxel );
		this._mesh.addChild( voxel.mesh() );
		
	}.bind(this))
	this._mesh.matrixAutoUpdate = false;
	this._mesh.updateMatrix();
}

/**
 * Build the map according to this.
*/
Marble.Map.prototype._buildMapVoxel	= function()
{
	this._mesh	= new THREE.Object3D();
	this._voxels	= [];	
	this._mapVoxels.forEach(function(mapVoxel){
		var voxel	= new Marble.Voxel({
			type	: mapVoxel.t
		});
		var mesh	= voxel.mesh();
		mesh.position.x	= mapVoxel.x * Marble.tileSize;
		mesh.position.y	= mapVoxel.y * Marble.tileSize;
		mesh.position.z	= mapVoxel.z * Marble.tileSize;
		mesh.position.y	-= Marble.tileSize/2;
		mesh.matrixAutoUpdate = false;
		mesh.updateMatrix();

		this._voxels.push( voxel );
		this._mesh.addChild( voxel.mesh() );
		
	}.bind(this))
	this._mesh.matrixAutoUpdate = false;
	this._mesh.updateMatrix();
}

/**
 * hardcoded but super fast map
 * - temporary
*/
Marble.Map.prototype._buildMapFlat	= function()
{
	var tileSize	= Marble.tileSize;
	var planeW	= 16;
	var planeH	= 20;
	var geometry	= new THREE.PlaneGeometry(planeW*tileSize, planeH*tileSize);
	var texture	= THREE.ImageUtils.loadTexture("images/UV.jpg");
	var texture	= THREE.ImageUtils.loadTexture("images/square-outline-textured.png");
	texture.wrapS	= THREE.RepeatWrapping;
	texture.wrapT	= THREE.RepeatWrapping;
	texture.repeat.set(planeW, planeH);
	var material	= new THREE.MeshLambertMaterial( { color: 0x44AAAA, map: texture } );
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.rotation.x	= -90 * Math.PI/180;
	this._mesh.addChild(mesh);

	// right border
	var texture	= THREE.ImageUtils.loadTexture("images/square-outline-textured.png");
	texture.wrapS	= THREE.RepeatWrapping;
	texture.wrapT	= THREE.RepeatWrapping;
	texture.repeat.set(1, planeH);
	var material	= new THREE.MeshLambertMaterial( { color: 0xAA44AA, map: texture } );
	var geometry	= new THREE.CubeGeometry( tileSize, tileSize, planeH * tileSize );
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.position.x	= planeW/2 * tileSize - tileSize/2;
	mesh.position.y	= tileSize/2;
	this._mesh.addChild(mesh);

	// left border
	var texture	= THREE.ImageUtils.loadTexture("images/square-outline-textured.png");
	texture.wrapS	= THREE.RepeatWrapping;
	texture.wrapT	= THREE.RepeatWrapping;
	texture.repeat.set(1, planeH);
	var material	= new THREE.MeshLambertMaterial( { color: 0xAA44AA, map: texture } );
	var geometry	= new THREE.CubeGeometry( tileSize, tileSize, planeH * tileSize );
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.position.x	= - (planeW/2 * tileSize - tileSize/2);
	mesh.position.y	= tileSize/2;
	this._mesh.addChild(mesh);

	// back border
	var texture	= THREE.ImageUtils.loadTexture("images/square-outline-textured.png");
	texture.wrapS	= THREE.RepeatWrapping;
	texture.wrapT	= THREE.RepeatWrapping;
	texture.repeat.set(planeW, 1);
	var material	= new THREE.MeshLambertMaterial( { color: 0xAA44AA, map: texture } );
	var geometry	= new THREE.CubeGeometry( (planeW-2) * tileSize, tileSize, tileSize );
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.position.z	= - (planeH/2 * tileSize - tileSize/2);
	mesh.position.y	= tileSize/2;
	this._mesh.addChild(mesh);

	// front border
	var texture	= THREE.ImageUtils.loadTexture("images/square-outline-textured.png");
	texture.wrapS	= THREE.RepeatWrapping;
	texture.wrapT	= THREE.RepeatWrapping;
	texture.repeat.set(planeW, 1); 
	var material	= new THREE.MeshLambertMaterial( { color: 0xAA44AA, map: texture } );
	var geometry	= new THREE.CubeGeometry( (planeW-2) * tileSize, tileSize, tileSize );
	var mesh	= new THREE.Mesh(geometry, material);
	mesh.position.z	= + (planeH/2 * tileSize - tileSize/2);
	mesh.position.y	= tileSize/2;
	this._mesh.addChild(mesh);
}

Marble.Map.prototype.mesh	= function()
{
	return this._mesh;
}


Marble.Map.prototype.tick	= function()
{
	// do nothing
}