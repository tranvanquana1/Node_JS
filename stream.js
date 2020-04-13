var fs = require('fs');

var zlib = require('zlib');
data = '';

//tao mot readable stream
var readerStream = fs.createReadStream('input.txt');


//thiet lap encoding la utf-8
readerStream.setEncoding('UTF8');



//xu ly cac su kien lien quan den stream --> data, end, error

readerStream.on('data', function(chunk){
    data += chunk;
});

readerStream.on('end', function(){
    console.log(data);
});

readerStream.on('error', function(err){
    console.log(err.stack)
});

console.log('ket thuc chuong trinh');

//tao moi writable stream
var writerStream = fs.createWriteStream('output.txt');

//ghi data toi stream theo ma hoa UTF8
writerStream.write(data, 'UTF8');

//danh dau diem cuoi
writerStream.end();

//xu ly cac su kien lien quan toi stream --> finish, error
writerStream.on('finish', function(){
    console.log('ket thuc hoat dong ghi');
});

writerStream.on('error', function(err){
    console.log(err.stack);
});

console.log('ket thuc chuong trinh');


var readerStream = fs.createReadStream('input.txt');

var writerStream = fs.createWriteStream('output.txt');

readerStream.pipe(writerStream);


//nen file
fs.createReadStream('input.txt')
    .pipe(zlib.createGzip())
    .pipe(fs.createWriteStream('input.txt.gz'));


console.log('file duoc nen thanh cong');


//giai nen file
fs.createReadStream('input.txt.gz')
    .pipe(zlib.createGunzip())
    .pipe(fs.createWriteStream('input.txt'));
console.log('giai nen file thanh cong');
console.log('ket thuc chuong trinh');