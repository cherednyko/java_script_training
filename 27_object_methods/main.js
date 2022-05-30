const testThisFunction = function testThis(){
    let obj = this;
    console.log("type " + typeof obj + "; obj name " + obj.toString());
}

const testThisObj = {
    name: "[testThisObj]",
    testFunction: testThisFunction,
    toString: function (){
        return this.name;
    }
}

testThisFunction();
testThisObj.testFunction();
