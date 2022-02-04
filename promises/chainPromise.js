const calculateSquare = require('./calculateSquare.js');


    calculateSquare(2)
    .then(function(result1) {
       console.log(result1);
       return calculateSquare(result1); 
    })
    .then(function(result2) {
        console.log(result2);
        return calculateSquare(result2);
    })
    .then(function(result3){
        console.log(result3);
    }); //not much indentation. 