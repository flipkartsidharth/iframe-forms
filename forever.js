  var forever = require('forever-monitor');
  var child = new (forever.Monitor)('app.js', {
    silent: false,
    options: []
  });
  var serverMonitoring = require('config').serverMonitoring;

  child.on('restart', function () {
    console.log("hello, we try again");
    
  });


  child.start();