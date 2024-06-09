const express = require('express')

const Fit = require('../models/fitModel')
const {
    getFits,
    getFit,
    createFit,
} = require('../controllers/fitController')

const router = express.Router()

//Get all fit log
router.get("/", getFits)

//Get a single fit long
router.get('/:id', getFit)

//Add a new fit log
router.post('/', createFit)

//Delete an existing fit log
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a fit log'})
})

//Update an existing fit log
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a fit log'})
})

module.exports = router