const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 8080);
