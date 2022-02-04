const myPromise = new Promise(function(resolve, reject){
    resolve('Hello world');
});

myPromise.then(function(value){
    console.log(value);
});
console.log("this is written after myPromise.then");