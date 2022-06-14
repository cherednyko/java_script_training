async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
        setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    console.log(await myPromise);
}

myDisplay().then(
    (value) => {
        console.log(`Successful. Value: ${value}.`);
    },
    (error) => {
        console.log(`Error occurred. Message: ${error}.`);
    })
