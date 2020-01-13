// This file isnt transpiled, so must use CommonJS and ES5

// Register babel ti transpile before our tests run
require('babel-register')();


// Disable webpack feature that Mocha doesm't understand
require.extensions['.css'] = function () { };
