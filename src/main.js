const lib = require('./lib');

// No issue when using native imports
//import * as lib from './lib';

console.log(`Computing... 1 + 2 = ${lib.add(1, 2)}`);

