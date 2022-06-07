//Object is mutable

let print = function (obj) {
    for (const objKey in obj) {
        console.log(`key: ${objKey}; value: ${obj[objKey]}`);
    }
}

let someObj = {val1: "test val", val2: "test val 2"};

let pocketVar = someObj;

pocketVar.val1 = "changed val";

print(pocketVar);

console.log("\n");
delete pocketVar.val1;

print(pocketVar);