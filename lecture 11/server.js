const express = require('express');
const app = express();
const PORT = 3000;

app.get(':id', (req, res) => {
  console.log(req.params.id);
  res.send('Hello, World!');
});

app.get('/', (req, res) => {
  console.log(req.params.id);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});