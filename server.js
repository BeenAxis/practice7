const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  fs.readFile('/data/textfile.txt', 'utf8', (err, data) => {
    if (err) {
      res.status(500).send('Error reading file');
      return;
    }
    res.send(data);
  });
});

app.post('/', (req, res) => {
  const text = req.body.text;
  fs.writeFile('/data/textfile.txt', text, err => {
    if (err) {
      res.status(500).send('Error writing file');
      return;
    }
    res.send('File updated successfully');
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});