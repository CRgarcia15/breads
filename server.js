const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const breadsController = require('./controllers/breads_controllers.js')
const bakersController = require('./controllers/bakers_controller.js')
const methodOverride = require('method-override')
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
   () => {console.log('connected to mongo: ', process.env.MONGO_URI)} )

//MIDDLEWARE   
app.use(express.static('public')) 
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/breads', breadsController)
app.use('/bakers', bakersController)

app.get('/', (req, res) => {
    res.send('Welcome to a bread app!')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log('noming at port', PORT)
})
