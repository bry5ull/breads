require('dotenv').config()
const express = require('express')
const breadsController = require('./controllers/breads_controller.js')

const app = express()


// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// ROUTES
app.use('/breads', breadsController)

app.get('/', (req, res) => {
    res.send('Welcome to an Awesome App about Breads!')
  })

// LISTEN
const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log('listening at port', PORT);
})
