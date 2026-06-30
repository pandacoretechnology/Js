const fs = require('fs');
fs.copyFile('sample.txt', 'backup.txt', (err) => {
    if (err) console.log(err);
});