const fs = require('fs');
fs.writeFile('sample.txt', 'Welcome to Node.js Second Line', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("File written successfully");
    }
});