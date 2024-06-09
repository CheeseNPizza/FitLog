const Fit = require('../models/fitModel')
const mongoose = require('mongoose')

//get all fitlog
const getFits = async (req, res) => {
    const fits = await Fit.find({}).sort({createdAt: -1})

    res.status(200).json(fits)
}

//get a single fitlog
const getFit = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such fit log"})
    }

    const fit = await Fit.findById(id)

    if (!fit) {
        return res.status(404).json({error: 'No such fit log'})
    }

    res.status(200).json(fit)
}

//create a new fitlog
const createFit = async (req, res) => {
    const {title, load, reps} = req.body

    try {
        const fit = await Fit.create({title, load, reps})
        res.status(200).json(fit)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

//delete an exisitng fitlog

//update an exisitng fitlog

module.exports = {
    getFits,
    getFit,
    createFit
}