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

url = 'http://192.168.16.102:80/duiduipeng/init'
//full_blessing/  init get_bag open_bag get_level  open_bag open_all_bag
// duiduipeng init_task  do_task get_level do_ddp init 

// url = 'http://192.168.16.102:80/yuanxiao_dengmi/guess'
url = 'http://192.168.16.102:80/likes_2021/init'

//curl -H "Content-Type:application/json" -X POST -d   '{ "sub_channel": "2000002","ip": "113.17.68.214","reg_time": "2021-01-14 00:01:55","os_version": "14.2","mac": "","idfa": "D65881F4-39BF-46F1-9DF7-1A83D9322D4D","uid": 6010226105}' 'http://192.168.16.206:8000/channel/user'

var data_post = {
    appid: '1404',
    ver: '0',
    imei: '862856040459879',
    chn: '10006',
    uid: '123456',
    nickname: '昵称大王',
    sex: '1',
    beans: '0',
    win: '0',
    lose: '0',
    cert: '9A8F5ED7595641541DAC0DDAF4FDA8A3',
    net: 'unkown',
    phonenumber: '',
    serverid: '2',
    server_id: '2',
    servercode: '500',
    task_type: 'task_5',
    level_type:'level_2',
    open_nums: '5',
    bag_type:'primary_bag',
    pid : 0,
    task_id : 'task1',
    level : 'level1',
    dengmi_id: 6,
    midi: '伴'

    // bag_type   : 'first_bag',
}


var normal_main = function() {

    var over = 0
    var ss = setInterval(function() {
        pos++
        if (pos > count) {
            clearInterval(ss);
            return;
        }
        tpos = pos
        console.log('pos-----', tpos)

        // data_post.uid= Math.ceil(Math.random() * 100000000)
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
                "host": "party3hxddz.syyx.com"
            }, //, "host": "party3hxddz.syyx.com"
            body: JSON.stringify(data_post)

        }, function(err, res, body) {
            over++
            console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
            if (over >= count) {
                process.send('ok'); //通知父进程，已经完成
            }


        })

        // data_post.uid= Math.ceil(Math.random() * 100000000)
        //     request({
        //     url: url,
        //     method: "POST",
        //     json: true,
        //     headers: {
        //         "content-type": "application/json",
        //         "host": "party3hxddz.syyx.com"
        //     }, //, "host": "party3hxddz.syyx.com"
        //     body: JSON.stringify(data_post)

        // }, function(err, res, body) {
        //     over++
        //     console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
        //     if (over >= count) {
        //         // process.send('ok'); //通知父进程，已经完成
        //     }


        // })


    }, 1)





}

// normal_main()     //单进程常规请求

var run_worker = function() {
    normal_main()
    return
}



var run_master = function() {
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