const fs = require('fs');
fs.rename('sample.txt', './demotesting/sample.txt', (err) => {
    if (err) console.log(err);
});