const fs = require('fs');
fs.appendFile('sample.txt', '\nNew Line Added', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Data appended");
    }
});