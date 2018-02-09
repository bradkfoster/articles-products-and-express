const express = require('express');
const bodyParser = require('body-parser');
const knex = require('../knex/knex.js');

const app = express();

const router = express.Router();
app.use(bodyParser.urlencoded({
  extended: true
}));
router
.get('/',(req,res)=>{
  console.log('working')
  return knex.select('*').from('articles')
  .then((result)=>{
    res.render('articleViews/index', {art: result})
  })
  .catch((err)=>{
    return res.json({message:'err'})
  })
})

.post('/', (req,res)=>{
  let data = {title,body,author} = req.body;
  data.title = data.title.split(' ').join('');
  return knex('articles').insert(data,'*')
  .then((result)=>{
    res.redirect('/articles')
  })
  .catch((err)=>{
  return res.json({message:'err'})
  })
})

.get('/new',(req,res)=>{
  return res.render('articleViews/new')
})

.get('/:id', (req,res)=>{
  let art = req.params.id;


  return knex.select('*').from('articles').where('title',art)
  .then((result)=>{
    res.render('articleViews/article',result[0])
  })
  .catch((err)=>{
    res.status(404).json({message:'err'})
  })
})

.get('/:id/edit',(req,res)=>{
  let art = req.params.id;
  
  return knex.select('*').from('articles').where('title',art)
  .then((result)=>{
    console.log('sodikjhfguisjhfuishfuisisufh')
    res.render('articleViews/edit', result[0])
  })
  .catch((err)=>{
    res.redirect(`/articles/${art}`);
  })
})

.put('/:id',(req,res)=>{
  
  let id = req.params.id;
  let data = {body,author} = req.body
  data.title = id;
  console.log(data);
  return knex('articles').where('title', id).update(data).select('*')
  .then((result)=>{
    res.redirect(`/articles/${id}`)
  })
  .catch((result)=>{
    res.redirect(`/articles/${id}`)
  })
})
.delete('/:id',(req,res)=>{
let id = req.params.id;
return knex('articles').where('title', id).del()
.then((result)=>{
  res.redirect('/articles')
})
})






module.exports = router;









