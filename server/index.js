const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/rate-article', (req, res) => {
  res.send({ success: true });
});

app.put('/suggest-news', (req, res) => {
  const text = req.body.content; /* мы передали в объекте HTTP запроса content, а обращались к text */

  if (!text) {
    res.status(500);
  }

  res.send({
    success: !!text,
  });
});

app.listen(3001);
