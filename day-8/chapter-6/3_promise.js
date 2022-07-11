
const promiz = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve(1);
        reject(new Error('github down'))
    }
        , 2000)
})


promiz
    .then(result => console.log('result', result))
    .catch(error => console.log('error', error.message))