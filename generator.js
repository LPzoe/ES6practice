function* fib(max) {
    var 
    t,
    a = 0,
    b = 1,
    n = 0;
    while (n < max) {
        yield a;
        [a,b] = [b,a+b];
        n++;
    }
    return;
}
//直接调用fib(5);会报错，因为仅仅是创建了一个generator对象
//调用generator对象，有两种方法
//方法一：使用next()
var f = fib(5);
f.next();//{value:0,done:false}

//方法二：直接用for ... of循环迭代generator对象

for (var x of fib(10)) {
    console.log(x);//依次输出0,1,1,2,3,...
}

//有了generator的美好时代，用AJAX时可以这么写：

try {
    r1 = yield ajax('http://url-1', data1);
    r2 = yield ajax('http://url-2', data2);
    r3 = yield ajax('http://url-3', data3);
    success(r3);
}
catch (err) {
    handle(err);
}