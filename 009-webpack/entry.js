require('./style.css');
document.write(require('./content.js'));

import {sayHello, sayGoodby} from './action';
sayHello();
sayGoodby();