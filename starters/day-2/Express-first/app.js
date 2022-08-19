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

// GET
app.get('/api/routes/:id', (req, resp) => {
    const route = routes.find(itr => itr.id === parseInt(req.params.id))
    if (!route) return resp.status(404).send("the route not found")

    resp.send(route);
})

app.get('/api/allroutes', (req, resp) => {
    resp.send(routes);
})

// POST
app.post('/api/routes', (req, resp) => {

    // validate with object destructuring
    const { error } = validateRoute(req.body);
    if (error) return resp.status(400).send(error.details[0].message);

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
    if (!route) return resp.status(404).send("the route not found")

    // validate with object destructuring
    const { error } = validateRoute(req.body);
    if (error) return resp.status(400).send(error.details[0].message);

    route.name = req.body.name;

    console.log("updated one route");
    resp.send(route);
})


//DELETE
app.delete('/api/routes/:id', (req, resp) => {
    // if record exists
    const delRoute = routes.find(itr => itr.id === parseInt(req.params.id))
    if (!delRoute) return resp.status(404).send("the route not found")

    const index = routes.indexOf(delRoute);
    routes.splice(index, 1);

    //return deleted route
    resp.send(delRoute);
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
    console.log(`REST actively listening at ${port} port `);
})