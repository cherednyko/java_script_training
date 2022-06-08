function TestObj(value) {
    this.value = value;
    this.getValueFunc = function (){
        return this.value;
    }
}


let testObjOne = new TestObj("test");

console.log(`property by getter: ${testObjOne.getValueFunc()}`);