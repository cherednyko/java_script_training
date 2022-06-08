function TestObject(name, count){
    this.name = name;
    this.count = count;
}

function TestObjectContainer(){
    this.size = 0;
    this.container = [];
    this.add = function (item){
        this.container.push(item);
        this.size++;
    };
    this[Symbol.iterator] = function (){
        let counter = 0;
        let done = false;
        let size = this.size;
        let container = this.container;
        return {
            next() {
                let value = container[counter];
                if (size === counter) {
                    done = true;
                }
                counter++;
                return {value: value, done: done}
            }
        };
    }
}

let container = new TestObjectContainer();
container.add(new TestObject("first", 1));
container.add(new TestObject("second", 2));

for (const containerElement of container) {
    console.log(containerElement);
}

for (const containerKey in container) {
    console.log(containerKey);
}

console.log(container);