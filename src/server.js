var express = require('express');
var app = express();
var path = require('path');
app.set('port', (process.env.PORT || 8000));
app.use(express.static(__dirname+'/assets/'));


app.get('/', function (req, res) {
    console.log(__dirname);
    const filePath = path.join(__dirname,'index.html');
   res.sendFile(filePath);
});

app.get('/dbsrate', function (req, res) {
  var childArgs = [path.join(__dirname, 'phantom_get_dbs_rate.js')];
  console.log(binPath);
});

app.use(express.static('dist'));
app.use(express.static('images'));

app.listen(app.get('port'), function() {
  console.log('Example app listening on port '+app.get('port'));
});