function calculateSquare(number){
    //we don't know the value of the calculation but we can create a promise that will be a placeholder
    const promise = new Promise(function(resolve, reject){
        //inside here, the executor function, we can do asyncrhonous things
        setTimeout(function(){
            if(typeof number != 'number'){
                console.log(number + " err");
                return reject(new Error('Argument of type number is expected'));
            } //basically an else.
            const result = number  * number;
            resolve(result);
        }, 1000);
    });

    return promise;
}

// calculateSquare('bad argument').then(value => {
//     console.log('success: ' + value);   
// }, reason => {
//     console.log('Error: ' + reason);
// });

module.exports = calculateSquare;