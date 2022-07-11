console.log('first')

// getUser(1)
//     .then((user) => getRepositories(user))
//     .then((repos) => getCommits(repos))
//     .then((commit) => console.log('commit:', commit))
//     .catch((err) => { console.error('err') })

async function displayCommit() {
    try {
        const user = await getUser(1)
        const repo = await getRepositories(user)
        const commit = await getCommits(repo)
        console.log('commit:', commit)
    }
    catch (err) {
        console.log('err:', err)
    }
}
displayCommit()

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
            // reject(new Error('commit not found'))
        }, 2000)
    })
}