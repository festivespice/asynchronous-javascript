function calculateSquare(number, callback) {
    //don't define parameters of the callback here inside of our parameters
    setTimeout(function () {
        if (typeof number != 'number') {
            callback(new Error('Argument of type number is expected'));
            return; //we need to exit this function after callback because we have an error. 
        }
        const result = number * number;
        callback(null, result);
    }, 1000); //wait for 1 second
}

calculateSquare(2, function (error, result) {
    //we don't mention 'callback' here. we simply have 'function'
    //the main calculation happens in the calculateSquare function and we get a callback.
    if (error) {
        console.log('Caught error: ' + String(error));
    } else {
        console.log('successful: ' + result);
        calculateSquare(3, function (error, result) {
            if (error) {
                console.log('Caught error: ' + String(error));
            } else {
                console.log('successful: ' + result);
            }
        });
    }
});

calculateSquare(4, function (error, result) {
    if (error) {
        console.log('Caught error: ' + String(error));
    } else {
        console.log('successful: ' + result);
    }
});