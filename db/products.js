let productData = []; 
let productId = 1;
//{ id: Number, name: String, price: Number, inventory: Number }


function get(){
  console.log(produceData);
  return productData;
}

function insert(req){
  productId++
  let newProduct = {
    id:productId,
    name: req.name,
    price:parseInt(req.price),
    inventory:parseInt(req.inventory)
  }

  productData.push(newProduct);
console.log(newProduct);
}





module.exports = {
  get:get,
  insert:insert
}
