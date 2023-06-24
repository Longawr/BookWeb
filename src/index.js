const path = require('path');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');
const route = require('./routes');
const db = require('./config/db');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
//app.use(morgan('combined'));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'resources', 'views'));

//connect to database
db.connect();

//route
route(app);

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});