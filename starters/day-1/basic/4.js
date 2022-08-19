const args = process.argv.slice(2);

args.forEach(arg => {
    let envVar = process.env[arg];

    if (envVar == undefined) {
        console.error(`ENV variable "${arg}" not found`);
    }
    else {
        console.log(envVar);
    }
});
