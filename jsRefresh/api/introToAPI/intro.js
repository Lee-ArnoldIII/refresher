const axios = require('axios');

axios.get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (res) {
        console.log(res.data);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(function () {

    });

    // async await method below:
    // app.get('/', async (req, res, next) => {
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1'); 
    //     } catch(err) {
    //         console.log(err);
    //     }
    // })

    // second async method below:
    // (async () => {
    //     try {
    //         const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
    //         console.log(res.data);
    //     } catch(err) {
    //         console.log(err);
    //     }
    // })()