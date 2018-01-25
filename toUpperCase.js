/* 
转换单词首字母为大写，其他字母为小写
*/
'use strict';

function normalize(arr) {
    var result = arr.map( x => {
        x = x.toLocaleLowerCase();
        x = x[0].toUpperCase() + x.substring(1);
        return x;
    })
    return result;
}

// 测试:
if (normalize(['adam', 'LISA', 'barT']).toString() === ['Adam', 'Lisa', 'Bart'].toString()) {
    console.log('测试通过!');
}
else {
    console.log('测试失败!');
}