const express = require('express');
const bodyParser = require('body-parser') 
// const passport = require('./passport');
const app = express();
// const user = require('./routes/user')

//bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));






