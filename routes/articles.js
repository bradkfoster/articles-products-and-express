const express = require('express');
const bodyParser = require('body-parser');
const articles = require('../db/articles')

const app = express();

const router = express.Router();
app.use(bodyParser.urlencoded({
  extended: true
}));

router.post('/', (req,res)=>{
  console.log(encodeURI('gjdjgok'))
  let body = req.body;
  articles.insert(body);
  console.log(articles.get())
  res.redirect('/articles');
})

router.get('/', (req,res)=>{
  res.render('articleViews/index', {art: articles.get()})
})




module.exports = router;









