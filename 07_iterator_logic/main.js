let myCollection = {
    container: [],
    size: 0,
    push: function (obj) {
        this.container.push(obj);
        this.size++;
    }
}

myCollection[Symbol.iterator] = function () {
    let n = 0;
    let done = false;
    let container = this.container;
    let size = this.size;
    return {
        next() {
            let value = container[n];
            if (size === n) {
                done = true;
            }
            n++;
            return {value: value, done: done}
        }
    };
}

myCollection.push(1);
myCollection.push(2);

for (const element of myCollection) {
    console.log(element);
}