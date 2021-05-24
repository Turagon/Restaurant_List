const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({defaultLayout : 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/home', (req, res) => {
  res.render('main')
})



app.listen(port, () => {
  console.log('server online now')
})