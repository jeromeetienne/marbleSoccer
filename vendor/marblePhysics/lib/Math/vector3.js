// directly ported from https://github.com/mrdoob/MarblePhysics.js/blob/master/src/core/Vector3.js
// @author jerometienne http://jetienne.com
// - just changed the namespace


/**
 * @author mr.doob / http://mrdoob.com/
 * @author kile / http://kile.stravaganza.org/
 * @author philogb / http://blog.thejit.org/
 * @author mikael emtinger / http://gomo.se/
 * @author egraether / http://egraether.com/
 */

MarblePhysics.Vector3 = function ( x, y, z ) {

	this.x = x || 0;
	this.y = y || 0;
	this.z = z || 0;

};


MarblePhysics.Vector3.prototype = {

	constructor: MarblePhysics.Vector3,

	// from http://en.wikipedia.org/wiki/Dot_product
	angleWith : function(v) {	// TODO add it in three.js via pull request

		// angle = atan2(norm(cross(a,b)),dot(a,b));
		//return Math.atan2( new MarblePhysics.Vector3().cross(this, v).length(), this.dot(v) );

		return Math.acos( this.dot(v) / (this.length() * v.length()) );

	},
	
	// from http://en.wikipedia.org/wiki/Scalar_resolute
	scalarProjectionOn : function(v) {
		
		return this.dot(v.clone().normalize());

	},
	
	reflectionSymmmetryWith	: function(axis){

		// Algo: how to get reflectionSymmetry
		// 1. get the opposite of current speed
		var invSpeed	= this.clone().negate();
		// 2. project this opposite speed on the axisUnit, call it centerPoint
		// - scalar projection id the key here
		var axisUnit	= axis.clone().normalize();
		var scalarProj	= invSpeed.scalarProjectionOn(axisUnit);
		var centerPoint	= axisUnit.clone().multiplyScalar(scalarProj);
		// 3. use centerPoint as symmetry point to get the result
		var iSpeed2Cent	= centerPoint.sub(centerPoint, invSpeed);
		var symPoint	= invSpeed.clone().addSelf( iSpeed2Cent ).addSelf( iSpeed2Cent );

//console.log("speed.scalarProjectionTo(normal)", scalarProj);
//console.log("centerPoint", JSON.stringify(centerPoint));
//console.log("symPoint", JSON.stringify(symPoint));

		return this.copy(symPoint);
	},

	set: function ( x, y, z ) {

		this.x = x;
		this.y = y;
		this.z = z;

		return this;

	},

	copy: function ( v ) {

		this.x = v.x;
		this.y = v.y;
		this.z = v.z;

		return this;

	},

	clone: function () {

		return new MarblePhysics.Vector3( this.x, this.y, this.z );

	},


	add: function ( v1, v2 ) {

		this.x = v1.x + v2.x;
		this.y = v1.y + v2.y;
		this.z = v1.z + v2.z;

		return this;

	},

	addSelf: function ( v ) {

		this.x += v.x;
		this.y += v.y;
		this.z += v.z;

		return this;

	},

	addScalar: function ( s ) {

		this.x += s;
		this.y += s;
		this.z += s;

		return this;

	},

	sub: function ( v1, v2 ) {

		this.x = v1.x - v2.x;
		this.y = v1.y - v2.y;
		this.z = v1.z - v2.z;

		return this;

	},

	subSelf: function ( v ) {

		this.x -= v.x;
		this.y -= v.y;
		this.z -= v.z;

		return this;

	},

	multiply: function ( a, b ) {

		this.x = a.x * b.x;
		this.y = a.y * b.y;
		this.z = a.z * b.z;

		return this;

	},

	multiplySelf: function ( v ) {

		this.x *= v.x;
		this.y *= v.y;
		this.z *= v.z;

		return this;

	},

	multiplyScalar: function ( s ) {

		this.x *= s;
		this.y *= s;
		this.z *= s;

		return this;

	},

	divideSelf: function ( v ) {

		this.x /= v.x;
		this.y /= v.y;
		this.z /= v.z;

		return this;

	},

	divideScalar: function ( s ) {

		if ( s ) {

			this.x /= s;
			this.y /= s;
			this.z /= s;

		} else {

			this.set( 0, 0, 0 );

		}

		return this;

	},


	negate: function() {

		return this.multiplyScalar( -1 );

	},

	dot: function ( v ) {

		return this.x * v.x + this.y * v.y + this.z * v.z;

	},

	lengthSq: function () {

		return this.x * this.x + this.y * this.y + this.z * this.z;

	},

	length: function () {

		return Math.sqrt( this.lengthSq() );

	},

	lengthManhattan: function () {

		// correct version
		// return Math.abs( this.x ) + Math.abs( this.y ) + Math.abs( this.z );

		return this.x + this.y + this.z;

	},

	normalize: function () {

		return this.divideScalar( this.length() );

	},

	setLength: function ( l ) {

		return this.normalize().multiplyScalar( l );

	},


	cross: function ( a, b ) {

		this.x = a.y * b.z - a.z * b.y;
		this.y = a.z * b.x - a.x * b.z;
		this.z = a.x * b.y - a.y * b.x;

		return this;

	},

	crossSelf: function ( v ) {

		return this.set(

			this.y * v.z - this.z * v.y,
			this.z * v.x - this.x * v.z,
			this.x * v.y - this.y * v.x

		);

	},


	distanceTo: function ( v ) {

		return Math.sqrt( this.distanceToSquared( v ) );

	},

	distanceToSquared: function ( v ) {

		return new MarblePhysics.Vector3().sub( this, v ).lengthSq();

	},


	setPositionFromMatrix: function ( m ) {

		this.x = m.n14;
		this.y = m.n24;
		this.z = m.n34;

	},

	setRotationFromMatrix: function ( m ) {

		var cosY = Math.cos( this.y );

		this.y = Math.asin( m.n13 );

		if ( Math.abs( cosY ) > 0.00001 ) {

			this.x = Math.atan2( - m.n23 / cosY, m.n33 / cosY );
			this.z = Math.atan2( - m.n12 / cosY, m.n11 / cosY );

		} else {

			this.x = 0;
			this.z = Math.atan2( m.n21, m.n22 );

		}

	},

	isZero: function () {

		return ( this.lengthSq() < 0.0001 /* almostZero */ );

	}

};