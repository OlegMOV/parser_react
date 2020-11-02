const express = require('express')
const config = require('config')
const app = express()

app.use('/api/parser', require('./routes/parser.routes'))
app.get('/', (req, res) => {
    console.log('ffff')
})
app.get('/api/parser', (req, res) => {
    console.log('gggggg')
})

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