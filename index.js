const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())

const Port = process.env.Port || 5000;
const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send('Api Server is Running')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const singleCourse = courses.find(course => course.id === id);
    res.send(singleCourse);
})


app.listen(Port, () => {
    console.log('Server is up and Running')
})