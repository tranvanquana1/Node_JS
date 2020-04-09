//khai bao event_emitter
var event = require('events');
//khoi tao
var em = new event.EventEmitter();

//tao mot event handler
var connectHandle = function connect(){
    console.log('tao ket noi thanh cong');

    //kich hoat su kien data_received
    em.emit('data_received');
}

//gan su kien connection voi event handler
em.on('connection', connectHandle);

// gan su kien data_received voi mot ham an danh
em.addListener('data_received', function(){
    console.log('du lieu da duoc tiep nhan thanh cong');
});

//kich hoat su kien connection
em.emit('connection');

console.log('ket thuc chuong trinh')