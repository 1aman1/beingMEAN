const orgs = require('./orgs.json')
const users = require('./user.json')

const fs = require("fs")

fs.readFile(orgs, (err, ddata) => {
    console.log(orgs);
    console.log(users);
})


// console.log(JSON.stringify(orgs));
// console.log(users);