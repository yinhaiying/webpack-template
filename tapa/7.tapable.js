

const {Tapable,SyncHook} = require('tapable');

let t = new Tapable();

// this.hooks

t.hooks = {
    myhook:new SyncHook()
}
t.hooks.myhook.tap('1',() =>{
    console.log('这里执行')
})
t.hooks.myhook.call();