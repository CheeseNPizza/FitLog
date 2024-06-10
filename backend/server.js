require('dotenv').config()

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fitRoutes = require('./routes/fit')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/fit', fitRoutes)

app.use(cors({origin: "3000"}))

//Connect to database
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        //Listen for request
        app.listen(process.env.PORT, () => {
            console.log('Connected to db & listening on port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })