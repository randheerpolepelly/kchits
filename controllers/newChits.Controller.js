var app = require('express');

app.post('/addNewChit', addNewChit);

function addNewChit(req, res) {
	console.log(req);
}