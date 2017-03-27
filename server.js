const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(''));
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 8080);
