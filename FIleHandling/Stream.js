const fs = require('fs');
const stream = fs.createReadStream('large.txt', 'utf8');
stream.on('data', chunk => {
    console.log(chunk);
});