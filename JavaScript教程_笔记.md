##字符串
**截取: subtring()

##数组
**截取：slice(); 有复制数组的功能
**向数组尾部添加/减少元素： push/pop
**向数组头部添加/减少元素：unshift/shift
**修改数组的万能方法：splice(索引,删除个数,添加元素...)

##对象
判断是否为对象本身的属性：hasOwnProperty()

##Map/Set
Map:一组键值对的结构
Set:和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

##赋值解构使用场景
**交换两个变量
**快速获取当前页面的域名和路径：var {hostname:domain, pathname:path} = location;
**如果一个函数接收一个对象作为参数，那么，可以使用解构直接把对象的属性绑定到变量中。例如，下面的函数可以快速创建一个Date对象：

function buildDate({year, month, day, hour=0, minute=0, second=0}) {
    return new Date(year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second);
}

##方法
apply()
要指定函数的this指向哪个对象，可以用函数本身的apply方法，它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。
装饰器:还可以动态改变函数的行为

##高阶函数
函数的参数能够接收别的函数
**map/reduce
**filter
**sort:通常规定，对于两个元素x和y，如果认为x < y，则返回-1，如果认为x == y，则返回0，如果认为x > y，则返回1;

##闭包
**返回闭包时牢记一点：返回函数不要引用任何循环变量，或者后续会发生变化的变量
**创建一个匿名函数并立刻执行
(function(x){
    return x*x;
})(3)

##箭头函数
如果要返回一个对象，需要在外面加括号；
x => ({foo:x})

##generator 
ES6标准引入的新的数据类型，类似函数，但可以多次返回；
因为generator可以在执行过程中多次返回，所以它看上去就像一个可以记住执行状态的函数;
generator还有另一个巨大的好处，就是把异步回调代码变成“同步”代码。

##标准对象
包装对象
在JavaScript中，字符串也区分string类型和它的包装类型。包装对象用new创建；

总结一下，有这么几条规则需要遵守：

不要使用*new Number()*、*new Boolean()*、*new String()*创建包装对象；

用*parseInt()*或*parseFloat()*来转换任意类型到number；

用*String()*来转换任意类型到string，或者直接调用某个对象的toString()方法；

通常不必把任意类型转换为boolean再判断，因为可以直接写if (myVar) {...}；

typeof操作符可以判断出number、boolean、string、function和undefined；

判断Array要使用Array.isArray(arr)；

判断null请使用myVar === null；

判断某个全局变量是否存在用typeof window.myVar === 'undefined'；

函数内部判断某个变量是否存在用typeof myVar === 'undefined'。

最后有细心的同学指出，任何对象都有toString()方法吗？null和undefined就没有！确实如此，这两个特殊值要除外，虽然null还伪装成了object类型。

更细心的同学指出，number对象调用toString()报SyntaxError：

123.toString(); // SyntaxError
遇到这种情况，要特殊处理一下：

123..toString(); // '123', 注意是两个点！
(123).toString(); // '123'

##Date
时区:
获取时间戳方法：
if (Date.now) {
    console.log(Date.now()); // 老版本IE没有now()方法
} else {
    console.log(new Date().getTime());
}
时间戳转换成当地时间
toLocaleString();

##RegExp (留疑)

##JSON
*序列化*
第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
JSON.stringify(xiaoming, ['name', 'skills'], '  ');

如果我们还想要精确控制如何序列化小明，可以给xiaoming定义一个toJSON()的方法，直接返回JSON应该序列化的数据：

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp'],
    toJSON: function () {
        return { // 只输出name和age，并且改变了key：
            'Name': this.name,
            'Age': this.age
        };
    }
};

JSON.stringify(xiaoming); // '{"Name":"小明","Age":14}'

*反序列化*
JSON.parse()还可以接收一个函数，用来转换解析出的属性
var obj = JSON.parse('{"name":"小明","age":14}', function (key, value) {
    if (key === 'name') {
        return value + '同学';
    }
    return value;
});
console.log(JSON.stringify(obj)); // {name: '小明同学', age: 14}

##面向对象编程
创建对象
方法一：Object.create()
直接创建对象：var x = {};
构造函数的方法创建对象：
JavaScript还可以用一种构造函数的方法来创建对象。它的用法是，先定义一个构造函数：

function Student(name) {
    this.name = name;
    this.hello = function () {
        alert('Hello, ' + this.name + '!');
    }
}
这不是一个普通函数吗？

这确实是一个普通函数，但是在JavaScript中，可以用关键字new来调用这个函数，并返回一个对象：

var xiaoming = new Student('小明');
xiaoming.name; // '小明'
xiaoming.hello(); // Hello, 小明!
注意，如果不写new，这就是一个普通函数，它返回undefined。但是，如果写了new，它就变成了一个构造函数，它绑定的this指向新创建的对象，并默认返回this，也就是说，不需要在最后写return this;。

新创建的xiaoming的原型链是：

xiaoming ----> Student.prototype ----> Object.prototype ----> null


##原型继承
继承函数
inherits()

function inherits(Child,Parent) {
    var F = function() {};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
}

JavaScript的原型继承实现方式就是：

定义新的构造函数，并在内部用call()调用希望“继承”的构造函数，并绑定this；

借助中间函数F实现原型链继承，最好通过封装的inherits函数完成；

继续在新的构造函数的原型上定义新方法。

##class继承
ES6引入class;目的就是让定义类更简单


##浏览器对象

document对象还有一个cookie属性，可以获取当前页面的Cookie。
document.cookie;
为了确保安全，服务器端在设置Cookie时，应该始终坚持使用httpOnly

##操作文件
通常，上传的文件都由后台服务器处理，JavaScript可以在提交表单时对文件扩展名做检查，以便防止用户上传无效格式的文件：

var f = document.getElementById('test-file-upload');
var filename = f.value; // 'C:\fakepath\test.png'
if (!filename || !(filename.endsWith('.jpg') || filename.endsWith('.png') || filename.endsWith('.gif'))) {
    alert('Can only upload image file.');
    return false;
}
