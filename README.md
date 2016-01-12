Natural Logarithm
===
[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes the [natural logarithm][natural-logarithm].


## Installation

``` bash
$ npm install math-ln
```


## Usage

``` javascript
var ln = require( 'math-ln' );
```

#### ln( x )

Computes the [natural logarithm][natural-logarithm].

``` javascript
var val = ln( 4 );
// returns ~1.386

val = ln( 0 );
// returns -infinity

val = ln( Number.POSITIVE_INFINITY );
// returns +infinity
```

For negative numbers, the [natural logarithm][natural-logarithm] is __not__ defined.

``` javascript
var val = ln( -4 );
// returns NaN
```


## Examples

``` javascript
var ln = require( 'math-ln' );

var x;
var i;

for ( i = 0; i < 100; i++ ) {
	x = Math.round( Math.random() * 100 );
	console.log( ln( x ) );
}
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


---
## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


### Browser Support

This repository uses [Testling][testling] for browser testing. To run the tests in a (headless) local web browser, execute the following command in the top-level application directory:

``` bash
$ make test-browsers
```

To view the tests in a local web browser,

``` bash
$ make view-browser-tests
```

<!-- [![browser support][browsers-image]][browsers-url] -->


---
## License

[MIT license](http://opensource.org/licenses/MIT).


## Copyright

Copyright &copy; 2016. The [Compute.io][compute-io] Authors.


[npm-image]: http://img.shields.io/npm/v/math-ln.svg
[npm-url]: https://npmjs.org/package/math-ln

[build-image]: http://img.shields.io/travis/math-io/ln/master.svg
[build-url]: https://travis-ci.org/math-io/ln

[coverage-image]: https://img.shields.io/codecov/c/github/math-io/ln/master.svg
[coverage-url]: https://codecov.io/github/math-io/ln?branch=master

[dependencies-image]: http://img.shields.io/david/math-io/ln.svg
[dependencies-url]: https://david-dm.org/math-io/ln

[dev-dependencies-image]: http://img.shields.io/david/dev/math-io/ln.svg
[dev-dependencies-url]: https://david-dm.org/dev/math-io/ln

[github-issues-image]: http://img.shields.io/github/issues/math-io/ln.svg
[github-issues-url]: https://github.com/math-io/ln/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul
[testling]: https://ci.testling.com

[compute-io]: https://github.com/compute-io/
[natural-logarithm]: https://en.wikipedia.org/wiki/Natural_logarithm
