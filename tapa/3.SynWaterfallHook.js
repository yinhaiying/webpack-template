
// SyncWaterfallHook 下一个任务需要拿到上一个任务的返回值。
// let {SyncWaterfallHook} = require('tapable');

// console.log(SyncWaterfallHook);

//当触发此事件的时候，需要传入name参数。然后监听函数可以获取name参数。



//模拟实现
class SyncWaterfallHook{
    constructor(){
        this.hooks = [];
    }
    tap(name,fn){
        this.hooks.push(fn)
    }
    call(){
      let result;
      for(let i = 0;i < this.hooks.length;i++){
        let hook =this.hooks[i];
        result = i == 0? hook(...arguments):hook(result);
      }
    }
}

let queue = new SyncWaterfallHook(['name','age']);
queue.tap('1',function(name,age){
  console.log(1,name);
  return 'hello';
})
queue.tap('1',function(data){
  console.log(2,data);
  return data + 'hello';
})
queue.tap('1',function(data){
  console.log(3,data);
})


queue.call('Bob');