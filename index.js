const express = require('express');
const app = express();
const Port = process.env.port || 3000;
const courseCollection = require('./Data/products.json');

app.get('/', (req, res) => {
  res.send('API is running.');
});

app.get('/categories', (req, res) => {
  res.send(courseCollection);
});

app.listen(Port, () => {
  console.log('Server is running on port:', Port);
});
