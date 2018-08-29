#!/root/code/tools/node/node4.x64

var http = require('http');



var request = require('request');
const cluster = require('cluster');


      var count = 10000
    var pos = 0

var pw= 0


var run_worker = function () {

main();

return      
}

var main = function(){
pw++
      request({
            url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
            method: "GET"
        }, function(err, req, body) {
            if(pos<count){
        pos++;
	main();
	console.log(body)
	
        var data = body.toString().split(/[?&]/)
        var arg = {}
        data.forEach(function (item) {
            arg[item.split('=')[0]] = item.split('=')[1];
        })

	if(arg.ret=='1'){
		process.send({ cmd: 'ok' });	
	}

        }       
        });
return 

}




var run_master = function () {
//   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < 5; i++) {
        cluster.fork();
    }


    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'ok') {
            process.exit(0)
        }
    }


    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

}


if (cluster.isMaster) {
    run_master();

} else {

    run_worker();
}
