const express = require('express')
const app = express()
const port = 3000
const axios = require('axios')
const { response } = require('express')

app.set('view engine', 'ejs')

app.get('/results', async (req, res) => {
    try {
        const result = await axios.get(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects`
        );
        console.log(result.data)
        const items = result.data.objectIDs

        res.render('results', {
            items 
        });
    } catch (error) {
        console.log(error);
        res.status(400).send('Error while getting list of objects');
    }
});




app.listen(port, () => {
    console.log('App has started!!!')
})