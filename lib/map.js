Marble.Map	= function()
{
	// small dev map
	this._mapVoxels	= [{"x":-3,"y":0,"z":-2,"t":0},{"x":-2,"y":0,"z":-2,"t":0},{"x":-1,"y":0,"z":-3,"t":1},{"x":-1,"y":0,"z":-2,"t":1},{"x":0,"y":0,"z":-2,"t":1},{"x":1,"y":0,"z":-2,"t":1},{"x":-1,"y":0,"z":-1,"t":3},{"x":-1,"y":0,"z":0,"t":3},{"x":-1,"y":0,"z":1,"t":3},{"x":-1,"y":1,"z":0,"t":9},{"x":1,"y":1,"z":-2,"t":9},{"x":0,"y":0,"z":-1,"t":9},{"x":0,"y":0,"z":0,"t":5}];
	//this._mapVoxels	= [{"x":0,"y":0,"z":0,"t":0}, {"x":-1,"y":0,"z":1,"t":0}];
	// big map - anne
	this._mapVoxels	= [{"x":8,"y":0,"z":3,"t":2},{"x":8,"y":0,"z":2,"t":2},{"x":8,"y":0,"z":1,"t":2},{"x":8,"y":0,"z":0,"t":2},{"x":8,"y":0,"z":-1,"t":2},{"x":8,"y":0,"z":-2,"t":2},{"x":8,"y":0,"z":-4,"t":2},{"x":8,"y":0,"z":-3,"t":2},{"x":8,"y":0,"z":-5,"t":2},{"x":8,"y":0,"z":-6,"t":2},{"x":8,"y":0,"z":-7,"t":2},{"x":8,"y":0,"z":-8,"t":2},{"x":8,"y":0,"z":-9,"t":2},{"x":8,"y":0,"z":-10,"t":2},{"x":8,"y":0,"z":-11,"t":2},{"x":8,"y":0,"z":-12,"t":2},{"x":8,"y":0,"z":-13,"t":2},{"x":-4,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":3,"t":2},{"x":-6,"y":0,"z":2,"t":2},{"x":-5,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":1,"t":2},{"x":-6,"y":0,"z":0,"t":2},{"x":-6,"y":0,"z":-1,"t":2},{"x":-6,"y":0,"z":-2,"t":2},{"x":-6,"y":0,"z":-3,"t":2},{"x":-6,"y":0,"z":-7,"t":2},{"x":-6,"y":0,"z":-8,"t":2},{"x":-6,"y":0,"z":-9,"t":2},{"x":-6,"y":0,"z":-10,"t":2},{"x":-6,"y":0,"z":-11,"t":2},{"x":-6,"y":0,"z":-12,"t":2},{"x":5,"y":0,"z":-16,"t":2},{"x":4,"y":0,"z":-16,"t":2},{"x":3,"y":0,"z":-16,"t":2},{"x":2,"y":0,"z":-16,"t":2},{"x":1,"y":0,"z":-16,"t":2},{"x":0,"y":0,"z":-16,"t":2},{"x":-1,"y":0,"z":-16,"t":2},{"x":-2,"y":0,"z":-16,"t":2},{"x":-3,"y":0,"z":-16,"t":2},{"x":-4,"y":0,"z":-16,"t":2},{"x":-6,"y":0,"z":-13,"t":2},{"x":7,"y":0,"z":2,"t":2},{"x":7,"y":0,"z":1,"t":2},{"x":5,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":0,"t":2},{"x":6,"y":0,"z":1,"t":2},{"x":5,"y":0,"z":0,"t":2},{"x":4,"y":0,"z":1,"t":2},{"x":3,"y":0,"z":0,"t":2},{"x":2,"y":0,"z":1,"t":2},{"x":0,"y":0,"z":1,"t":2},{"x":0,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":1,"t":2},{"x":-2,"y":0,"z":1,"t":2},{"x":-3,"y":0,"z":1,"t":2},{"x":-4,"y":0,"z":0,"t":2},{"x":-5,"y":0,"z":0,"t":2},{"x":-4,"y":0,"z":-1,"t":2},{"x":-3,"y":0,"z":0,"t":2},{"x":-3,"y":0,"z":-1,"t":2},{"x":-2,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":0,"t":2},{"x":-1,"y":0,"z":-1,"t":2},{"x":2,"y":0,"z":0,"t":2},{"x":1,"y":0,"z":-1,"t":2},{"x":0,"y":0,"z":-1,"t":2},{"x":2,"y":0,"z":-1,"t":2},{"x":3,"y":0,"z":-1,"t":2},{"x":4,"y":0,"z":0,"t":2},{"x":4,"y":0,"z":-1,"t":2},{"x":5,"y":0,"z":-1,"t":2},{"x":6,"y":0,"z":0,"t":2},{"x":7,"y":0,"z":-1,"t":2},{"x":6,"y":0,"z":-1,"t":2},{"x":5,"y":0,"z":-2,"t":2},{"x":4,"y":0,"z":-2,"t":2},{"x":4,"y":0,"z":-3,"t":2},{"x":6,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":-2,"t":2},{"x":7,"y":0,"z":-3,"t":2},{"x":5,"y":0,"z":-3,"t":2},{"x":3,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-2,"t":2},{"x":-1,"y":0,"z":-2,"t":2},{"x":-2,"y":0,"z":-1,"t":2},{"x":-4,"y":0,"z":-3,"t":2},{"x":-5,"y":0,"z":-2,"t":2},{"x":1,"y":0,"z":1,"t":2},{"x":1,"y":0,"z":0,"t":2},{"x":1,"y":0,"z":-2,"t":2},{"x":0,"y":0,"z":-2,"t":2},{"x":-2,"y":0,"z":-2,"t":2},{"x":-3,"y":0,"z":-2,"t":2},{"x":-4,"y":0,"z":-2,"t":2},{"x":-5,"y":0,"z":-1,"t":2},{"x":-3,"y":0,"z":-3,"t":2},{"x":-2,"y":0,"z":-3,"t":2},{"x":-1,"y":0,"z":-3,"t":2},{"x":0,"y":0,"z":-3,"t":2},{"x":1,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-3,"t":2},{"x":2,"y":0,"z":-4,"t":2},{"x":1,"y":0,"z":-4,"t":2},{"x":0,"y":0,"z":-4,"t":2},{"x":-1,"y":0,"z":-4,"t":2},{"x":-2,"y":0,"z":-4,"t":2},{"x":-3,"y":0,"z":-4,"t":2},{"x":-3,"y":0,"z":-5,"t":2},{"x":-2,"y":0,"z":-5,"t":2},{"x":0,"y":0,"z":-5,"t":2},{"x":2,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-5,"t":2},{"x":1,"y":0,"z":-5,"t":2},{"x":2,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-4,"t":2},{"x":3,"y":0,"z":-4,"t":2},{"x":3,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-5,"t":2},{"x":4,"y":0,"z":-6,"t":2},{"x":3,"y":0,"z":-6,"t":2},{"x":4,"y":0,"z":-7,"t":2},{"x":1,"y":0,"z":-7,"t":2},{"x":1,"y":0,"z":-6,"t":2},{"x":0,"y":0,"z":-6,"t":2},{"x":-3,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-6,"t":2},{"x":-1,"y":0,"z":-7,"t":2},{"x":-2,"y":0,"z":-6,"t":2},{"x":-2,"y":0,"z":-7,"t":2},{"x":-3,"y":0,"z":-7,"t":2},{"x":-4,"y":0,"z":-7,"t":2},{"x":0,"y":0,"z":-7,"t":2},{"x":2,"y":0,"z":-7,"t":2},{"x":3,"y":0,"z":-7,"t":2},{"x":5,"y":0,"z":-7,"t":2},{"x":6,"y":0,"z":-8,"t":2},{"x":7,"y":0,"z":-7,"t":2},{"x":7,"y":0,"z":-8,"t":2},{"x":5,"y":0,"z":-8,"t":2},{"x":4,"y":0,"z":-8,"t":2},{"x":3,"y":0,"z":-8,"t":2},{"x":2,"y":0,"z":-8,"t":2},{"x":1,"y":0,"z":-8,"t":2},{"x":1,"y":0,"z":-9,"t":2},{"x":0,"y":0,"z":-8,"t":2},{"x":-1,"y":0,"z":-8,"t":2},{"x":-2,"y":0,"z":-8,"t":2},{"x":-3,"y":0,"z":-8,"t":2},{"x":-4,"y":0,"z":-8,"t":2},{"x":-5,"y":0,"z":-8,"t":2},{"x":-5,"y":0,"z":-9,"t":2},{"x":-4,"y":0,"z":-9,"t":2},{"x":-3,"y":0,"z":-9,"t":2},{"x":-2,"y":0,"z":-9,"t":2},{"x":-1,"y":0,"z":-9,"t":2},{"x":0,"y":0,"z":-9,"t":2},{"x":2,"y":0,"z":-9,"t":2},{"x":3,"y":0,"z":-9,"t":2},{"x":4,"y":0,"z":-9,"t":2},{"x":5,"y":0,"z":-9,"t":2},{"x":6,"y":0,"z":-9,"t":2},{"x":7,"y":0,"z":-9,"t":2},{"x":7,"y":0,"z":-10,"t":2},{"x":6,"y":0,"z":-10,"t":2},{"x":5,"y":0,"z":-10,"t":2},{"x":4,"y":0,"z":-10,"t":2},{"x":4,"y":0,"z":-11,"t":2},{"x":2,"y":0,"z":-10,"t":2},{"x":2,"y":0,"z":-11,"t":2},{"x":3,"y":0,"z":-10,"t":2},{"x":3,"y":0,"z":-11,"t":2},{"x":5,"y":0,"z":-11,"t":2},{"x":6,"y":0,"z":-11,"t":2},{"x":7,"y":0,"z":-11,"t":2},{"x":7,"y":0,"z":-12,"t":2},{"x":7,"y":0,"z":-13,"t":2},{"x":5,"y":0,"z":-14,"t":2},{"x":4,"y":0,"z":-14,"t":2},{"x":-5,"y":0,"z":-11,"t":2},{"x":-5,"y":0,"z":-12,"t":2},{"x":-4,"y":0,"z":-10,"t":2},{"x":-4,"y":0,"z":-11,"t":2},{"x":-3,"y":0,"z":-10,"t":2},{"x":-2,"y":0,"z":-10,"t":2},{"x":-2,"y":0,"z":-11,"t":2},{"x":-1,"y":0,"z":-10,"t":2},{"x":1,"y":0,"z":-10,"t":2},{"x":1,"y":0,"z":-11,"t":2},{"x":0,"y":0,"z":-10,"t":2},{"x":-5,"y":0,"z":-13,"t":2},{"x":-4,"y":0,"z":-14,"t":2},{"x":-3,"y":0,"z":-14,"t":2},{"x":-1,"y":0,"z":-14,"t":2},{"x":-2,"y":0,"z":-14,"t":2},{"x":-1,"y":0,"z":-15,"t":2},{"x":0,"y":0,"z":-14,"t":2},{"x":1,"y":0,"z":-14,"t":2},{"x":2,"y":0,"z":-14,"t":2},{"x":3,"y":0,"z":-14,"t":2},{"x":-4,"y":0,"z":-15,"t":2},{"x":-2,"y":0,"z":-15,"t":2},{"x":-3,"y":0,"z":-15,"t":2},{"x":-5,"y":0,"z":-10,"t":2},{"x":-3,"y":0,"z":-11,"t":2},{"x":0,"y":0,"z":-11,"t":2},{"x":-1,"y":0,"z":-11,"t":2},{"x":5,"y":0,"z":-15,"t":2},{"x":4,"y":0,"z":-15,"t":2},{"x":3,"y":0,"z":-15,"t":2},{"x":2,"y":0,"z":-15,"t":2},{"x":1,"y":0,"z":-15,"t":2},{"x":0,"y":0,"z":-15,"t":2},{"x":-6,"y":0,"z":4,"t":2},{"x":-7,"y":0,"z":4,"t":2},{"x":-4,"y":0,"z":4,"t":2},{"x":-5,"y":0,"z":4,"t":2},{"x":-3,"y":0,"z":4,"t":2},{"x":-3,"y":0,"z":5,"t":2},{"x":-2,"y":0,"z":4,"t":2},{"x":0,"y":0,"z":4,"t":2},{"x":-1,"y":0,"z":4,"t":2},{"x":2,"y":0,"z":4,"t":2},{"x":0,"y":0,"z":5,"t":2},{"x":1,"y":0,"z":4,"t":2},{"x":8,"y":0,"z":4,"t":2},{"x":7,"y":0,"z":4,"t":2},{"x":6,"y":0,"z":4,"t":2},{"x":5,"y":0,"z":4,"t":2},{"x":4,"y":0,"z":4,"t":2},{"x":3,"y":0,"z":4,"t":2},{"x":-1,"y":0,"z":5,"t":2},{"x":-2,"y":0,"z":5,"t":2},{"x":-4,"y":0,"z":5,"t":2},{"x":1,"y":0,"z":5,"t":2},{"x":2,"y":0,"z":5,"t":2},{"x":3,"y":0,"z":5,"t":2},{"x":4,"y":0,"z":5,"t":2},{"x":4,"y":0,"z":6,"t":2},{"x":5,"y":0,"z":5,"t":2},{"x":5,"y":0,"z":6,"t":2},{"x":3,"y":0,"z":6,"t":2},{"x":2,"y":0,"z":6,"t":2},{"x":1,"y":0,"z":6,"t":2},{"x":0,"y":0,"z":6,"t":2},{"x":-1,"y":0,"z":6,"t":2},{"x":-2,"y":0,"z":6,"t":2},{"x":-3,"y":0,"z":6,"t":2},{"x":-4,"y":0,"z":6,"t":2},{"x":-4,"y":0,"z":7,"t":2},{"x":-3,"y":0,"z":7,"t":2},{"x":-2,"y":0,"z":7,"t":2},{"x":-1,"y":0,"z":7,"t":2},{"x":0,"y":0,"z":7,"t":2},{"x":1,"y":0,"z":7,"t":2},{"x":2,"y":0,"z":7,"t":2},{"x":3,"y":0,"z":7,"t":2},{"x":4,"y":0,"z":7,"t":2},{"x":5,"y":0,"z":7,"t":2},{"x":-7,"y":0,"z":3,"t":2},{"x":-7,"y":0,"z":2,"t":2},{"x":-7,"y":0,"z":1,"t":2},{"x":-7,"y":0,"z":0,"t":2},{"x":-7,"y":0,"z":-1,"t":2},{"x":-7,"y":0,"z":-2,"t":2},{"x":-7,"y":0,"z":-3,"t":2},{"x":-7,"y":0,"z":-4,"t":2},{"x":-7,"y":0,"z":-5,"t":2},{"x":-7,"y":0,"z":-6,"t":2},{"x":-7,"y":0,"z":-7,"t":2},{"x":-7,"y":0,"z":-8,"t":2},{"x":-7,"y":0,"z":-9,"t":2},{"x":-7,"y":0,"z":-10,"t":2},{"x":-7,"y":0,"z":-11,"t":2},{"x":-7,"y":0,"z":-12,"t":2},{"x":-7,"y":0,"z":-13,"t":2},{"x":8,"y":1,"z":4,"t":2},{"x":8,"y":1,"z":3,"t":2},{"x":8,"y":1,"z":2,"t":2},{"x":8,"y":1,"z":0,"t":2},{"x":8,"y":1,"z":1,"t":2},{"x":8,"y":1,"z":-1,"t":2},{"x":8,"y":1,"z":-2,"t":2},{"x":8,"y":1,"z":-3,"t":2},{"x":8,"y":1,"z":-4,"t":2},{"x":8,"y":1,"z":-5,"t":2},{"x":8,"y":1,"z":-6,"t":2},{"x":8,"y":1,"z":-8,"t":2},{"x":8,"y":1,"z":-7,"t":2},{"x":8,"y":1,"z":-9,"t":2},{"x":8,"y":1,"z":-10,"t":2},{"x":8,"y":1,"z":-11,"t":2},{"x":8,"y":1,"z":-12,"t":2},{"x":8,"y":1,"z":-13,"t":2},{"x":5,"y":1,"z":-16,"t":2},{"x":3,"y":1,"z":-16,"t":2},{"x":4,"y":1,"z":-16,"t":2},{"x":-2,"y":1,"z":-16,"t":2},{"x":-3,"y":1,"z":-16,"t":2},{"x":-4,"y":1,"z":-16,"t":2},{"x":-7,"y":1,"z":-13,"t":2},{"x":-7,"y":1,"z":-12,"t":2},{"x":-7,"y":1,"z":-11,"t":2},{"x":-7,"y":1,"z":-10,"t":2},{"x":-7,"y":1,"z":-9,"t":2},{"x":-7,"y":1,"z":-8,"t":2},{"x":-7,"y":1,"z":-7,"t":2},{"x":-7,"y":1,"z":-6,"t":2},{"x":-7,"y":1,"z":-5,"t":2},{"x":-7,"y":1,"z":-4,"t":2},{"x":-7,"y":1,"z":-3,"t":2},{"x":-7,"y":1,"z":-2,"t":2},{"x":-7,"y":1,"z":-1,"t":2},{"x":-7,"y":1,"z":0,"t":2},{"x":-7,"y":1,"z":1,"t":2},{"x":-7,"y":1,"z":2,"t":2},{"x":-7,"y":1,"z":3,"t":2},{"x":-7,"y":1,"z":4,"t":2},{"x":-4,"y":1,"z":7,"t":2},{"x":-3,"y":1,"z":7,"t":2},{"x":-2,"y":1,"z":7,"t":2},{"x":3,"y":1,"z":7,"t":2},{"x":4,"y":1,"z":7,"t":2},{"x":5,"y":1,"z":7,"t":2},{"x":7,"y":0,"z":3,"t":2},{"x":6,"y":0,"z":3,"t":1},{"x":5,"y":0,"z":3,"t":1},{"x":4,"y":0,"z":3,"t":1},{"x":3,"y":0,"z":3,"t":1},{"x":2,"y":0,"z":3,"t":1},{"x":1,"y":0,"z":3,"t":1},{"x":0,"y":0,"z":3,"t":1},{"x":-1,"y":0,"z":3,"t":1},{"x":-2,"y":0,"z":3,"t":1},{"x":-3,"y":0,"z":3,"t":1},{"x":-4,"y":0,"z":3,"t":1},{"x":-5,"y":0,"z":3,"t":1},{"x":6,"y":0,"z":2,"t":1},{"x":5,"y":0,"z":2,"t":1},{"x":4,"y":0,"z":2,"t":1},{"x":3,"y":0,"z":2,"t":1},{"x":2,"y":0,"z":2,"t":1},{"x":1,"y":0,"z":2,"t":1},{"x":0,"y":0,"z":2,"t":1},{"x":-1,"y":0,"z":2,"t":1},{"x":-2,"y":0,"z":2,"t":1},{"x":-3,"y":0,"z":2,"t":1},{"x":-4,"y":0,"z":2,"t":1},{"x":-5,"y":0,"z":2,"t":1},{"x":2,"y":1,"z":7,"t":0},{"x":1,"y":1,"z":7,"t":0},{"x":0,"y":1,"z":7,"t":0},{"x":-1,"y":1,"z":7,"t":0},{"x":6,"y":0,"z":-13,"t":1},{"x":6,"y":0,"z":-12,"t":1},{"x":5,"y":0,"z":-12,"t":1},{"x":5,"y":0,"z":-13,"t":1},{"x":4,"y":0,"z":-13,"t":1},{"x":4,"y":0,"z":-12,"t":1},{"x":3,"y":0,"z":-12,"t":1},{"x":3,"y":0,"z":-13,"t":1},{"x":2,"y":0,"z":-13,"t":1},{"x":2,"y":0,"z":-12,"t":1},{"x":1,"y":0,"z":-12,"t":1},{"x":1,"y":0,"z":-13,"t":1},{"x":0,"y":0,"z":-13,"t":1},{"x":0,"y":0,"z":-12,"t":1},{"x":-1,"y":0,"z":-12,"t":1},{"x":-1,"y":0,"z":-13,"t":1},{"x":-2,"y":0,"z":-13,"t":1},{"x":-2,"y":0,"z":-12,"t":1},{"x":-3,"y":0,"z":-12,"t":1},{"x":-3,"y":0,"z":-13,"t":1},{"x":-4,"y":0,"z":-13,"t":1},{"x":-4,"y":0,"z":-12,"t":1},{"x":7,"y":0,"z":-6,"t":5},{"x":7,"y":0,"z":-4,"t":5},{"x":6,"y":0,"z":-5,"t":5},{"x":5,"y":0,"z":-6,"t":5},{"x":5,"y":0,"z":-4,"t":5},{"x":6,"y":0,"z":-7,"t":5},{"x":6,"y":0,"z":-3,"t":5},{"x":7,"y":0,"z":-5,"t":8},{"x":6,"y":0,"z":-6,"t":8},{"x":6,"y":0,"z":-4,"t":8},{"x":5,"y":0,"z":-5,"t":8},{"x":-5,"y":0,"z":-4,"t":8},{"x":-5,"y":0,"z":-6,"t":8},{"x":-4,"y":0,"z":-5,"t":8},{"x":-6,"y":0,"z":-5,"t":8},{"x":-5,"y":0,"z":-3,"t":5},{"x":-6,"y":0,"z":-4,"t":5},{"x":-5,"y":0,"z":-5,"t":5},{"x":-4,"y":0,"z":-4,"t":5},{"x":-4,"y":0,"z":-6,"t":5},{"x":-5,"y":0,"z":-7,"t":5},{"x":-6,"y":0,"z":-6,"t":5},{"x":8,"y":0,"z":5,"t":3},{"x":8,"y":0,"z":6,"t":3},{"x":8,"y":0,"z":7,"t":3},{"x":7,"y":0,"z":7,"t":3},{"x":6,"y":0,"z":7,"t":3},{"x":6,"y":1,"z":7,"t":3},{"x":7,"y":1,"z":7,"t":3},{"x":8,"y":1,"z":7,"t":3},{"x":8,"y":1,"z":6,"t":3},{"x":8,"y":1,"z":5,"t":3},{"x":6,"y":-1,"z":5,"t":0},{"x":7,"y":-1,"z":5,"t":0},{"x":7,"y":-1,"z":6,"t":0},{"x":6,"y":-1,"z":6,"t":0},{"x":-6,"y":-1,"z":5,"t":0},{"x":-5,"y":-1,"z":5,"t":0},{"x":-5,"y":-1,"z":6,"t":0},{"x":-6,"y":-1,"z":6,"t":0},{"x":-7,"y":0,"z":5,"t":3},{"x":-7,"y":1,"z":5,"t":3},{"x":-7,"y":0,"z":6,"t":3},{"x":-7,"y":1,"z":6,"t":3},{"x":-7,"y":0,"z":7,"t":3},{"x":-7,"y":1,"z":7,"t":3},{"x":-5,"y":0,"z":7,"t":3},{"x":-5,"y":1,"z":7,"t":3},{"x":-6,"y":0,"z":7,"t":3},{"x":-6,"y":1,"z":7,"t":3},{"x":6,"y":-1,"z":-15,"t":0},{"x":7,"y":-1,"z":-15,"t":0},{"x":7,"y":-1,"z":-14,"t":0},{"x":6,"y":-1,"z":-14,"t":0},{"x":6,"y":0,"z":-16,"t":3},{"x":6,"y":1,"z":-16,"t":3},{"x":7,"y":0,"z":-16,"t":3},{"x":7,"y":1,"z":-16,"t":3},{"x":8,"y":0,"z":-16,"t":3},{"x":8,"y":1,"z":-16,"t":3},{"x":8,"y":0,"z":-15,"t":3},{"x":8,"y":1,"z":-15,"t":3},{"x":8,"y":0,"z":-14,"t":3},{"x":8,"y":1,"z":-14,"t":3},{"x":-6,"y":-1,"z":-14,"t":0},{"x":-6,"y":-1,"z":-15,"t":0},{"x":-5,"y":-1,"z":-15,"t":0},{"x":-5,"y":-1,"z":-14,"t":0},{"x":-5,"y":0,"z":-16,"t":3},{"x":-6,"y":0,"z":-16,"t":3},{"x":-7,"y":0,"z":-16,"t":3},{"x":-6,"y":1,"z":-16,"t":3},{"x":-5,"y":1,"z":-16,"t":3},{"x":-7,"y":1,"z":-16,"t":3},{"x":-7,"y":0,"z":-15,"t":3},{"x":-7,"y":1,"z":-15,"t":3},{"x":-7,"y":0,"z":-14,"t":3},{"x":-7,"y":1,"z":-14,"t":3},{"x":2,"y":1,"z":-16,"t":2},{"x":1,"y":1,"z":-16,"t":2},{"x":0,"y":1,"z":-16,"t":2},{"x":-1,"y":1,"z":-16,"t":2}];

	this._buildMapVoxel();
	//this._buildMapFlat();
	this._bindPhysics();
	
	this._computeBoundingBox();
	
	this._computeHeightMap();
}

Marble.Map.prototype._computeHeightMap	= function()
{
	var nbItems	= this._size.x * this._size.z;
	this._heightMap	= new Array(nbItems);

	// fill this._heightMap
	for(var i = 0; i < nbItems; i++ )	this._heightMap[i]	= undefined;

	// populate this._heightMap based on this._mapVoxels
	for(var i = 0; i < this._mapVoxels.length; i++ ){
		var voxel	= this._mapVoxels[i];
		var idx		= (voxel.x - this._min.x) + (voxel.z - this._min.z) * this._size.x;
		var curHeight	= this._heightMap[idx];
		if( curHeight < voxel.y || curHeight === undefined ){
			this._heightMap[idx]	= voxel.y;
		}
	};

	// display to debug
	console.log("heigh", this._heightMap);
}


Marble.Map.prototype._computeBoundingBox	= function()
{
	// compute this._min + this._max in voxel space
	this._min	= new THREE.Vector3(+Number.MAX_VALUE, +Number.MAX_VALUE, +Number.MAX_VALUE);
	this._max	= new THREE.Vector3(-Number.MAX_VALUE, -Number.MAX_VALUE, -Number.MAX_VALUE);
	this._mapVoxels.forEach(function(voxel){
		if( this._min.x > voxel.x )	this._min.x	= voxel.x; 
		if( this._max.x < voxel.x )	this._max.x	= voxel.x;
		if( this._min.y > voxel.y )	this._min.y	= voxel.y; 
		if( this._max.y < voxel.y )	this._max.y	= voxel.y; 
		if( this._min.z > voxel.z )	this._min.z	= voxel.z; 
		if( this._max.z < voxel.z )	this._max.z	= voxel.z; 
	}.bind(this));
	
	// compute this._size in voxel space
	this._size	= new THREE.Vector3();
	this._size.x	= Math.abs(this._max.x - this._min.x + 1);
	this._size.y	= Math.abs(this._max.y - this._min.y + 1);
	this._size.z	= Math.abs(this._max.z - this._min.z + 1);

	// display to debug
	console.log('map bbmin', this._min, "bbMax", this._max, "size", this._size);
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
		microphysics.addMesh(mesh, {
			physics	: {
				restitution	: 1
			}
		});
	}.bind(this));
}

/**
 * Build the map according to this._mapVoxels
*/
Marble.Map.prototype._buildMapVoxel	= function()
{
	var geometry	= new THREE.Geometry();
	this._voxels	= [];
	this._mapVoxels.forEach(function(mapVoxel){
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

/**
 * return the three.js object for the map
*/
Marble.Map.prototype.mesh	= function()
{
	return this._mesh;
}

/**
 * return true if there is a voxel at this coordinate, false otherwise
*/
Marble.Map.prototype.getHeight	= function(worldX, worldZ)
{
	var voxelX	= Math.floor((worldX + Marble.tileSize/2) / Marble.tileSize);
	var voxelZ	= Math.floor((worldZ + Marble.tileSize/2) / Marble.tileSize);
	
	if( voxelX < this._min.x || voxelX > this._max.x )	return undefined;
	if( voxelZ < this._min.z || voxelZ > this._max.z )	return undefined;

	var idx		= (voxelX - this._min.x) + (voxelZ - this._min.z) * this._size.x;
	var voxelHeight	= this._heightMap[idx];
	
	if( voxelHeight === undefined )	return undefined;
	
//console.log("height", voxelHeight, voxelX, voxelZ)
	return voxelHeight * Marble.tileSize;
}

Marble.Map.prototype.tick	= function()
{
	// do nothing
}