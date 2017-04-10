var express = require('express'),
  app = express(),
  
  port = 8155;

app.get('/', (req, res) => res.sendFile('./example/index.html', { root: __dirname}));
app.get('/favicon.ico', (req, res) => res.type('text/icon').send('I do not care'));
app.get('/dist/application.js', (req, res) => res.sendFile('./dist/application.js', {root: __dirname}));

app.listen(port, () => {
  console.log(`\n\nStarted server on port ${port}.\n\n`);
});
