var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureAunthenticated, function(req, res, next) {
	res.render('index', { title: 'Members' });
});

function ensureAunthenticated(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/users/login');
}

module.exports = router;
