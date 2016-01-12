'use strict';

// MODULES //

var test = require( 'tape' );
var ln = require( './../lib' );


// TESTS //

test( 'main export is a function', function test( t ) {
	t.ok( typeof ln === 'function', 'main export is a function' );
	t.end();
});

test( 'the function computes the natural logarithm of a nonnegative number', function test( t ) {
	// Tested on Wolfram Alpha...
	t.equal( ln( 4 ), 1.3862943611198906188344642429163531361510002687205105, 'equals ~1.386' );
	t.equal( ln( 9 ), 2.1972245773362193827904904738450514092949811156454989, 'equals ~2.197' );
	t.end();
});

test( 'the function returns `-infinity` if provided `0`', function test( t ) {
	t.equal( ln( 0 ), Number.NEGATIVE_INFINITY, 'equals -infinity' );
	t.end();
});

test( 'the function returns `+infinity` if provided `+infinity`', function test( t ) {
	t.equal( ln( Number.POSITIVE_INFINITY ), Number.POSITIVE_INFINITY, 'equals +infinity' );
	t.end();
});

test( 'the function returns `NaN` if provide a negative number', function test( t ) {
	var val = ln( -1 );
	t.ok( val !== val, 'returns NaN' );
	t.end();
});
