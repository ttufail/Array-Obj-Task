const obj = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: 4,
};
let newObj = {};
const keys = Object.keys(obj);
console.log("🚀 ~ file: obj.js:10 ~ keys", keys);
const value = Object.values(obj);
console.log("🚀 ~ file: obj.js:11 ~ value", value);

