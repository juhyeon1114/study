var fs = require('fs');

/* 
sync 
result = a b c
*/
// console.log('a');
// var result = fs.readFileSync('syntax/sample.txt','utf8');
// console.log(result);
// console.log('c');

/*
async
result = a c b
*/
console.log('a');
fs.readFile('syntax/sample.txt','utf8', function(err, result){
    console.log(result);
});
console.log('c');