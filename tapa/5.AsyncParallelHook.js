
// AsyncParallelHook 异步并发执行
let {AsyncParallelHook} = require('tapable');

// console.log(AsyncParallelHook);





//模拟实现
// class AsyncParallelHook{
//     constructor(){
//         this.hooks;
//     }
//     tap(name,fn){
//         this.hooks = fn;
//     }
//     call(){
//       let result;
//       do{
//           result = this.hooks(...arguments)
//       }while(result);
//     }
// }

let queue = new AsyncParallelHook(['name','age']);


// 第一种注册方式，使用tap。类似于同步
// queue.tap('1',function(name,age){
//     console.log(1,name)
// })
// queue.tap('2',function(name,age){
//     console.log(2,name)
// })
// queue.tap('3',function(name,age){
//     console.log(3,name)
// })

// //异步的调用，使用callAsync
// queue.callAsync('Bob',function(err,result){
//     console.log('over')
// });


// 第二种注册方式，基于回调的异步。
// console.time('cost')
// queue.tapAsync('1',function(name,cb){
//     setTimeout(() => {
//         console.log(1,name);
//         cb();
//     },1000)
// })
// queue.tapAsync('2',function(name,cb){
//     setTimeout(() => {
//         console.log(2,name);
//         cb();
//     },2000)
// })
// queue.tapAsync('3',function(name,cb){
//     setTimeout(() => {
//         console.log(3,name);
//         cb();
//     },3000)
// })

// //异步的调用，使用callAsync
// queue.callAsync('Bob',() => {
//     console.log('over');
//     console.timeEnd('cost');
// });


// 第三种注册方式，基于promise的异步。
console.time('cost')
queue.tapPromise('1',function(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(1,name);
            resolve();
        },1000)
    })
})
queue.tapPromise('2',function(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(2,name);
            resolve();
        },2000)
    })
})
queue.tapPromise('3',function(name){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(3,name);
            resolve();
        },3000)
    })
})


//异步的调用，使用callAsync  并行执行，累计花费最长的那个时间即3s。
queue.promise('bob').then(() => {
    console.log('ok');
    console.timeEnd('cost')
}).catch((error) => {
    console.log(error);
    console.timeEnd('cost')
})