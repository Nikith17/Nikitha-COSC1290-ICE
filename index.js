const express = require('express');
const app = express();
const port = 3000;

// Middleware for logging requests (optional)
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// A simple GET route
app.get('/', (req, res) => {
    res.send('Hello, World! This is the AWS CodePipeline demo.');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
