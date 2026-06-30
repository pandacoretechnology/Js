// const fs = require('fs');
// const data = fs.readFileSync('Sample.txt', 'utf8');
// const data_t = fs.readFileSync('testing.txt', 'utf8');

// console.log(data);




// console.log(data_t);





const fs = require('fs');
fs.readFile('Sample.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

fs.readFile('testing.txt','utf8', (err,data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
})