// AsyncSeriesHook异步串行执行
// let {AsyncSeriesHook}  = require('tapable');


// 自实现AsyncSeriesHook类

class AsyncSeriesHook{
    constructor(){
        this.hooks = [];
    }
    tapAsync(name,fn){
       this.hooks.push(fn);
    }
    callAsync(){
      let args = Array.from(arguments);
      let done = args.pop();// 最后一个参数是回调函数
      let index = 0;
      let that = this;
      function next(){
          let fn = that.hooks[index++];
          fn ? fn(...args,next) :done();
      }
      next();
    }
}

let queue = new AsyncSeriesHook(['name']);
console.time('cost');


queue.tapAsync('1',function(name,cb){
  setTimeout(() => {
      console.log(1,name);
      cb();
  },1000)
})
queue.tapAsync('2',function(name,cb){
  setTimeout(() => {
      console.log(2,name);
      cb();
  },2000)
})
queue.tapAsync('3',function(name,cb){
  setTimeout(() => {
      console.log(3,name);
      cb();
  },3000)
})

// 异步串行执行，花费时间是所有异步的时间总和。
queue.callAsync('bob',() => {
    console.timeEnd('cost')
})
