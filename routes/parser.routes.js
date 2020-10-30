const { Router } = require('express')
const router = Router()

// api/parser/create
router.post('/create', async(req, res) => {
    try {
        const { url_target, mode } = req.body
    } catch (e) {
        res.status(500).json({ message: 'Щось пішло не так' })

    }
})

module.exports = router