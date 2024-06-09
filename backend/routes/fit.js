const express = require('express')

const router = express.Router()

//Get all fit log
router.get("/", (req, res) => {
    res.json({msg: 'Get all fit log'})
})

router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single fit log'})
})

router.post('/', (req, res) => {
    res.json({msg: 'Post a new fit log'})
})

router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a fit log'})
})

router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a fit log'})
})

module.exports = router