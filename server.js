const express = require('express')

require('dotenv').config()
const PORT = process.env.PORT
const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to a bread app!')
})

const breadsController = require('./controllers/breads_controllers.js')
app.use('/breads', breadsController)

app.listen(PORT, () => {
    console.log('noming at port', PORT)
})