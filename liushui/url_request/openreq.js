#!/root/code/tools/node/node4.x64

var http = require('http');
var request = require('request');
const cluster = require('cluster');
var qs  = require('querystring')

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
url = 'https://party3hxddz.syyx.com/silk_bag/gets'

var data_post =  { appid: '1404',
  ver: '3.10.180',
  imei: '862856040459879',
  chn: '10006',
  uid: '123456',
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
  item_id:3,
award_index: 6,
  servercode: '500',
  sign: 'd7b223c2e4a4be4d964f9cb3f329e1a0',
  gameid: '0|1|2|8' }


var j = request.jar()
var cookie = request.cookie('nycs_stat=')
j.setCookie(cookie, url);


var normal_main = function () {

        // data_post['uid']=uid[pos]
        // pos++
        // request({
        // url: url,     
        // method: "POST",
        // json: true,
        // headers: { "content-type": "application/json" },
        // body: JSON.stringify(data_post)
        // }, function (err, req, body) {
        //      console.log(pos, '-----', body)
        //     if(pos<2100){normal_main()}    
        // })
        // {"a":1,"b":false}
        // a=1&b=false

//         var data = qs.stringify(data_post)
//         var timer = setInterval(function () {
//         pos++;
//         if(pos>1){ clearInterval(timer)}
//         request({
//         url: url,     
//         method: "POST",
//         json: true,
//         jar : j,
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             "Content-Length": Buffer.byteLength(data)
//         },
//         body: data
//         }, function (err, req, body) {
//              console.log(pos, '-----', body)
                       
//         })

// },10)

    

       var ss= setInterval(function () {
        pos++
        if(pos>count){ return; clearInterval(ss);      process.send('ok'); }
             console.log('pos-----',pos)
        request({
        url: url,     
        method: "POST",
        json: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_post)

        }, function (err, res, body) {
            console.log(cluster.worker.id,'------',pos, res && res.statusCode,'-----', body)
        })

},1)

}

// normal_main()     //单进程常规请求


var run_worker = function () {
    normal_main()  
    // main();
    return
}




var main = function () {
    console.log(cluster.worker.id, pos)
    request({
        url: url,
        // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
        method: "POST",
        json: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_post)
    }, function (err, req, body) {
        if (pos < count) {
            pos++;
            console.log(pos, '-----', body.ok);
            main();

        }

    });
    return

}



var run_master = function () {
    //   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < 5; i++) {
        cluster.fork();
    }


    var backkid=0
    function messageHandler(msg) {
        if (msg&& msg == 'ok') {
        backkid++
        if(backkid==4){
            process.exit(0)
        }
        }
    }


    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

}


if (cluster.isMaster) {       //使用多进程方式请求
    run_master();

} else {

    run_worker();
}