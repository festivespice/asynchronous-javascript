const calculateSquare = require('../calculateSquare.js');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect; //this function will be used to compare results.

describe('calculateSquare', function(){
    it('should resolve with number 4 if passed number 2', function(){
       return expect(calculateSquare(2)).to.eventually.be.equal(4); //'eventually' is from the plugin.  
       //return signifies asynchronous code.
    });
    
    it('should become rejected if passed a string', function(){
        return expect(calculateSquare('bad arg')).to.be.rejected;
    })
});