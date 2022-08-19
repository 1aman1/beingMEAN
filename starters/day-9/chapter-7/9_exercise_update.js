const mongoose = require('mongoose')
const deDebugger = require('debug')('app:db')

function consoleLog(str) {
    console.log('\x1b[36m%s\x1b[0m', str)
}

mongoose.connect('mongodb://3.94.85.60:27017/mongo-exercises')
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

    const course = await Course.find({
        _id: id
    });

    if (!course) {
        consoleLog('course Not Found')
        return;
    }

    consoleLog('course Found')

    // update author
    course.author = 'another author';

    const result = await course.save()
        .then(() => consoleLog('saved'))
        .catch(() => consoleLog('course not saved'));

    consoleLog('After save', result)
}

updateCourse('5a6900fff467be65019a9001');

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