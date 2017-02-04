var models = require('./server/models/');
models.sequelize
  .authenticate()
  .then(function () {
    console.log('Connection successful');
  })
  .catch(function(error) {
    console.log("Error creating connection:", error);
  });

var express = require('express'),
  routes = require('./server/routes'),
  bodyParser = require('body-parser'),
  path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(process.cwd()));

//App routes
app.use(routes(express.Router()));

app.get('/*', function (req, res) {

  res.sendFile(path.join(__dirname, '/', 'index.html'));
});

app.set('port', process.env.PORT || 8000);

app.listen(app.get('port'), function () {

  console.log("Magic happens on port", app.get('port'));
});
