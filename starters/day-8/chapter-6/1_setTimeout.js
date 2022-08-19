console.log('first')

const user = getUser(1)
console.log(user)
console.log('second')


function getUser(id) {
    setTimeout(() => {
        console.log('copied user from the database')
        return { id: id, un: '1aman1' }
    }, 2000)
}