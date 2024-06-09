const express = require('express')

const Fit = require('../models/fitModel')

const router = express.Router()

//Get all fit log
router.get("/", (req, res) => {
    res.json({msg: 'Get all fit log'})
})

//Get a single fit long
router.get('/:id', (req, res) => {
    res.json({msg: 'Get a single fit log'})
})

//Add a new fit log
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const fit = await Fit.create({title, load, reps})
        res.status(200).json(fit)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//Delete an existing fit log
router.delete('/:id', (req, res) => {
    res.json({msg: 'Delete a fit log'})
})

//Update an existing fit log
router.patch('/:id', (req, res) => {
    res.json({msg: 'Update a fit log'})
})

module.exports = router