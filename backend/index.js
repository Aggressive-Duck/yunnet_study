const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Hello World! Express server is running.');
});

// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({
    message: 'This is sample data from the API',
    timestamp: new Date()
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});