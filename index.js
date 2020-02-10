const express = require('express');
const mongoose = require('mongoose');
const configure = require('./server/configure.js');

const app = express();

const PORT = process.env.PORT || 2019;
configure(app);

app.listen(PORT, () => {
  console.log(`This application is now listening on port ${PORT}`);
});
