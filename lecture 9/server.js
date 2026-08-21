const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('This is the about page.');
    }
);

app.get('/users', (req, res) => {
    res.send('<h1>Hello from the users</h1>');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
