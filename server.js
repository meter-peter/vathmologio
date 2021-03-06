const PORT = process.env.PORT || 5000;
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const passport = require('passport');
app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({ origin: ['http://localhost:8080'], }))

app.use(cors());

app.use(passport.initialize());
require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});

const excel = require('./routes/api/excel');
app.use('/api/grades/excel',excel);

const auth = require('./routes/api/auth');
app.use('/api/auth',auth);

const lessons = require('./routes/api/lessons');
app.use('/api/lessons',lessons)

const admin = require('./routes/admin')
app.use('/admin',admin);

const didaskalies = require('./routes/api/didaskalies');
app.use('/api/didaskalies',didaskalies);

const teacher = require ('./routes/api/teacher');
app.use('/api/teacher',teacher);

const student = require('./routes/api/student');
app.use('/api/student',student);
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})