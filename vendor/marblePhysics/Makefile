# simple makefile to avoid repeatitive tasks

server:
	python -m SimpleHTTPServer

BUILD_FNAME=build/marblephysics.js

build:
	echo > $(BUILD_FNAME)
	cat lib/core.js 		>> $(BUILD_FNAME)
	cat lib/Math/Vector3.js		>> $(BUILD_FNAME)
	cat lib/Math/matrix3.js		>> $(BUILD_FNAME)
	cat lib/Math/matrix4.js		>> $(BUILD_FNAME)
	cat lib/world.js lib/body.js	>> $(BUILD_FNAME)
	cat lib/collision*		>> $(BUILD_FNAME)
	cat lib/sphere.js lib/box.js	>> $(BUILD_FNAME)
	

.PHONY: build