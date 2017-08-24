// import express
const express = require('express');

// set the app
const app = express();

// set view engine
app.set('views', './views');
app.set('view engine', 'pug');

// set static files
app.use('/public', express.static('public'));

// install routes
app.use(require('./routes/routes'));

// run server
app.listen(3000, function (req, res) {
	// notify
	console.log('app listening on port 3000');
});