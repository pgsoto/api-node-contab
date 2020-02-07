const { Router } = require('express')
const os = require('os');
const router = Router()

router.get('/', (req, res) => res.json({message: 'THE WORLD'}))

// router.get('/', (req, res) => {
//     res.json({
//       ...req.headers,
//       hostname: os.hostname(),
//       date: new Date().toISOString()
//     })
// })

module.exports = router