const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("inside app.get");

    res.send("My First REST api");
})

app.get('/api/route1', (req, res) => {
    console.log("inside app.get.route1");

    res.send("GET Route1");
})

app.get('/api/route/:new', (req, res) => {
    res.send(req.params.new)

})

const port = 3000;
const host = 'localhost'
// const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`Started listening on ${port} port `);
})