const _= require('lodash')
let array = [1, 2];
let array1 = [0, 2, 3,4,6,7,8,9];
let array3 = array.concat(array1).sort();
let object = {};
array3.forEach((item) => {
  object[item] ? (object[item] += 1) : (object[item] = 1);
});
const keys = Object.keys(object);
const values = Object.values(object);
let txt = "";
for (i = 0; i < keys.length; i++) {
  txt += keys[i] + values[i];
}
console.log(txt);