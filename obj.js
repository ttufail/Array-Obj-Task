const object = {
  a: 1,
  b: {
    c: 2,
    d: 3,
  },
  e: 4,
};
let temp = {};
const newObj = (obj) => {
  Object.keys(obj).forEach((item) => {
    typeof obj[item] === "object"
      ? newObj(obj[item])
      : (temp[item] = obj[item]);
  });
  return temp;
};
console.log("🚀 ~ file: obj.js:19 ~ newObj(obj);", newObj(object));
