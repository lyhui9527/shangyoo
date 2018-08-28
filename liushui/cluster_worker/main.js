#!/root/code/tools/node/node4.x64

const cluster = require('cluster');
const http = require('http');
const fs = require('fs');


var data = fs.readFileSync('./in', 'utf8').toString().split('\r\n'); //tongbu read source 
var argv = {}
data.forEach(function (i) {
    var key = i.split('@')[0];
    var val = i.split('@')[1];
    argv[key] = val
})
console.log(argv)


var run_worker = function () {

    // Worker 进程有一个http服务器
    http.Server((req, res) => {
        console.log(req)
        res.writeHead(200);
        res.end('hello world\n');
        // 通知 master 进程接收到了请求
        process.send({ cmd: 'notifyRequest' });
    }).listen(8000);

}


var run_master = function () {

    // 跟踪 http 请求
    var numReqs = 0;
    setInterval(() => {
        console.log(`numReqs = ${numReqs}`);
    }, 1000);

    // 计算请求数目
    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'notifyRequest') {
            numReqs += 1;
        }
    }

    // 启动 worker 并监听包含 notifyRequest 的消息
    const numCPUs = require('os').cpus().length;
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
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






