const { Router } = require('express')
const router = Router()
const { PythonShell } = require('python-shell')
const fs = require('fs')

// api/parser/create
router.post('/create', async(req, res) => {
    try {
        const { url_target, mode } = req.body
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так' })

    }
})

router.get('/', (req, res) => {
    try {
        // const { url_target, mode } = req.body
        let mode_parser = 'xpath_all_link' //'html'
        let url_target = ['https://ua.112.ua/polityka'] //['https://ua.112.ua/ato/den-u-raioni-oos-boiovyky-odyn-porushyly-peremyria-vtrat-nemaie-547377.html']
        let line_arg = {
            'links': url_target,
            'type_out': '.stdout',
            'dir_out': 'D:\\My_software\\REACT\\parser\\routes\\temp',
            'x1': { "xpath_all_link": "//ul[@class='tabs-news-list']/li/a/@href", }
        }
        let options = {
            mode: 'text',
            pythonPath: 'd:\\My_software\\package_parser\\venv\\Scripts\\python.exe',
            pythonOptions: ['-u'], // get print results in real-time
            scriptPath: 'D:\\My_software\\package_parser\\pkg_parser_mov',
            args: [JSON.stringify(line_arg)] //'value1', 'value2', 'value3'
        }
        PythonShell.run('loader_content.py', options, (err, results) => {
            if (err) throw err
            if (mode_parser === 'html') {
                try {
                    const [key, body] = Object.entries(JSON.parse(results))[0]
                    if (body.startsWith('<!DOCTYPE')) {
                        fs.writeFileSync(__dirname + '/temp/tempFile.html', body, err => {
                            console.log(err)
                        })
                        res.send(`<a href='tempFile.html' target='blank'>${key}</a>`)
                    } else throw 'Error'
                } catch (error) {
                    res.send('<h1> Не вдалося завантажити сторінку </h1>')
                }
            } else if (mode_parser === 'xpath_all_link') {
                let temp = JSON.parse(results)
                let list_link = temp[mode_parser].split('\r\n')
                res.send(list_link.map(link => `<a href="${link}">${link}</a>`).join('<br>'))
                    // console.log(results)
                    // console.log(Object.keys(results))
                    // res.send(Object.entries(JSON.parse(results)))
            }
        })
    } catch (error) {
        console.log(error)
    }
})

router.get('/tempFile.html', (req, res) => {
    try {
        res.writeHead(200, { 'Content-Type': 'text/html; charsetutf-8' })
        fs.createReadStream(__dirname + '/temp/tempFile.html').pipe(res)
    } catch (error) {
        console.log(error)
    }
})

module.exports = router