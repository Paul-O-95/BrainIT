import express from 'express';
import exphbs from 'express-handlebars';
import Routes from './routes.js';
import path from 'path';



const __dirname = path.resolve();
let controllers = app => {

    app.use(Routes);
    app.use('/public/', express.static(path.join(__dirname, '../public')));
    app.engine('handlebars', exphbs.create({
        defaultLayouut: 'main',
        layoutDir: app.get('views') + '/layout',
        partialDir: app.get('views')
    }).engine);
    app.set('view engine', 'handlebars');

    return;
};

export default controllers;