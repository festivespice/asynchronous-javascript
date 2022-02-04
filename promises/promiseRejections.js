const calculateSquare = require('./calculateSquare.js');


calculateSquare(1)
    .then(function(value){
        console.log(value);
        throw new Error("Something went wrong");
        return(calculateSquare(value));
    })
    .then(function(value2){
        console.log(value);
    }, function(reason){ //handle error cases
        console.log("error happened: " + reason)
    });

    
    calculateSquare(1)
    .then(function(value){
        console.log(value);
        return(calculateSquare('bad arg'));
    })
    .catch(function(reason){
        console.log('error happened: ' + reason);
    })
