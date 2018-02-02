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
app.use(bodyParser.urlencoded({ extended: true }));



router.get('/',(req,res)=>{
console.log('working')
res.send('geeting')
//res.render('.productViews/indexpro)

}).post('/',(req,res)=>{
let body = req.body;
product.insert(body);
res.send(valid);
})

router.put('/:id', function (req, res) {
  let body = req.body;
  let id = req.params.id;
  console.log(id);
  product.editProduct(body, id);
  console.log(product.get());
  res.send(valid);
}).delete('/:id', function (req, res) {
  let body = req.body;
  let id = req.params.id;
  console.log(id);
  product.deleteProduct(body,id);
  res.send(valid);

});



module.exports = router;











































  //router.get('/new', (req,res) => {
  //res.render('./productViews/newPro');
//});

// router.get('/:id', (req, res) => {
//   res.render('./productViews/productsPro', {oneProduct : Products.getProductById(req.params.id)});
// });

// router.get('/:id/edit', (req, res) => {
//   res.render('./productViews/editPro', {editProduct : Products.getProductById(req.params.id)});
// });

// router.post('/new', (req,res) => {
//   Products.setId(req.body);
//   if (req.body) {
//     res.redirect('./');
//     console.log({'success' : true});
//   }else{
//     res.redirect('back');
//     console.log({'success' : false});
//   }
// });

// router.put('/:id/edit', (req, res) => {
//   Products.editProduct(req.params.id, req.body);
//   if(req.params.id && req.body){
//     res.redirect('./');
//     console.log({'success' : true});
//   }else{
//     res.redirect('back');
//     console.log({'success' : false});
//   }
// });

// router.delete('/:id/edit', (req, res) => {
//   Products.deleteProduct(req.params.id);
//   if (req.params.id) {
//     res.redirect('./');
//     console.log({'success' : true});
//   }else{
//     res.redirect('back');
//     console.log({'success' : false});
//   }
// });


