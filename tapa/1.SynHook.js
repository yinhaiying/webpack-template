let {SyncHook} = require('tapable');

// console.log(SyncHook);

//当触发此事件的时候，需要传入name参数。然后监听函数可以获取name参数。




// class SyncHook{
//     constructor(){
//         this.hooks = [];
//     }
//     tap(name,fn){
//         this.hooks.push(fn)
//     }
//     call(){
//         this.hooks.forEach((hook) => {
//             hook(...arguments);
//         })
//     }
// }

let queue = new SyncHook(['name','age']);
queue.tap('1',function(name,age){
  console.log(1,name)
})
queue.tap('1',function(name,age){
  console.log(2,name)
})
queue.tap('1',function(name,age){
  console.log(3,name)
})


queue.call('Bob');