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