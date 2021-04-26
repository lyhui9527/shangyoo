#!/root/code/tools/node/node4.x64

var http = require('http');
var request = require('request');
const cluster = require('cluster');
var qs = require('querystring')
var crypto = require('crypto')

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


var count = 50000
var maxworker = 2
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0
var url = 'http://party3hxddz.syyx.com/mj_game_party/init?&sid=1&chn=20&ver=100&uid=' + Math.ceil(Math.random() * 1000000) + '&award_type=' + Math.ceil(Math.random() * 2) + '&award_rank=' + Math.ceil(Math.random() * 4)

url = 'http://192.168.16.121:80/hw/lottery_draw'
url2 = 'http://192.168.16.102:80/hw/lottery_draw'
//lottery_draw  my_prize get_address_info  set_address_info


var data_post = {
    uid: '351235720',
    chn: 'HUAWEI',
    cloud_id: 'yun12121cloudid12121',
    mac: '111111111111111111111111111',
    sign: '8cb74a479587c580b61e73c2d0ec5f0d',
    address: '广东省深圳市宝安区西乡街道14号123栋隔离栋的小屋上的楼顶东省深圳市宝安区西乡街道14号123栋隔离栋的小屋上的楼顶',
    tel: '13722549986',
    name: '高手'
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

        data_post.uid = Math.ceil(Math.random() * 1000000000)
        data_post.sign = crypto.createHash('md5').update('uid=' + data_post.uid + 'chn=' + data_post.chn + 'key=' + 'hw@draw$#1210&').digest('hex');
        request({
            url: url,
            method: "POST",
            json: true,
            headers: {
                "content-type": "application/json",
                "host": "yq.syyx.com"
            }, //, "host": "party3hxddz.syyx.com"
            body: JSON.stringify(data_post)

        }, function(err, res, body) {
            over++
            console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
            if (over >= count) {
                process.send('ok'); //通知父进程，已经完成
            }


        })


        // data_post.uid = Math.ceil(Math.random() * 1000000000)
        // data_post.sign = data_post.sign = crypto.createHash('md5').update('uid=' + data_post.uid + 'chn=' + data_post.chn + 'key=' + 'hw@draw$#1210&').digest('hex');

        // request({
        //     url: url2,
        //     method: "POST",
        //     json: true,
        //     headers: {
        //         "content-type": "application/json",
        //         "host": "yq.syyx.com"
        //     }, //, "host": "party3hxddz.syyx.com"
        //     body: JSON.stringify(data_post)

        // }, function(err, res, body) {
        //     over++
        //     console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
        //     if (over >= count) {
        //         // process.send('ok'); //通知父进程，已经完成
        //     }


        // })


      // data_post.uid = Math.ceil(Math.random() * 1000000000)
      //   data_post.sign = crypto.createHash('md5').update('uid=' + data_post.uid + 'chn=' + data_post.chn + 'key=' + 'hw@draw$#1210&').digest('hex');
      //   request({
      //       url: url,
      //       method: "POST",
      //       json: true,
      //       headers: {
      //           "content-type": "application/json",
      //           "host": "yq.syyx.com"
      //       }, //, "host": "party3hxddz.syyx.com"
      //       body: JSON.stringify(data_post)

      //   }, function(err, res, body) {
      //       over++
      //       console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
      //       if (over >= count) {
      //           process.send('ok'); //通知父进程，已经完成
      //       }


      //   })


      //   data_post.uid = Math.ceil(Math.random() * 1000000000)
      //   data_post.sign = data_post.sign = crypto.createHash('md5').update('uid=' + data_post.uid + 'chn=' + data_post.chn + 'key=' + 'hw@draw$#1210&').digest('hex');

      //   request({
      //       url: url2,
      //       method: "POST",
      //       json: true,
      //       headers: {
      //           "content-type": "application/json",
      //           "host": "yq.syyx.com"
      //       }, //, "host": "party3hxddz.syyx.com"
      //       body: JSON.stringify(data_post)

      //   }, function(err, res, body) {
      //       over++
      //       console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))
      //       if (over >= count) {
      //           // process.send('ok'); //通知父进程，已经完成
      //       }


      //   })





    }, 1000)





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