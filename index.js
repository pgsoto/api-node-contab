const express = require('express');
const config = require('./src/server/config');
const app = config(express());

//config
require('./src/config/config')

// database
require('./src/config/database');

app.set('port', (process.env.PORT || 8000));


app.get('/', function(request, response) {
    var result = 'Server está funcionando'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('Server funciona en el puerto ', app.get('port'));
});