var event = require('events');

var em = new event.EventEmitter();

//listener1
var listener1 = function listener1(){
    console.log('listener1 duoc thuc thi');
};

//listener2
var listener2 = function listener2(){
    console.log('listener2 duoc thuc thi');
};

//gan su kien connection voi listener1
em.on('connection', listener1);

//gan su kien connection voi listener2
em.addListener('connection', listener2);

//dem so event dang lang nghe su kien connection
var count = em.listenerCount('connection');
console.log(count + ' event listener dang lang nghe su kien connection');

//kich hoat su kien connection
em.emit('connection');

//xoa su kien gan voi listener1
em.removeListener('connection', listener1);
console.log('listener1 khong con lang nghe su kien connection');

count = em.listenerCount('connection')
console.log(count + ' event listener dang lang nghe su kien connection');

console.log('ket thuc chuong trinh');