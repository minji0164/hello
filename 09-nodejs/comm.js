import hello from "./module.js";
import {name, age as num, obj} from "./module.js";
// import a from './a';
// import b from './b';
import {a, b} from './index.js';

a();
b();
hello();

console.log(name);
console.log(num);
console.log(obj);