export var a = 'zz';
// export var b = '作者';
// export var c = 'web';

// 包装成对象
var a = 'zz';
var b = '作者';
var c = 'web';
export {a,b,c};
// 函数的模块化包装
export function add(a,b){
    return a+b;
}


// 只能有一个export default，可以有多个export

// export{
//     name as a,
//     cname as b,
//     skill as c
// }