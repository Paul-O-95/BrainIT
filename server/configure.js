const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
const Routes = require('./routes/tutor.routes.js');

const controllers = app => {
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(Routes);
  app.use('/public/', express.static(path.resolve(__dirname, '../public')));
  app.engine(
    'handlebars',
    exphbs.create({
      defaultLayouut: 'main',
      layoutDir: `${app.get('views')}/layout`,
      partialDir: app.get('views')
    }).engine
  );
  app.set('view engine', 'handlebars');
};

module.exports = controllers;
