const fs = require('fs');
// // For empty folders:
// fs.rmdir('demotesting', (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Folder Removed");
//     }
// });


fs.rm('demotesting', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    }
});