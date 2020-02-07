const app = require('./src/app')

// const PORT = process.env.APP_SERVER_PORT || 8000;

app.set('port', (process.env.PORT || 8000));

async function main(){
    await app.listen(process.env.APP_SERVER_PORT  || 8000)
    console.log('Server funciona bien! en puerto: ', process.env.APP_SERVER_PORT || 8000)
}

app.get('/', function(request, response) {
    var result = 'Server está funcionando'
    response.send(result);
}).listen(app.get('port'), function() {
    console.log('Server funciona en el puerto ', app.get('port'));
});


main()