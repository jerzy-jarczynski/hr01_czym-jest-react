import { data } from './data.js';
import { combineAge, renderAge } from './helpers.js';
import camelCase from 'lodash/camelCase';

console.log(camelCase('hello roman co tam słychać'));
console.log(combineAge(data));
const container = document.querySelector('#age');
renderAge(container, data);
