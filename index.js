const express = require('express');
const app = express();
const Port = process.env.port || 3000;

app.get('/', (req, res) => {
  res.send('API is running.');
});

app.listen(Port, () => {
  console.log('Server is running on port:', Port);
});
