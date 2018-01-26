/* 
生成一个自增的ID
*/
'use strict';
function* next_id() {
    var current_id = 0;
    while(true){
        yield ++current_id;
    }
}

// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}