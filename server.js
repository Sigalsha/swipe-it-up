const express = require('express');
const bodyParser = require('body-parser') 
// const passport = require('./passport');
const app = express();
const mongoose = require('mongoose'); 
//const dbApi = require('./server/routes/dbApi')
const mongooseApiTest = require('./server/routes/mongooseApiTest');

mongoose.connect('mongodb://localhost/swipeDB', function() {
  console.log("DB connection established!!!");
})

//bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({ extended: false }))

// app.use(dbApi)
app.use('/', mongooseApiTest);


const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));






