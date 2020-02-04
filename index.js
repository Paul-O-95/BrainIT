import express from 'express';
import mongoose from 'mongoose';
import configure from './server/configure.js';

const app = express();

const PORT = process.env.PORT || 2019;
configure(app);


app.listen(PORT, () => {
    console.log(`This application is now listening on port ${PORT}`);
});