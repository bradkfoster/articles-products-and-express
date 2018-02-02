let productData = [];
let productId = 2;
//{ id: Number, name: String, price: Number, inventory: Number }
let fakeData = {
  id:1,
  name: 'coffee',
  price: 2,
  inventory:10
}
let fakeData2 = {
  id:2,
  name: 'tea',
  price: 3,
  inventory:15
}
productData.push(fakeData)
productData.push(fakeData2)

function get() {
  console.log(productData);
  return productData;
}

function insert(req) {
  
  if(isValid(req)){
 productId++
  let newProduct = {
    id: productId,
    name: req.name,
    price: parseInt(req.price),
    inventory: parseInt(req.inventory)
  }

  productData.push(newProduct);
  console.log(productData);
  return true
  }else{
    console.log('res.redirect?')
  }
}


function isValid(data) {
  let checkPrice = parseFloat(data.price);
  let checkInventory = parseFloat(data.inventory);
  let checkName = parseFloat(data.name);
  if (!isNaN(checkPrice) && !isNaN(checkInventory) && isNaN(checkName)) {
    console.log('valid')
    return true
  } else {
    console.log('invalid')
    return false
  }
}

function findId(id){
  id = parseInt(id);
  let ind = productData.findIndex(elem => elem.id === id);
  return productData[ind];
}


function editProduct(product, id) {

  id = parseInt(id);
  productData.filter((element) => {
    if (element.id === id) {
      return element;
    }else{
      return false;
    };
  }).map((element) => {
    element.inventory = parseFloat(product.inventory);
    element.name = product.name;
    element.price = parseFloat(product.price);
    return element;
  });
};

function deleteProduct(product, id){

  console.log('made it to delete function')
  id = parseInt(id);
  
  let ind = productData.findIndex(elem => elem.id === id);
  console.log(ind);
  if (ind >= 0) {
    console.log('sliced')
    productData.splice(ind,1);
    console.log(productData);
  
  }
}



module.exports = {
  get: get,
  insert: insert,
  editProduct:editProduct,
  deleteProduct:deleteProduct,
  findId:findId
}