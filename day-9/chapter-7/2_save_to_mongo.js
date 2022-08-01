const mongoose = require('mongoose')
const dbDebugger = require('debug')('app:db')

mongoose.connect('mongodb://admin:admin@107.23.59.170:27017/testdb')
    .then(() => dbDebugger('connected to mongodb'))
    .catch(err => dbDebugger('could not connect to mongodb', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('coursesData', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'MEAN',
        author: '1aman1',
        tags: ['books', 'kindle'],
        isPublished: true
    });

    const result = await course.save();
    console.log(result);
};

createCourse();