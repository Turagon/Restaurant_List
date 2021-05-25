const express = require('express')
const exphbs = require('express-handlebars')
const restaurants = require('./restaurant.json')
const restaurantList = restaurants.results
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/home', (req, res) => {
  res.render('cards', { restaurant: restaurantList })
})

app.get('/search', (req, res) => {
  let keyword = req.query.keyword.toLowerCase()
  restaurantSearch = restaurantList.filter(item => {
    return item.name_en.toLowerCase().includes(keyword)
  })
    res.render('cards', { restaurant: restaurantSearch })
})

app.get('/home/:restaurant_id', (req, res) => {
  let restaurant = restaurantList.filter(item => {
    return item.id.toString() === req.params.restaurant_id
  })
  res.render('detail', { restaurant: restaurant })
})

app.listen(port, () => {
  console.log('server online now')
})