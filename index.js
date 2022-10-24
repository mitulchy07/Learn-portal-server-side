const express = require('express');
const app = express();
const Port = process.env.port || 3000;
const cors = require('cors');
app.use(cors());

const categories = require('./Data/categories.json');
const products = require('./Data/products.json');

app.get('/', (req, res) => {
  res.send('Products API Running');
});

app.get('/categories', (req, res) => {
  res.send(categories);
});

app.get('/products', (req, res) => {
  res.send(products);
});

app.get('/categories/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  const category_products = products.filter((n) => n.category === id);
  res.send(category_products);
});

app.get('/products/:id', (req, res) => {
  const id = req.params.id;
  const selectedproducts = products.find((n) => n.id === id);
  res.send(selectedproducts);
});

app.listen(Port, () => {
  console.log('Products Server running on port', Port);
});
