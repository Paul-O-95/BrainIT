const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const configure = require('./server/configure.js');

const app = express();

const PORT = process.env.PORT || 2019;
configure(app);

process.on('uncaughtException', err => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(process.env.DATABASE);
  console.log(err.name, err.message);
  process.exit(1);
});

dotenv.config();

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log('DB connection successful!'));

app.listen(PORT, () => {
  console.log(`This application is now listening on port ${PORT}`);
});
