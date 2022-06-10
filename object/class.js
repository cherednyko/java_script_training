class TestClass {
    constructor(name, count) {
        this._name = name;
        this._count = count;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }

    print() {
        console.log(`name: ${this._name}; count: ${this._count}`);
    }
}

let testClass = new TestClass("test", 1);

testClass.print();

testClass._name = "changed test";

testClass.print();

testClass.name = "changed test 2";

testClass.print();

