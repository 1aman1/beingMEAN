const mongoose = require('mongoose')
const dbDebugger = require('debug')('app:db')

mongoose.connect('mongodb://3.94.85.60:27017/mongo-exercises')
    .then(() => dbDebugger('connected to database'))
    .catch(() => dbDebugger('Failed to connect to database'))

const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: Date,
    isPublished: Boolean,
    price: Number
});

const Course = mongoose.model('courses', courseSchema);

async function getData() {
    return await Course
        .find({ isPublished: true, tags: { $in: ['frontend', 'backend'] } })
        .lean()
        .sort({ price: -1 })
        .select('name author price');
}

async function run() {
    const result = await getData();
    console.log(result)
}

run();