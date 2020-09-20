const express = require('express');

const addRoutes = require('./routes');

const app = express();

addRoutes(app);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Express app available at http://localhost:${port}`);
});

module.exports = app;
