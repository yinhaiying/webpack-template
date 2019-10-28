
require('./index.css')
require('./base.css')



require('./index.less');

require('./index.scss');

import src from '../assets/images/1.jpg';

let image = new Image();
image.src = src;
document.body.appendChild(image);

let obj = {
    a:'1',
    b:'2'
}

let foo = ({a,b}) => {
    console.log(a);
    console.log(b);
}

foo(obj)