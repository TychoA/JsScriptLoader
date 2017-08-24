// require express and init router
const express = require('express');
const router = express.Router();

// dummy data
const data = {
	title: 'title',
	body: 'body',
	author: 'author'
};

// set up routes
router.get('/', function (req, res) {
		// send data
		res.render('index', { data: data });
});

router.get('/about', function (req, res) {
	res.render('about', { data: data });
});

router.get('/book', function (req, res) {
	res.render('book');
});

// export module
module.exports = router;
