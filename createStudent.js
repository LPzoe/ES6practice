/* 
编写一个createStudent()函数，在内部封装所有的new操作。一个常用的编程模式像这样
*/
function Student(props) {
    this.name = props.name || '匿名';
    this.grade = props.grade || 1;
}
Student.prototype.hello = function () {
    alert('Hello'+this.name+'!');
}

function createStudent(props) {
    return new Student(props || {});
}
// 这个createStudent()函数有几个巨大的优点：一是不需要new来调用，二是参数非常灵活，可以不传，也可以这么传
var xiaoli = createStudent({
    name:'小李'
})

// 用ES6引入的class关键字来编写Student
class Student {
    constructor(name) {
        this.name = name;
    }
    hello() {
        alert('Hello,' + this.name + '!');
    }
}