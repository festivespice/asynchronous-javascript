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

module.exports = calculateSquare;