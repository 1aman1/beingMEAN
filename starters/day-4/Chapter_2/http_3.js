const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        console.log("/ request")
        res.write("/ request")
        res.end();
    }

    if (req.url === '/apidocs') {

        console.log("/apidocs request")
        res.write("/apidocs request")
        res.end();
    }

    if (req.url === '/apidocs/all') {
        console.log("/apidocs all request")
        res.write(JSON.stringify(['1', '2', '3']))
        res.end();
    }

});

// server.on('connection', (connection) => {
//     console.log("Sssssh!!! koi hai")
// });

PORT = 6789;

server.listen(PORT);
console.log(`listening on '${PORT}' `)