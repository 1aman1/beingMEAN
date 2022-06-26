const express = require('express');
const app = express();

const routes = [
    { id: 1, name: "route1" },
    { id: 2, name: "route2" },
    { id: 3, name: "route3" },
]

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

app.get('/api/allroutes/:id', (req, resp) => {
    const route = routes.find(itr => itr.id === parseInt(req.params.id))
    if (!route) {
        resp.status(404);
        resp.send("the route not found")
    }
    resp.send(route);
})


const port = 3000;
const host = 'localhost'
// const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`Started listening on ${port} port `);
})