const calculateSquare = require('./calculateSquare.js');

function logToConsole(somePromise){
    somePromise.then(function(value){
        console.log(value);
    });
}

const value = 'string';
const promisifiedValue = Promise.resolve(value);
logToConsole(promisifiedValue);

const rejectedPromise = Promise.reject(value);
logToConsole(rejectedPromise);