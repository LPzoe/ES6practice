/* 
筛选出素数
*/
'use strict';

function get_primes(arr) {
var r = arr.filter(element => {
    // 不是数字或者数字小于2
    if (typeof element !== "number" || !Number.isInteger(element) || element < 2) {
      // Number.isInterget 判断是否为整数
      return false;
    }
    //2是质数
    if(element == 2){
        return true; 
    }else if(element % 2 == 0){  //排除偶数
        return false;
    }
    //依次判断是否能被奇数整除，最大循环为数值的开方
    var squareRoot = Math.sqrt(element);
    //因为2已经验证过，所以从3开始；且已经排除偶数，所以每次加2
    for(let i = 3; i <= squareRoot; i += 2) {
      if (element % i === 0) {
         return false;
      }
    }
    return true;
    // return self.indexOf(element) === index;
});
return r;
}



// 测试:
var
    x,
    r,
    arr = [];
for (x = 1; x < 100; x++) {
    arr.push(x);
}
r = get_primes(arr);
if (r.toString() === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97].toString()) {
    console.log('测试通过!');
} else {
    console.log('测试失败: ' + r.toString());
}
