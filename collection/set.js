import {TestObject} from "./iterables.js";

let item1 = new TestObject("first", 1);
let item2 = new TestObject("second", 2);
let itemDuplicate1 = new TestObject("duplicate", 0); //itemDuplicate1 is not equal to itemDuplicate2
let itemDuplicate2 = new TestObject("duplicate", 0);
let itemDuplicate3 = itemDuplicate2;

let itemObject1 = { name: "first", count: 1 };
let itemObject2 = { name: "first", count: 1 };

let setContainer = new Set();
setContainer.add(item1);
setContainer.add(item2);
setContainer.add(itemDuplicate1);
setContainer.add(itemDuplicate2);
setContainer.add(itemDuplicate3);
setContainer.add(itemObject1);
setContainer.add(itemObject2);

for (const containerElement of setContainer) {
    console.log(containerElement);
}