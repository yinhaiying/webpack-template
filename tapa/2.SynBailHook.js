
// SyncBailHook 当监听到其中一个返回值不为null的时候，直接终止运行。
let {SyncBailHook} = require('tapable');

// console.log(SyncHook);

//当触发此事件的时候，需要传入name参数。然后监听函数可以获取name参数。



//模拟实现
// class SyncBailHook{
//     constructor(){
//         this.hooks = [];
//     }
//     tap(name,fn){
//         this.hooks.push(fn)
//     }
//     call(){
//       for(let i = 0;i < this.hooks.length;i++){
//         let hook =this.hooks[i];
//         let result = hook(...arguments);
//         if(result){
//           break;
//         }
//       }
//     }
// }

let queue = new SyncBailHook(['name','age']);
queue.tap('1',function(name,age){
  console.log(1,name);
  return 'hello';
})
queue.tap('1',function(name,age){
  console.log(2,name)
})
queue.tap('1',function(name,age){
  console.log(3,name)
})


queue.call('Bob');