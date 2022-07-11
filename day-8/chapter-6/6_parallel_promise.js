
const promiz_1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('ASYNC CALL 1')
        resolve(1)
        // reject(new Error('sth failed'))
    }, 2000)
})

const promiz_2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('ASYNC CALL 2')
        resolve(2)
    }, 2000)
})


Promise.race([promiz_1, promiz_2])
// Promise.all([promiz_1, promiz_2])
    .then(result => console.log('console after both promises', result))
    .catch(err => console.log('FATAL', err.message))