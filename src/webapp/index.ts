// https://github.com/marko-js-samples/marko-webpack/blob/master/server.js
// Allow Node.js to require and load `.marko` files
require('marko/express');
require('marko/node-require');
const markoExpress = require('marko/express');

// require('marko/browser-refresh').enable();

// Express App
const express = require('express');
const serveStatic = require('serve-static');
const app = express();
const port = 3000;

app.use(markoExpress()); //enable res.marko(template, data)

// Routes
app.use('/static', serveStatic(__dirname + '/static'));
app.get('/', require('./pages/shared-screen'));

// Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`))