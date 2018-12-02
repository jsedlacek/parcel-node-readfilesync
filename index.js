const fs = require('fs');
const assert = require('assert');
const test = fs.readFileSync(__dirname + '/test.txt', 'utf8');
assert.equal(test, 'hello');
