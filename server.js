const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios')

app.use(cors()); 
app.get('/api/photos', async (req, res) => {

  try {

    const { data } = await axios('https://jsonplaceholder.typicode.com/photos')
    return res.json(data)
    
  } catch (error) {
    console.error(error);
  }
});

app.listen('4567', console.log('Listening'));