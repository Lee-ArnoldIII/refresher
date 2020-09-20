const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')

app.get('/results', (req, res) => {
    res.send('Hello, it works!')
})




app.listen(port,  () => {
    console.log('Movie App has started!!!')
})