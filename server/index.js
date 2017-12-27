const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.get('/api', function(req, res) {
  res.json({
    text: 'my api'
  });
});

app.post('/api/login', function(req, res) {
  const user = { id: 3 };
  const token = jwt.sign({ user }, 'secret_key');
  res.json({
    token: token
  });
});

app.get('/api/protected', ensureToken, function(req, res) {
  jwt.verify(req.token, 'secret_key', (err, data) => {
    if (err) { res.sendStatus(403) };
    res.json({
      text: 'this is protected',
      data
    });
  })
});

function ensureToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if(typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next();
  } else {
    res.sendStatus(403);
  }
}

app.listen(3000, function() {
  console.log('App is listening on port 8080');
})
