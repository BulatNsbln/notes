const express = require('express');
const bodyParser = require('body-parser');

const notes = require('./routes/notes');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/notes', notes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express app available at http://localhost:${port}`);
});

module.exports = app;
