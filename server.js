const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Bring in the Database Config and connect with the database
const db = require('config/keys').mongoURI;
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false

}).then(() => {
    console.log(`Database connected successfully ${db}`)
}).catch(err => {
    console.log(`Unable to connect with the database ${err}`)
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
})