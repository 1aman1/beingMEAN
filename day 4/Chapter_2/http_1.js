const http = require('http')

const server = http.createServer();

server.on('connection', (connection) => {
    console.log("Sssssh!!! koi hai")
});

PORT = 8080;
server.listen(PORT);

console.log(`listening on '${PORT}' `)