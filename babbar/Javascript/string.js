console.log("test");

let obj = {
  age: 12,
  wt: 100,
  ht: 6,
};
console.log(obj);

obj.test = "done";
console.log(obj);

const copyObj = { ...obj };

console.log(copyObj);
copyObj.agent = "agent";
console.log(copyObj);
console.log("test");

const dest = {};
for (let key in obj) {
  let newKey = key;
  let newValue = obj[key];
  dest[newKey] = newValue;
}
console.log(dest);
