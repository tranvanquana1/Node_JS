//create string JSON
var student_string = '{"name": "tran van quan", "age": "21"}';
//JSON => Object
var student_obj = JSON.parse(student_string);

console.log("__Object__")
console.log('Name: ' + student_obj.name);
console.log('Age: '+ student_obj.age);

//Object => JSON
var student_json = JSON.stringify(student_obj);
console.log('__STRING__')
console.log(student_json);

//lưu file
console.log('__SAVE_FILE__')
var persist = require('node-persist');
persist.init().then(function(){
    persist.setItem('student', student_json);
    //lấy giá trị của key
    persist.getItem('student');
    //xóa key
    persist.removeItem('student');
    //xóa tất cả các key trong bộ nhớ ổ đĩa
    persist.clear();
});
