//for in (for object properties)
let obj1 = {
    name: "obj",
    number: "1"
}

for (const key in obj1) {
    console.log(`key ${key}, value ${obj1[key]}`);
}

//for of (for iterable objects)

const iterableObj = [1,2,3,4,5];

for (const number of iterableObj) {
    console.log(number);
}