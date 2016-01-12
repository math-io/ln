'use strict';

var ln = require( './../lib' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.round( Math.random() * 100 );
	console.log( ln( x ) );
}
