console.log('first')
getUser(1, getRepositories)
console.log('second')

function getRepositories(user) {
    getRepositories(user.un, displayRepos)
}

function displayRepos(repos) {
    console.log('repos ', repos)
}

function getUser(id, callback) {
    setTimeout(() => {
        console.log('copied user from the database')
        callback({ id: id, un: '1aman1' })
    }, 2000)
}

function getRepositories(user, callback) {
    setTimeout(() => {
        console.log('github API called...')
        callback(['Data Structures', 'Apple', 'AWS'])
    }, 2000)
}