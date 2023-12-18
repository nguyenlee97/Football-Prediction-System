var ejs = require('ejs')
	, partials = require('express-partials')
	, express = require('express')
	, app = express();
var cors = require('cors');

var routes = require('./routes/index.js');	
	
app.configure(function(){
	app.use(cors());
	app.use(partials());
	app.engine('html', require('ejs').renderFile); //renders .ejs as html
	
	app.set('views', __dirname + '/views');
	app.use(express.static(__dirname + '/public'));
	
	app.use(express.bodyParser()); //deals with incoming request objects
	app.use(express.methodOverride());
	    
	/**** Turn on some debugging tools ****/
	app.use(express.logger()); // sends messages into the terminal 
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); //dumpExceptions - directs exceptions to stderr - showStack - generate HTML for an exception å
    
});
app.get('/match/:matchId', routes.matchPrediction);
app.get('/accuracy', routes.accuracy);
app.get('/matchFixture', routes.matchfixture)
app.get('/pastMatch', routes.pastmatch)
app.get('/matchDetail/:matchId', routes.predictMatch)
app.get('/pastMatchup/:matchId', routes.pastMatchup)
app.get('/historicalStatistic/:matchId', routes.historicalStatistic)

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});