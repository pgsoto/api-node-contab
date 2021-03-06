const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan')
const cors = require('cors')
const errorHandler = require('errorhandler')
const routes = require('../routes/index');

module.exports = app => {
    app.use(express.static(path.resolve(__dirname, '../public')));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    
    app.use(cors())
    
    // app.use(morgan('dev'))
    app.use(morgan(app.get('env') === 'production' ? 'combined' : 'dev'));
    
    // app.use(require('../routes/index'))
    routes(app);
    
    app.get('/healthcheck', (req, res) => {
        res.json({ status: 'UP' });
    })
    
    app.get('/process', (req, res) => {
        res.json({ process: process.env });
    })
    
    app.use((_req, res, _next) => {
        res.sendStatus(404);
    })
      
    app.use((err, _req, res, _next) => {
        console.error(err.stack);
        res.sendStatus(500);
    })

    // Error Handling
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }

    return app;
}