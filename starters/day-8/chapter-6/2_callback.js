console.log('first')
getUser(1, getUserObj)
console.log('second')

function getUserObj(user) {
    getRepositories_2(user.un, displayRepos)
}

function displayRepos(repos) {
    console.log('repos ', repos)
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('fetched user from the database')
        callback({ id: id, un: '1aman1' })
    }, 2000)
}

function getRepositories_2(user, callback) {
    setTimeout(() => {
        console.log(`${user} github API called...`)
        callback(['Data Structures', 'Apple', 'AWS'])
    }, 2000)
}