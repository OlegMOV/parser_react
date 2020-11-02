const { Router } = require('express')
const router = Router()
const { PythonShell } = require('python-shell')

// api/parser/create
router.post('/create', async(req, res) => {
    try {
        const { url_target, mode } = req.body
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так' })

    }
})

router.get('/', (req, res) => {
    console.log(req.url)
    let options = {
        mode: 'text',
        pythonPath: 'c:\\Python38\\python.exe',
        pythonOptions: ['-u'], // get print results in real-time
        scriptPath: 'D:\\My_software\\REACT\\parser\\python_scripts\\',
        args: ['value1', 'value2', 'value3']
    }
    try {
        PythonShell.run('test.py', options, (err, results) => {
            console.log(results)
        })
    } catch (error) {
        console.log(error)
    }
    res.send('Oleh')
})

module.exports = router