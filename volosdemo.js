var mysqlConnector = require('volos-mysql');
var http = require('http');
var restMap = require('./productservice');

var profile = {
    user: 'root',
    password: 'vignesh',
    host: "localhost",
    port: "3306"
};

var mysqlConnectorObject = new mysqlConnector.MySqlConnector({"profile": profile, "restMap": restMap});

var svr = http.createServer(function (req, resp) {
    mysqlConnectorObject.dispatchRequest(req, resp);
});

svr.listen(9089, function () {
    mysqlConnectorObject.initializePaths(restMap);
    console.log(mysqlConnectorObject.applicationName + ' node server is listening');
});
