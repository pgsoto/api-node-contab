const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors())

// app.use(morgan('dev'))
app.use(morgan(app.get('env') === 'production' ? 'combined' : 'dev'));

app.use(require('./routes/index'))

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

module.exports = app