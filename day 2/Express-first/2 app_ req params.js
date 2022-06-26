const express = require('express');
const app = express();

app.get('/', (req, resp) => {
    console.log("inside app.get");

    resp.send("My First REST api");
})

app.get('/api/route1', (req, resp) => {
    console.log("inside app.get.route1");

    resp.send("GET Route1");
})

app.get('/api/route2/:year/:mon', (req, resp) => {
    resp.send(req.params)

})

app.get('/api/route3/:year/:mon', (req, resp) => {
    resp.send(req.query)
})


const port = 3000;
const host = 'localhost'
// const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`Started listening on ${port} port `);
})