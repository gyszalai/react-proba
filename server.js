var http = require('http');
var path = require('path');
var express = require('express');

var winston = require('winston');
var logger = new (winston.Logger)({
    transports: [
      new (winston.transports.Console)({ level: 'debug' })
    ]
  });

var app = express();
app.use("/", express.static(path.join(__dirname, "public")));

var httpServer = http.Server(app);

var server_port = 3000;
var server_ip_address = 'localhost';

httpServer.listen(server_port, server_ip_address, function(){
  logger.info('listening on '+server_ip_address+':'+server_port);
});

