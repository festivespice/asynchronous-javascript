const fetch = require('node-fetch');
const URL = 'https://www.omdbapi.com/?s=batman&y=2018&apikey=a06b6248';

fetch(URL)
    .then(function(response){
        return(response.json());
    })
    .then(function(data){
        console.log(data);
    });