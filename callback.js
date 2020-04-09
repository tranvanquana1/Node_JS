//đồng bộ trong nodejs
/*
var fs = require('fs');

var data = fs.readFileSync('text.txt');

console.log(data.toString());

console.log('complete read file')
*/
//Bất đồng bộ trong nodejs
var fs = require('fs');

var data = fs.readFile('text.txt', function(err, data){
    if (err) throw err;
    console.log(data.toString());
});

console.log('complete read file');