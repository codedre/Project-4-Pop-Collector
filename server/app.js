var express                 = require("express");
var app                     = express();
var mongoose                = require("mongoose");
var morgan                  = require("morgan");
var cookieParser            = require("cookie-parser");
var bodyParser              = require("body-parser");
var session                 = require("express-session");
var methodOverride          = require("method-override");
var routes                  = require('./api/pops/routes');


// connect to db
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/popcollector');

// middleware
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(methodOverride('_method'));

app.use('/', express.static(__dirname + '/../public'));
app.use(routes);

app.listen(process.env.PORT || 8080, function() {
  console.log("* I'm working! Go to http://127.0.0.1");
});
