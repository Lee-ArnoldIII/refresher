const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const { response } = require('express')

app.set('view engine', 'ejs')

app.get('/results', async (req, res) => {
    try {
        const result = await axios.get(
            `https://jsonplaceholder.typicode.com/users`
        );
        console.log(result.data)
        const users = result.data
        
        res.render('results', {
          users  
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Error while getting list of users');
    }
});

app.get('/todos', async (req, res) => {
    try {
        const result = await axios.get(
            `https://jsonplaceholder.typicode.com/todos/`
        );
        console.log(result.data)
        const todos = result.data

        res.render('todos', {
            todos
        });
    } catch (erro) {
        console.log(error);
        res.status(404).send('Error while getting list of todos');
    }
});

// app.get('/results', (req, res) => {
//     users = axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(response => {
//         console.log(response.data)
//     });
//     const names = users.data;
//     res.render('results', {
//         names
//     })
// })

// app.get('/results', (req, res) => {
//     axios.get('https://omdbapi.com/?s=california&apikey=thewdb')
//     .then(function (response) {
//         console.log(response.data['Search'][0])
//         res.send(response.data)
//         // res.render("results", {data: data}) 
//     })
//     .catch(function (error) {
//         console.log(error);
//     })
//     .finally(function () {

//     });
    
// })




app.listen(port,  () => {
    console.log('Movie App has started!!!')
})