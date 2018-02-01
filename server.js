const express = require('express');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser');
const articles = require('./routes/articles')
const products = require('./routes/products')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.engine('.hbs', handlebars({defaultLayouts: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use('/products',products);
app.use('/articles',articles);




app.listen(PORT, (err) => {
  if(err){
    throw err;
  }
  console.log(`Server is up on ${PORT}`)
})
