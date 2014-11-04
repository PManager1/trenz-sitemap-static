var express = require('express');
var router = express.Router();



var static = require('node-static');
var fileServer = new static.Server('./public');



/* GET home page. */

// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });


router.get('/static', function(req, res) {
     fileServer.serve(request, response);
});



module.exports = router;
