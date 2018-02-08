const express = require('express');
const bodyParser = require('body-parser');
const product = require('../db/products')

const valid = {
  "success": true
};
const notValid = {
  "success": false
};

const app = express();


const router = express.Router();
app.use(bodyParser.urlencoded({
  extended: true
}));




router.post('/', (req, res) => {
  let body = req.body;

  if (product.insert(body)) {
    return res.redirect('/products')
  } else {
    return res.redirect('products/new')
  }
})

router.get('/new', (req, res) => {
  return res.render('productViews/newpro')
})

router.get('/', (req, res) => {
  res.render('productViews/indexpro', {
    pro: product.get()
  });

})

router.put('/:id', function (req, res) {
  let body = req.body;
  let id = req.params.id;
  console.log(body);
  console.log('put is working');
  product.editProduct(body, id);
  res.redirect(`/products/${id}`)
})


router.get('/:id', (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  let prodInd = product.findId(id);
  res.render('productViews/product', prodInd);
})



router.get('/:id/edit', (req, res) => {
  let id = req.params.id;
  console.log(req.params.id);
  let prodInd = product.findId(id);
  res.render('productViews/editpro', prodInd)
})

router.delete('/:id', function (req, res) {
  
 
  let body = req.body;
  let id = req.params.id;
  let checker = product.deleteProduct(body, id)
  
    console.log(id);
    product.deleteProduct(body, id);
    res.redirect('/products') 
 
});






module.exports = router;








































