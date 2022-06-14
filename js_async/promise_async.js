let promiseCallback = new Promise((resolve, reject) => {
    // resolve("OK");
    reject("Error inside promise function");
});

promiseCallback.then(
    (value) => {
        console.log(`Successful. Value: ${value}.`);
    },
    (error) => {
        console.log(`Error occurred. Message: ${error}.`);
    });