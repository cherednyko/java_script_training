function TestObj(value) {
    this.value = value;
}

TestObj.prototype.getValue = {
    get: function () {
        return this.value;
    }
}

let testObjOne = new TestObj("test");

console.log(`property by getter: ${testObjOne.value}`);