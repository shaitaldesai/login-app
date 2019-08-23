const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const request = require('request');
let app = express();

app.use(bodyParser.json());

// Static file declaration
// app.use(express.static(path.join(__dirname + '/../build')));

//build mode
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname+'/../public/index.html'));
// })

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/../public'));
})

app.get('/devices', (req, res) => {
  var options = {
        url: 'http://34.200.240.237:8080/sessions',
        auth: {
            user: 'testUser',
            password: 'abc123ABC$$$'
        },
        method :'POST'
  };

    request(options, function (err, res, body) {
        if (err) {
            console.log(err);
            return;
        }
        console.log('headers', res.headers);
        console.log('status code', res.statusCode);
        console.log(body);
    });
	// request.get('http://34.200.240.237:8080', {
	//   'auth': {
	//     'userName': 'testUser',
	//     'password': 'abc123ABC$$$'
	//   }		
	// });
	let deviceData = [
	  {name: 'device4', num: 4}, 
	  {name: 'device5', num: 5}, 
	  {name: 'device6', num: 6}
	];
  res.json(deviceData);
})

const port = process.env.PORT || 8000;

//start server
app.listen(port, (req, res) => {
  console.log( `server listening on port: ${port}`);
})