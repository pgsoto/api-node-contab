const app = require('./src/app')

// const PORT = process.env.APP_SERVER_PORT || 8000;

async function main(){
    await app.listen(process.env.APP_SERVER_PORT  || 8000)
    console.log('Server funciona bien! en puerto: ', process.env.APP_SERVER_PORT || 8000)
}


main()