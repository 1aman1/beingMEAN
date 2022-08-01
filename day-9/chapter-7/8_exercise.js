const { Schema, mongo } = require('mongoose')
const mongoose = require('mongoose')
const dbDebugger = require('debug')('app:db')

mongoose.connect('mongodb://3.89.20.236:27017/nodedb')
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
/.*1aman1.*/i
async function getData() {
    return await Course
        .find({ isPublished: true })
        .or([
            { price: { $gte: 15 } },
            { name: /.*by.*/i }
        ])
        .lean()
        .sort({ price: -1 })
        .select('name author price');
}

async function run() {
    const result = await getData();
    console.log(result)
}

run();