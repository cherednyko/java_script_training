const testObj = {
    value: "value",
    get valueGetter() {
        return this.value;
    },
    set valueSetter(value) {
        this.value = value;
    }
}

testObj.value = "updated value by property";

console.log(`property: ${testObj.value}, getter: ${testObj.valueGetter}`);

testObj.valueSetter = "updated value by setter";
console.log(`property: ${testObj.value}, getter: ${testObj.valueGetter}`);

Object.defineProperty(testObj, "valueUpperCaseGetter", {
    get : function () { return this.value.toUpperCase(); }
})

console.log(`property: ${testObj.value}, getter: ${testObj.valueUpperCaseGetter}`);
