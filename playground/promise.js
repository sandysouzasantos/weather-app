let asyncAdd = (a, b) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);

    });
};

asyncAdd(5, 7).then((result) => {

    console.log('Result: ', result);
    return asyncAdd(result, 1);

}).then((result2) => {

    console.log(result2);

}).catch((errorMessage) => {

    console.log(errorMessage);

});

/*
let somePromise = new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('Hey, it worked');
        reject('Unable to fulfill promise');

    }, 2500);

});

somePromise.then((message) => {
    console.log('Sucess: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});*/
