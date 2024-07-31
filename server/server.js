import express from 'express';
import path from 'path';
const app = express();

// Serve static files from the dist directory
app.use(express.static(path.join('dist')));

// Handle all routes and serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join('dist', 'index.html'));
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
