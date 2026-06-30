const fs = require('fs');
fs.readdir('./', (err, files) => {
    console.log(files); // ['index.js', 'sample.txt', 'package.json']
});