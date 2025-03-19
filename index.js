import express from 'express';

const app = express();

// Use the port from the environment variable, default to 4000 if not set
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/ping', (req, res) => {
  res.send('pong');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

