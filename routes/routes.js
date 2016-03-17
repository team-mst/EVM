var express = require('express');
var router = express.Router();

/* **************** FULL REQUESTS ******************** */
var defaultOpt = {
	root: __dirname + '../../server/views',
	dotfiles: 'deny'
};	
router.get('/', function(req, res) {
	 res.sendFile('index.html', defaultOpt, function (err) {
	 	if (err) {
	 		console.log(err);
	 		res.status(err.status).end();
	 	} else {
	 		console.log('Sent: ', 'index');
	 	}
	 });
});
var pagesOpt = {
	root: __dirname + '../../server/views/pages',
	dotfiles: 'deny'
};	
	router.get('/page/pyrtest', function(req, res) {
		 res.sendFile('pyrtest.html', pagesOpt, function (err) {
		 	if (err) {
		 		console.log(err);
		 		res.status(err.status).end();
		 	} else {
		 		console.log('Sent: ', 'pyrtest');
		 	}
		 });
	});

	router.get('/page/main', function(req, res) {
		 res.sendFile('main.html', pagesOpt, function (err) {
		 	if (err) {
		 		console.log(err);
		 		res.status(err.status).end();
		 	} else {
		 		console.log('Sent: ', 'main');
		 	}
		 });
	});

	router.get('/page/pulseIndex', function(req, res) {
		 res.sendFile('pulseIndex.html', pagesOpt, function (err) {
		 	if (err) {
		 		console.log(err);
		 		res.status(err.status).end();
		 	} else {
		 		console.log('Sent: ', 'pulseIndex');
		 	}
		 });
	});
	router.get('/page/pyrtest_mod', function(req, res) {
		 res.sendFile('pyrtest_mod.html', pagesOpt, function (err) {
		 	if (err) {
		 		console.log(err);
		 		res.status(err.status).end();
		 	} else {
		 		console.log('Sent: ', 'pyrtest_mod');
		 	}
		 });
	});

	router.get('/page/ECGgraph', function(req, res) {
		 res.sendFile('ECGgraph.html', pagesOpt, function (err) {
		 	if (err) {
		 		console.log(err);
		 		res.status(err.status).end();
		 	} else {
		 		console.log('Sent: ', 'ECGgraph');
		 	}
		 });
	});

// GET
// router.get('/getAllEvents/:year', function(req, res) {
// 	idbAPI.getAllEvents(req.params.year, res);
// });

// POST 
// router.post('/addNewEvent', function(req, res) {
// 	idbAPI.addEvent(req.body, res);
// });


module.exports = router;