require('dotenv').config()
const express = require('express')
const breadsController = require('./controllers/breads_controller.js')

const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))


// ROUTES
app.use('/breads', breadsController)

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
  })

// 404 Page
app.get('*', (req, res) => {
  res.send('404')
})


// LISTEN
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('listening at port', PORT);
})
