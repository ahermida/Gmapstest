const express = require('express');
const app = express();

app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendfile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.ENV.PORT || 8080);
