const mongoose = require('mongoose')
const deDebugger = require('debug')('app:db')

function consoleLog(str) {
    console.log('\x1b[36m%s\x1b[0m', str)
}

mongoose.connect('mongodb://18.234.189.133:27017/mongo-exercises')
    .then(() => deDebugger('connected to database'))
    .catch((err) => deDebugger('Could not connect to database', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
})

const Course = mongoose.model('courses', courseSchema)

async function updateCourse(id) {

    const result = await Course.update({ _id: id }, {
        $set: {
            author: 'another author'
        }
    });

    consoleLog('After save', result)
}

updateCourse('5a68fdc3615eda645bc6bdec');

async function getData() {
    return await Course
        .find({ isPublished: true })
        .or([
            { price: { $gte: 15 } },
            { name: /.*node.*/i }
        ])
        .lean()
        .sort({ price: -1 })
        .select('name author price');
}

async function run() {
    const result = await getData();
    console.log(result)
}

// run();