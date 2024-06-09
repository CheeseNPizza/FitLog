require('dotenv').config()

const express = require('express')
const fitRoutes = require('./routes/fit')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/fit', fitRoutes)

//Listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port', process.env.PORT)
})