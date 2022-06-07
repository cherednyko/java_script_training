let print = function (obj) {
    console.log(`Printing ${this}`)
    for (const objKey in obj) {
        console.log(`key: ${objKey}; value: ${obj[objKey]}`);
    }
}

let objOne = {value1: "value1"};
objOne.printProperties = function (){
    console.log(`Printing ${this}`);
    for (const objKey in this) {
        console.log(`key: ${objKey}; value: ${this[objKey]}`);
    }
}
print(objOne);
objOne.printProperties();
