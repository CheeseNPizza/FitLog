const express = require('express')

const Fit = require('../models/fitModel')
const {
    getFits,
    getFit,
    createFit,
    deleteFit,
    updateFit
} = require('../controllers/fitController')

const router = express.Router()

//Get all fit log
router.get("/", getFits)

//Get a single fit long
router.get('/:id', getFit)

//Add a new fit log
router.post('/', createFit)

//Delete an existing fit log
router.delete('/:id', deleteFit)

//Update an existing fit log
router.patch('/:id', updateFit)

module.exports = router