#!/root/code/tools/node/node4.x64

var http = require('http')
var count = 0
var port = process.argv[2] || 8080 
http.createServer(function(req, res) {
    console.log('recv request', ++count)
    console.log('-------------',req.method,req.url)
    res.end(JSON.stringify({retcode:0}))
 }).listen(port)
