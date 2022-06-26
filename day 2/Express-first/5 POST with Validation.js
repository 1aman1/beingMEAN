const express = require('express');
const app = express();

app.use(express.json());

const routes = [
    { id: 1, name: "route1" },
    { id: 2, name: "route2" },
    { id: 3, name: "route3" },
]

app.get('/', (req, resp) => {
    console.log("inside app.get");

    resp.send("My First REST api");
})

app.get('/api/allroutes/:id', (req, resp) => {
    const route = routes.find(itr => itr.id === parseInt(req.params.id))
    if (!route) {
        resp.status(404);
        resp.send("the route not found")
    }
    resp.send(route);
})

app.post('/api/routes', (req, resp) => {

    // validation
    if (!req.body.name || req.body.name.length < 3) {
        resp.status(400).send("name should be present and it should have > 3 characters")
        return;
    }


    const newRoute = {
        id: 1 + routes.length,
        name: req.body.name
    };

    routes.push(newRoute);
    console.log("pushed new object");

    resp.send(newRoute);
})

const port = 8499;// only
const host = 'localhost'
// const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`Started listening on ${port} port `);
})