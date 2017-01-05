var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname+'/assets/'));


app.get('/', function (req, res) {
   const filePath = path.join(__dirname,'/public/index.html');
   console.log(filePath);
   res.sendFile(filePath);
});

app.get('/dbsrate', function (req, res) {
  var childArgs = [path.join(__dirname, 'phantom_get_dbs_rate.js')];
});

app.use(express.static('public'));
//app.use(express.static('images'));

app.listen(app.get('port'), function() {
  console.log('Example app listening on port '+app.get('port'));
});