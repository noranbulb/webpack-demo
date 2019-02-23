//commonJs 스팩
//var _ = require('lodash');

import _ from 'lodash';
import './style.css';
import './hello.scss';

//named import
import {area, circumference } from './js/circle';

//default import는 이름을 임의로 바꿀수 있다.
import box from './js/cube';

function component() {
  let element = document.createElement('div');

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());


console.log('webpack dev server is running');

console.log( area(5) , circumference(5) , box(5) );
