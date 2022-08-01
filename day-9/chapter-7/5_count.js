const mongoose = require('mongoose')
const dbDebugger = require('debug')('app:db')

mongoose.connect('mongodb://node:node@3.89.20.236:27017/nodedb')
    .then(() => dbDebugger('connected to mongodb'))
    .catch(err => dbDebugger('could not connect to mongodb', err))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    price: Number,
    isPublished: Boolean
});

const Course = mongoose.model('courseDatastore', courseSchema)

async function createCourse() {
    // const course = new Course({
    //     name: 'NodeJS',
    //     author: '1aman1',
    //     tags: ['books', 'kindle'],
    //     price: 19,
    //     isPublished: true
    // });

    const course = new Course({
        name: 'MongoDB',
        author: '1aman1gupta',
        tags: ['paper', 'boat'],
        price: 9,
        isPublished: true
    });

    const result = await course.save();
};

createCourse();

async function getCourses() {

    // $eq, $ne, $lt, $lte, $gt, $gte, $in [], $nin []

    // and
    // or

    const result = await Course
        .find({
            // price: { $eq: 19 },
            author: /.*1aman1.*/i
        })
        .or({ isPublished: true })
        .count();

    console.log(result);
};

// getCourses();