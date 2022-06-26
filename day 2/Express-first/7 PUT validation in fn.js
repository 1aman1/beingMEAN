const Joi = require('joi');

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

    // validate with object destructuring
    const { error } = validateRoute(req.body);
    if (error) {
        resp.status(400).send(error.details[0].message);
        return;
    }

    const newRoute = {
        id: 1 + routes.length,
        name: req.body.name
    };

    routes.push(newRoute);
    console.log("pushed new route");

    resp.send(newRoute);
})

app.put('/api/routes/:id', (req, resp) => {
    // if record exists
    const route = routes.find(itr => itr.id === parseInt(req.params.id))
    if (!route) {
        resp.status(404).send("the route not found")
    }

    // validate with object destructuring
    const { error } = validateRoute(req.body);
    if (error) {
        resp.status(400).send(error.details[0].message);
        return;
    }

    route.name = req.body.name;

    console.log("updated one route");
    resp.send(route);
})

function validateRoute(newUpdatedRoute) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });

    return schema.validate(newUpdatedRoute);
}

const port = 8499;// only
const host = 'localhost'
// const host = '0.0.0.0'

app.listen(port, host, () => {
    console.log(`Started listening on ${port} port `);
})