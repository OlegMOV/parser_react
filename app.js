const express = require('express')
const config = require('config')
const app = express()

app.use('api/parser', require('./routes/parser.routes'))

const PORT = config.get('port') || 5000

async function start() {
    try {
        app.listen(PORT, () => console.log(`Start server on port: ${PORT}`))
    } catch (e) {
        console.log(e.message)
        process.exit(1)
    }
}

start()