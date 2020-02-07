const app = require('./src/app')

const PORT = process.env.APP_SERVER_PORT || 3000;

async function main(){
    await app.listen(PORT || 8000)
    console.log('Server funciona bien! en puerto: ', PORT)
}


main()