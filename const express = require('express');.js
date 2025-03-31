const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

const commentsFile = 'comments.json';

// Load comments from file
function loadComments() {
  if (fs.existsSync(commentsFile)) {
    const data = fs.readFileSync(commentsFile);
    return JSON.parse(data);
  }
  return [];
}

// Save comments to file
function saveComments(comments) {
  fs.writeFileSync(commentsFile, JSON.stringify(comments, null, 2));
}

// Get comments
app.get('/comments', (req, res) => {
  const comments = loadComments();
  res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
  const comments = loadComments();
  const newComment = req.body.comment;
  comments.push(newComment);
  saveComments(comments);
  res.status(201).json(newComment);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});