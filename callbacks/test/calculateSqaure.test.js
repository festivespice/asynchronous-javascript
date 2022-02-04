const calculateSquare = require('../caclulateSquare.js');
const expect = require('chai').expect; //used to compare expected/actual results

describe('calculateSquare', function(){ //we can test discrete expected outcomes
    it('should return 4 if passed 2', function(done){
        calculateSquare(2, function(error, result){
            expect(result).to.equal(4);
            done();
        })
    });

    it('should return an error if passed a string', function(done){//notice the format of 'it()'
        calculateSquare('bad argument', function(error, result){
            expect(error).to.not.equal(null);
            expect(error.message).to.equal('Argument of type number is expected'); //you can also verify the error message
            done();
        })
    }) 
})
/*
You can create as many test cases as you want, but they 
should ALL be related to one another. 

A test case is created with the 'it()' function. 
*/