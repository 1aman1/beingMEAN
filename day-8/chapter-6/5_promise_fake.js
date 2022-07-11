
// const promizz = Promise.resolve({ 1: 1 })
const promizz = Promise.reject(new Error('could connect'))
promizz.then((resolve, reject) => console.log("received"))
    .catch((err) => console.log('FATAL', err))