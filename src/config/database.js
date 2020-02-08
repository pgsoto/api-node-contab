const mongoose = require('mongoose');

mongoose.connect(process.env.URL_DB, {
        useNewUrlParser: true,
        useCreateIndex: true
    })
    .then(db => console.log('DB está conectada'))
    .catch(err => console.log(err));