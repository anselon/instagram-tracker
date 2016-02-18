var connect = require('connect')  
  , http = require('http')
  , app
  ;

app = connect()  
  .use(connect.static('app'))
  .use('/js/lib/', connect.static('node_modules/requirejs/'))
  .use('/node_modules', connect.static('node_modules'))
  ;

http.createServer(app).listen(9000, function() {  
  console.log('Running on http://localhost:8080');
});

var express = require('express');
