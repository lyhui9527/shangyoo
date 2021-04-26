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
/*


    var data_post = {
        nick_name: 2,
        group_id: 2
    }
        url: url,
        method: "POST",
        json: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_post)
-----------------------------
        url: url,
        method: "GET",

*/


var count = 1
var maxworker = 1
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0
var url = 'http://party3hxddz.syyx.com/mj_game_party/init?&sid=1&chn=20&ver=100&uid=' + Math.ceil(Math.random() * 1000000) + '&award_type=' + Math.ceil(Math.random() * 2) + '&award_rank=' + Math.ceil(Math.random() * 4)

url = 'http://192.168.16.206:8000/channel/user'

//curl -H "Content-Type:application/json" -X POST -d   '{ "sub_channel": "2000002","ip": "113.17.68.214","reg_time": "2021-01-14 00:01:55","os_version": "14.2","mac": "","idfa": "D65881F4-39BF-46F1-9DF7-1A83D9322D4D","uid": 6010226105}' 'http://192.168.16.206:8000/channel/user'

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

// normal_main()     //单进程常规请求

var run_worker = function () {
    normal_main()
    // main()
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