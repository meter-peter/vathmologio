const PORT = process.env.PORT || 5000;

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors')

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors({ origin: ['http://localhost:8080'], }))



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











const auth = require('./routes/api/auth');
app.use('/api/auth',auth);

const lessons = require('./routes/api/lessons');
app.use('/api/lessons',lessons)

// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// })


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})