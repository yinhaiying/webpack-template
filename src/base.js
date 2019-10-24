
require('./index.css')
$('#base').html('base')
// document.getElementById('base').innerHTML = "base";

/*

在项目中引入公共模块的方法：
1. 在每个文件中单独进行引入
import $ from 'jquery'
这种方法会导致jquery在每个入口都被打包，使得打包后的文件过大。
因此，jquery应该作为公共的模块进行打包，然后分别引入。



*/


