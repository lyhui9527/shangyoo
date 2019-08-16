#!/root/code/tools/node/node4.x64

/*
 创建多进程服务器，使用cluster
 主进程和子进程之间的通讯
*/

const cluster = require('cluster');
const http = require('http');
const fs = require('fs');


// var data = fs.readFileSync('./in', 'utf8').toString().split('\r\n'); //tongbu read source 
// var argv = {}
// data.forEach(function (i) {
//     var key = i.split('@')[0];
//     var val = i.split('@')[1];
//     argv[key] = val
// })
// console.log(argv)


var run_worker = function () {




    // Worker 进程有一个http服务器
    http.Server((req, res) => {
        console.log(req)



        // if(cluster.worker.id ==2){
        //     setTimeout(function(){
        //         console.log(cluster.worker.id,"sleep")
        //     },2000)

        // }else{
        //     setTimeout(function(){
        //         console.log(cluster.worker.id,"sleep")
        //     },100) 
        // }
        console.log(cluster.worker.id, "sleep ", req.url)
        var data = req.url.toString().split(/[?&]/)
        var arg = {}
        data.forEach(function (item) {
            arg[item.split('=')[0]] = item.split('=')[1];
        })
        res.writeHead(200);
        var ret = 0
        if (arg.pw == 50000) {
            ret = 1
        }
        res.end(req.url + '&ret=' + ret);
        // 通知 master 进程接收到了请求
        process.send({ cmd: 'ok' });

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
        if (msg.cmd && msg.cmd === 'ok') {
            numReqs += 1;
        }
    }

    // 启动 worker 并监听包含 notifyRequest 的消息
    // const numCPUs = require('os').cpus().length;
    var numCPUs = 1
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






