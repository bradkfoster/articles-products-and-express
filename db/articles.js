let articleData = [];

let fakedata = {
  title: 'saap',
  body: 'something',
  author: 'some faka'
}

let fakedata2 = {
  title: 'book',
  body: 'anotherone',
  author: 'ben franklin'
}
articleData.push(fakedata,fakedata2);


function get(){
return articleData
}

function insert(data){
  console.log(data);
  let newArt = {
    title: data.title,
    body: data.body,
    author:data.author
  };
  articleData.push(newArt);
}






module.exports = {
  get:get,
  insert:insert
}
