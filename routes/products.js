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
  let body = req.body;
  let id = req.params.id;
  console.log(body);
  console.log('put is working');
  product.editProduct(body, id);
  res.redirect(`/products/${id}`)
})


.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  let prodInd = product.findId(id);
  res.render('productViews/product', prodInd);
})



.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  let prodInd = product.findId(id);
  res.render('productViews/editpro', prodInd)
})

.delete('/:id', function (req, res) {
  
 
  let body = req.body;
  let id = req.params.id;
  let checker = product.deleteProduct(body, id)
  
    console.log(id);
    product.deleteProduct(body, id);
    res.redirect('/products') 
 
});






module.exports = router;








































