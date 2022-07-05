const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
const breadsController = require('./controllers/breads_controllers.js')
const methodOverride = require('method-override')

//MIDDLEWARE   
app.use(express.static('public')) 
app.set('views', __dirname + '/views')
app.use(express.urlencoded({extended: true}))
app.use('/breads', breadsController)
app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.get('/', (req, res) => {
    res.send('Welcome to a bread app!')
})

app.get('*', (req, res) => {
    res.send('404')
})

app.listen(PORT, () => {
    console.log('noming at port', PORT)
})
