#!/root/code/tools/node/node4.x64

var http = require('http');
var request = require('request');
const cluster = require('cluster');
var qs = require('querystring')

var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}
var redis = require(father + '/code/node_modules/redis')
// var conn = redis.createClient({
//     host: '192.168.16.102',
//     port: 6379,
//     db: 0,
// })

// conn.on('error', function(err) {
//     console.log(err)
// })



var count = 1
var maxworker = 1
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0
var url = 'http://party3hxddz.syyx.com/mj_game_party/init?&sid=1&chn=20&ver=100&uid=' + Math.ceil(Math.random() * 1000000) + '&award_type=' + Math.ceil(Math.random() * 2) + '&award_rank=' + Math.ceil(Math.random() * 4)

url = 'http://192.168.16.206:8000/channel/user'

var data_post = {
   }
var normal_main = function () {


    var over = 0
    var ss = setInterval(function () {
        pos++
        if (pos > count) {
            clearInterval(ss);

            return;

        }
        tpos = pos
        console.log('pos-----', tpos)
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
            }, //, "host": "party3hxddz.syyx.com"
               //  "Cookie":"admintoken=; admin1=Val0=aJsC08TYZdU=&Val1=YM7Q1LSio3A=&Val2=YON93ukLd3rE4+tvEK2h/g==&Val3=bLsFN7wqBP/ot95MJcg2EQ==&Val4=aJsC08TYZdU=&Val5=2015-02-05 16:34:21&Val6=False&Val7=2015-02-05 16:34:21&Val8=ip&Val100=NfUwGryBlFF+V3YpmI/U1ZhqkX/SfLYNi9BD8CRsVMJtxm4Pbd9G0yw7gsCt0frai9BD8CRsVMJtxm4Pbd9G093oTTL2sXav; account_name=pttest; syyx.sid=5pbjOZlT5kr7xlHFIWAL13UU.D4v972iwPpk0xHnHZKukRQLvtgIThWM9WtDOvExJLc4"
            body: JSON.stringify(data_post)

        }, function (err, res, body) {
            over++
            console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
            if (over >= count) {
                process.send('ok'); //通知父进程，已经完成
            }


        })


    }, 10)

}


var run_worker = function () {
    normal_main()
    return
}



var run_master = function () {
    //   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < maxworker; i++) {
        cluster.fork();
    }

    var backkid = 0

    function messageHandler(msg) {
        if (msg && msg == 'ok') {
            backkid++
            if (backkid >= maxworker) {
                process.exit(0)
            }
        }
    }


    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

}

if (cluster.isMaster) { //使用多进程方式请求
    run_master();

} else {

    run_worker();
}