const fs = require('fs');
const zlib = require('zlib');


let input = fs.createReadStream('./test.txt');
let output = fs.createWriteStream('./out.txt.zip');

let comp = input.pipe(zlib.createGzip());
comp.pipe(output);
comp.pipe(zlib.createGunzip()).pipe(input);