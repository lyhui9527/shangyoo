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
var conn = redis.createClient({
    host: '192.168.16.102',
    port: 6379,
    db: 0,
})

conn.on('error', function(err) {
    console.log(err)
})
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

var count = 3
var maxworker = 2
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0


 url= 'http://adhxddz.syyx.com/receive_activation_data?spreadurl=http://uri6.com/tkio/vUJBZr2&spreadname=%E5%A4%B4%E6%9D%A1_%E4%BF%A1%E6%81%AF%E6%B5%81%E5%B9%BF%E5%91%8A_1&channel=%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1&clicktime=1444457008000&ua=Mozilla%2f5.0+(iPhone%3b+CPU+iPhone+OS+12_4+like+Mac+OS+X)+AppleWebKit%2f605.1.15(KHTML%2c+like+Gecko)+Version%2f12.1.2+Mobile%2f15E148+Safari%2f604.1&uip=119.58.118.226&appkey=f819f9cac5c030f812b2067d0cf8&activetime=1444457008000&osversion=9.0&devicetype=iphone&idfa=3DEA635F-B24F-434B-833F-4ED028FEAEEF&mac=68:F7:18:B4:BC:80&androidid=836897c779db16e2&imei=866280041545123&aip=119.58.118.226&skey=119.58.118.226&ry_adgroup_id=123&ry_adplan_id=456&ry_adcreative_id=789'
 url2= 'http://192.168.16.106:80/pass_check/check_if_can_buy?chn=02&ver=1.0.0&uid=6010225860&sign=xxx&servercode=500&serverid=1&num=10&_=0.6307592940892413&good_name=senior'



var data_post = {
    appid: '1404',
    ver: '0',
    imei: '862856040459879',
    chn: '10006',
    uid: '2080305979',
    nickname: '6010225878',
    sex: '1',
    beans: '0',
    win: '0',
    lose: '0',
    cert: '9A8F5ED7595641541DAC0DDAF4FDA8A3',
    net: 'unkown',
    phonenumber: '',
    serverid: '1',
    server_id: '1',
    servercode: '500',
    sign: 'e01a5246dee552c66e193ea71b5a4acf',
    gameid: '0|1|2|8',
    url: 'https://party3hxddz.syyx.com/pass_check/index.html',
    score: 2,
    store_num: 1,
    award_type:'all'
    }

// data_post = {
//     data: 'Tq%2FEEV2v2Ti1VvnJvmZd%2Fh55BQeqRCKCqZLeQq%2FYq4j1GgB8dwww8bDliwj%2BxsCi1QlF%2BZd1GMvi1g81sJrJ7w%3D%3D',
//     sign: '3922dcbdc79272789d514e5f6a98d22e'
// }


var j = request.jar()
var cookie = request.cookie('nycs_stat=')
j.setCookie(cookie, url);


var normal_main = function() {
    var ss = setInterval(function() {
        pos++
        if (pos > count) {
            return;
            clearInterval(ss);
            process.send('ok');
        }
        console.log('pos-----', pos)
        var r = Math.random()
        var rr = '&r=' + r
        // data_post['uid'] = Math.floor( Math.random()*100000000)
        request({
            url: url,
            method: "GET",
            json: true,   
            headers: { "content-type": "application/json" },  //, "host": "party3hxddz.syyx.com"
            body: JSON.stringify(data_post)

        }, function(err, res, body) {
            console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', JSON.stringify(body))

        })

       data_post['uid'] = Math.floor( Math.random()*100000000)
          request({
            url: url2,
            method: "GET",
            json: true,
            headers: { "content-type": "application/json"},
            body: JSON.stringify(data_post)
        }, function(err, res, body) {
            console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', JSON.stringify(body))
        })


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
            if (backkid == 4) {
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