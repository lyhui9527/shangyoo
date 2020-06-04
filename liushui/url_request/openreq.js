#!/root/code/tools/node/node4.x64

var http = require('http');
var request = require('request');
const cluster = require('cluster');
var qs = require('querystring')

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


var count = 2
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0
var url = 'http://party3hxddz.syyx.com/mj_game_party/init?&sid=1&chn=20&ver=100&uid=' + Math.ceil(Math.random() * 1000000) + '&award_type=' + Math.ceil(Math.random() * 2) + '&award_rank=' + Math.ceil(Math.random() * 4)

url = 'http://party3hxddz.syyx.com/hxddz/get_can_draw_time?chn=03&ver=11&servercode=100&serverid=1&uid=1014793057&aid=1'
url = 'https://activityhxddz.syyx.com/get_can_draw_time?ver=1.1.0&appid=1404&chn=10006&uid=518894152&sign=54894984894&servercode=50&serverid=1&aid=2|3|4|1|5|6|7|8'
url = 'https://activityhxddz.syyx.com/get_can_draw_time?data=XUM2zeoyqjDptM1OoKmPLxzkLSddEBjs%2FFSepXiNGmH4p8aSZPcEm68ZP1d%2FPQBbIAuAHxq0LgYzvAtI%2B99FqIPL8YBfCEjnR7F6eYRbG2NWjmkbWgG4oy6RYkA06oRTaPbCeKCwLjcmHiBKSaiixg%3D%3D&sign=ffbe2bdb4e7f43e3a5c2919816bcc60d'

url = 'http://party3hxddz.syyx.com/5_anniversary_signin/init'
url = 'http://prebuy.hxddz.syyx.cn/pre_buy_request?pf_id=vivo&pk_id=40008&pay_id=129&app_id=1404&server_id=4&account=&third_account=1GA8wVpLXhtGZu_IwDPxSEQr1_ie4CTCyLpOwrHezPc&role_id=3100124388&item_id=155&item_name=9.8%E4%B8%87%E9%87%91%E8%B1%86&request_id=0&item_count=1&item_price=190&total_price=190&currency=RMB&iccid=%00%00%00%00%00%00&imsi=&imei=123456&ip=1.70.240.71&isp=0&code=&net=&province=00&ver=198&room=1301&prop_id=0&access_token=&extra=&sign=5969d9397a5b191e8fda7c7a1fc9a23b'
url = 'http://activityhxddz.syyx.com/get_can_draw_time?data=z2xZIqJqi7DK1o%2Bzfnbygg9YPwIJEXap72gtkcgLYoc6ZIzSsC0VkuvU5vGWVeLSKaVwJmce5f1DpiCyZ2hwmd6H9t4Tl905XERO7yEj81w%3D&sign=3922dcbdc79272789d514e5f6a98d22e'
// url = 'http://party3hxddz.syyx.com/challenge_order/init'
// url = 'http://party3hxddz.syyx.com/challenge_order/draw'
 url = 'http://pf.nycs.syyx.com/player_message/init?server_id=3&server_name=%E6%9B%99%E5%85%89&account=123456&role_name=%E7%86%B9%E7%A6%BE&role_id=123&army_name=%E6%9C%80%E6%A3%92%E7%9A%84%E5%86%9B%E5%9B%A2&army_id=789&sign=fce782fa434c80aa579c1f9ad238d5f7'
 url = 'http://pf.nycs.syyx.com/player_message/add?server_id=10&server_name=%E5%BC%82%E5%BA%A6%E7%A9%BA%E9%97%B4&account=GM002&role_name=GM002@%E5%A4%9A%E7%BE%8E%E5%9C%A3%E5%9F%9F3&role_id=405720059089586&army_name=%E8%AF%BA%E4%BA%9A%E6%96%B0%E5%85%B51%E5%9B%A2&army_id=88185342263297&sign=ceba75e8e51b6181cec60319d10cf8a2&message=%E6%94%BE%E5%81%87%E8%AF%B6%E5%B0%B1%E7%88%B1%E4%B8%8A%E7%9A%84'
 url = 'http://party3hxddz.syyx.com/childhood_games_2020/init?chn=02&ver=1.0.0&uid=288139789&sign=xxx&servercode=500&serverid=1'
 url = 'http://party3hxddz.syyx.com/childhood_games_2020/pick?chn=02&ver=1.0.0&uid=2881397118&sign=xxx&servercode=500&game_index=1&serverid=1'

var data_post = {
    appid: '1404',
    ver: '3.10.180',
    imei: '862856040459879',
    chn: '13001',
    uid: '288138154',
    nickname: '1158984754',
    sex: '1',
    beans: '0',
    win: '0',
    lose: '0',
    cert: '9A8F5ED7595641541DAC0DDAF4FDA8A3',
    net: 'unkown',
    phonenumber: '',
    serverid: '1',
    server_id: '1',
    item_id: 3,
    award_index: 6,
    servercode: '500',
    sign: 'f80cd34f8cfc4a6eb8441f9e70555e62',
    gameid: '0|1|2|8',
    game_index:1
}

data_post = {
    data: 'Tq%2FEEV2v2Ti1VvnJvmZd%2Fh55BQeqRCKCqZLeQq%2FYq4j1GgB8dwww8bDliwj%2BxsCi1QlF%2BZd1GMvi1g81sJrJ7w%3D%3D',
    sign: '3922dcbdc79272789d514e5f6a98d22e'
}


// data_post['data'] = 'z2xZIqJqi7DK1o%2Bzfnbygg9YPwIJEXap72gtkcgLYoc6ZIzSsC0VkuvU5vGWVeLSKaVwJmce5f1DpiCyZ2hwmd6H9t4Tl905XERO7yEj81w%3D'

var j = request.jar()
var cookie = request.cookie('nycs_stat=')
j.setCookie(cookie, url);



// // console.log(url+rr)
// request({
//     url: url,
//     // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
//     method: "POST",
//     json: true,
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify(data_post)
// }, function(err, req, body) {

//     console.log(body)
// });







var normal_main = function() {

    // data_post['uid'] = uid[pos]
    // pos++
    // request({
    //     url: url,
    //     method: "POST",
    //     json: true,
    //     headers: { "content-type": "application/json" },
    //     body: JSON.stringify(data_post)
    // }, function(err, req, body) {
    //     console.log(pos, '-----', body)
    //     if (pos < 2100) { normal_main() }
    // }) { "a": 1, "b": false }
    // a = 1 & b = false

    // var data = qs.stringify(data_post)

    // var timer = setInterval(function() {
    //     pos++;
    //     if (pos > 1) { clearInterval(timer) }
    //     request({
    //         url: url,
    //         method: "POST",
    //         json: true,
    //         jar: j,
    //         headers: {
    //             "Content-Type": "application/x-www-form-urlencoded",
    //             "Content-Length": Buffer.byteLength(data)
    //         },
    //         body: data
    //     }, function(err, req, body) {
    //         console.log(pos, '-----', body)

    //     })

    // }, 10)


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
        request({
            url: url + rr,
            method: "GET",
            json: true,
            // headers: { "content-type": "application/json" },
            // body: JSON.stringify(data_post)

        }, function(err, res, body) {
            console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', body)
        })

    }, 1)

}

// normal_main()     //单进程常规请求

var run_worker = function() {
    normal_main()
    // main();
    return
}




var main = function() {
    console.log(cluster.worker.id, pos)
    request({
        url: url,
        // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
        method: "POST",
        json: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_post)
    }, function(err, req, body) {
        if (pos < count) {
            pos++;
            console.log(pos, '-----', body.ok);
            main();

        }

    });
    return

}



var run_master = function() {
    //   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < 4; i++) {
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