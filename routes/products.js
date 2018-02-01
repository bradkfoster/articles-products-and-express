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

}).post('/',(req,res)=>{

product.insert(req.body);
res.send(valid);
}).put('/',(req,res)=>{

  
  res.send(valid);
  })




module.exports = router;