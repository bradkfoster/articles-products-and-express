const express = require('express');
const bodyParser = require('body-parser');
const product = require('../db/products')


const router = express.Router();
const app = express();


// router.get('/',(req,res)=>{


// })
// .post('/',(req,res)=>{

  
// })

module.exports = router;










// router.get('/', (req,res) => {
//   res.render('./articles/index', {articles : Articles.getAllArticles()});
// });

// router.get('/new', (req,res) => {
//   res.render('./articles/new');
// });

// router.get('/:title', (req, res) => {
//   console.log(req.params.title);
//   res.render('./articles/article', {oneArticle : Articles.getArticleByTitle(req.params.title)});
// });

// router.get('/:title/edit', (req, res) => {
//   res.render('./articles/edit', {editArticle : Articles.getArticleByTitle(req.params.title)});
// });

// router.post('/new', (req,res) => {
//   Articles.setUrlTitle(req.body);
//   if(req.body) {
//     res.redirect('./');
//     console.log({'success' : true});
//   }else{
//     res.redirect('back');
//     console.log({'success' : false});
//   }
// });

// router.put('/:title/edit', (req, res) => {
//   Articles.editArticle(req.params.title, req.body);
//   if(req.params.title && req.body) {
//     res.redirect('./');
//     console.log({'success' : true});
//   }else{
//     res.redirect('back');
//     console.log({'success' : false});
//   }

// });

// router.delete('/:title/edit', (req, res) => {
//   Articles.deleteArticle(req.params.title);
//   if(req.params.title) {
//     res.redirect('/articles');
//     console.log({'success' : true});
//   }else{
//     res.redirect('back');
//     console.log({'success' : false});
//   }
// });
