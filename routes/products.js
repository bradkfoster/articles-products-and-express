const express = require('express');
const bodyParser = require('body-parser');
const product = require('../db/products');
const knex = require('../knex/knex.js')

const app = express();


const router = express.Router();
app.use(bodyParser.urlencoded({
  extended: true
}));


router

.post('/', (req, res) => {
 let body = req.body;
 let newProd = {
   name:body.name,
   price:parseInt(body.price),
   inventory:parseInt(body.inventory)
 }
return knex(`products`).insert(newProd, '*')
.then((result)=>{
  res.redirect('/products')
})
})

.get('/new', (req, res) => {
  return res.render('productViews/newpro')
})

.get('/', (req, res) => {
  return knex.select('*').from('products')
  .then((result)=>{
    res.render('productViews/indexpro', {pro: result})
  })

.catch((err)=>{
  res.render('products/new')
})
})

.put('/:id', function (req, res) {
  let updateID = req.params.id;
  let tempObj = {
    name: req.body.name,
    price:req.body.price,
    inventory:req.body.inventory
  }
  return knex.select('*').from('products').where('id', updateID)
  .then((result)=>{
    
      return knex('products').where('id', updateID ).update(tempObj).select('*')
      .then((result)=>{
        res.redirect(`/products/${updateID}`)
      })
      .catch((err)=>{
        res.redirect(`/products/${updateID}`);
      })
    
  })
  // let body = req.body;
  // let id = req.params.id;
  // console.log(body);
  // console.log('put is working');
  // product.editProduct(body, id);
  // res.redirect(`/products/${id}`)
})


.get('/:id', (req, res) => {
 let inputID = req.params.id;
 
 return knex.select('*').from('products').where('id', inputID)
 .then((result)=>{
  if(result.length >0){ 
  console.log(result)
   res.render('productViews/product',result[0]);
  }else{
    res.redirect('/products')
  }
 })
.catch((err)=>{
  res.redirect('/products')
  
})
})



.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  return knex.select('*').from('products').where('id', id)
  .then((result)=>{
    console.log(result);
    res.render('productViews/editpro',result[0])
  })
  .catch((err)=>{
    res.render('/products');
  })
})

.delete('/:id', function (req, res) {
 let id = req.params.id;
 return knex('products').where('id',id).del()
.then((result)=>{
  res.redirct('/products');
})
.catch((err)=>{
  res.redirect('/products');
})
});






module.exports = router;








































