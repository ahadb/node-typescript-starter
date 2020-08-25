const assert = require('assert');

function add (a: number, b: number) {
    return a + b;
}

const expected = add(1,2);

assert.ok( expected === 3, 'one plus two is three');

// use buffer from as type for definitely typed here
const buf1 = Buffer.from("abc");
const buf2 = Buffer.from("abc");

assert.notEqual(buf1 === buf2);
