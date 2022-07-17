const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors()); 
app.get('/', (req, res) => {

  return res.json( [
    {name: 'Manoel Rios', age: 21, photo: 'https://i.imgur.com/oYiTqum.jpg'},
    {name: 'Duda Martins', age: 21, photo: 'https://i.imgur.com/oYiTqum.jpg'},
    {name: 'Ana Martins', age: 50, photo: 'https://i.imgur.com/oYiTqum.jpg'}
  ])

});

app.listen('3000', console.log('Listening on 3000 port'));