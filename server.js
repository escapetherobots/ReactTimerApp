var express = require('express');

// create app

var app = express();
// value can't be changed with const
const PORT = process.env.PORT || 3000;

// EXPRESS middleware
// tell the server what to do if encountering https (due to openweather api)
// req = request / res = response / next = do something after this function runs
app.use(function(req, res, next) {
	if (req.headers['x-forwarded-proto'] === 'https') {
		res.redirect('http://' + req.hostname + req.url);
	} else {
		next(); //proceed as normal and return the file to the browser! serve file!
	}
});

app.use(express.static('public'));

app.listen(PORT, function(){
	console.log('express server is up on ' + PORT);
});