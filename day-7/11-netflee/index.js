const genres = require('./routes/genres');
const express = require('express');
const app = express();

app.use(express.json());
app.use('/api/genres', genres);

// HTTP SERVER 
const PORT = 6789
const HOST = '0.0.0.0'

app.listen(PORT, HOST, (req, resp) => { console.log(`listening on "${PORT}"`) })