
require('./index.css')

document.getElementById('#app').innerHTML = 'app'

import src from '../assets/images/1.jpg';

let image = new Image();
image.src = src;
document.appendChild(image);