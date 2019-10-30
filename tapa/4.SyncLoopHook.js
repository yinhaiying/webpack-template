
// SyncWaterfallHook 下一个任务需要拿到上一个任务的返回值。
// let {SyncLoopHook} = require('tapable');

// console.log(SyncWaterfallHook);

//loop循环的意思是，当一个事件触发的时候，监听函数会反复执行。
//当监听函数返回true的时候继续循环，返回false结束循环。



//模拟实现
class SyncLoopHook{
    constructor(){
        this.hooks;
    }
    tap(name,fn){
        this.hooks = fn;
    }
    call(){
      let result;
      do{
          result = this.hooks(...arguments)
      }while(result);
    }
}

let queue = new SyncLoopHook(['name','age']);
let count = 3;
queue.tap('1',function(name,age){
  count--;
  if(count > 0){
      console.log('1',count)
      return true;
  }else{
      return;
  }
})
queue.call('Bob');