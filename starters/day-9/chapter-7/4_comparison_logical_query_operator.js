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
    price: Number,
    isPublished: Boolean
});

const Course = mongoose.model('coursesdata', courseSchema);

async function createCourse() {
    const course = new Course({
        name: 'NodeJS',
        // name: ',MongoDB',
        author: '1aman1',
        tags: ['books', 'kindle'],
        price: 19,
        // price: 9,
        isPublished: true
    });

    const result = await course.save();
};

// createCourse();

async function getCourses() {

    // $eq
    // $ne
    // $lt
    // $lte
    // $gt
    // $gte
    // $in []
    // $nin []

    // and
    // or

    const result = await Course
        .find({
            // price: { $eq: 19 },
            author: /.*1aman1.*/i
        })
        .or({ isPublished: true })
        .select({ name: 1 });

    console.log(result);
};

getCourses();