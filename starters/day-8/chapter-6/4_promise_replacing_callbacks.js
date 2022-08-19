console.log('first')

getUser(1)
    .then((user) => getRepositories(user))
    .then((repos) => getCommits(repos))
    .then((commit) => console.log('commit:', commit))

    .catch((err) => { console.error('err') })

console.log('second')

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('fetched user from the database')
            resolve({ id: id, un: '1aman1' })
        }, 2000)
    })
}

function getRepositories(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${user.un} github API called...`)
            resolve(['Data Structures', 'Apple', 'AWS'])
        }, 2000)
    })
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('commit matched')
            resolve('1ae33f')
        }, 2000)
    })
}