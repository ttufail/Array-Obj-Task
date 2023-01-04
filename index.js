let array = [0, 6, 7, 11].sort((a, b) => {
  return a - b;
});
let obj = {};
array.forEach((item) => {
  obj[item] ? obj[item]++ : (obj[item] = 1);
});
let txt = "";

for (const [key, values] of Object.entries(obj)) {
  txt += `${key}${values}`;
}
console.log(txt);
