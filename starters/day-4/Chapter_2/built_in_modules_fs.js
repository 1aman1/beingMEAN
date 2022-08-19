
const fs = require('fs')

fs.readdir('$', (err, data) => {
    if (err)
        console.error('error')
    else
        console.log(data)
})