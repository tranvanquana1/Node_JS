
var buf = new Buffer.allocUnsafe(20);

console.log(buf);

buf.fill('abcdef');
var len = buf.write('abcdef abc def');
console.log(buf.toString('ascii', 0, 4));
console.log(len);


//chuyen buffer sang JSON

var buf = new Buffer.allocUnsafe(20);

var json = buf.toJSON(buf);

console.log(json.toString());


//ghep noi cac buffer
var buf1 = Buffer.alloc(20, 'y name is quan');
var buf2 = Buffer.alloc(30, 'i am 21');

var buf3 = Buffer.concat([buf1, buf2], 50);
console.log(buf3.toString());

//so sanh 2 buffer
var result = Buffer.compare(buf1, buf2);

console.log(result);
var arr =[buf1, buf2];
arr.sort(Buffer.compare)

console.log(arr)


