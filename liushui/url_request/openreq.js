#!/root/code/tools/node/node4.x64

var http = require('http');



var request = require('request');
const cluster = require('cluster');


var count = 50
var pos = 0
var random = Math.ceil(Math.random() * 100000)

var pw = 0
var url = 'http://party3hxddz.syyx.com/mj_game_party/init?&sid=1&chn=20&ver=100&uid=' + Math.ceil(Math.random() * 1000000) + '&award_type=' + Math.ceil(Math.random() * 2) + '&award_rank=' + Math.ceil(Math.random() * 4)

<<<<<<< HEAD:liushui/url_request/openreq.js
url = 'http://party.hxddz.syyx.com/thanksgiving/insert_data?name=payok&uid=529630510&pay_amount=100&item_id=541&pay_id=65&chn=10006&ver=205&order_id=20065181120164674'
// url = 'http://party3hxddz.syyx.com/thanksgiving/draw_award?chn=02&ver=1.0.0&sign=xxx&servercode=50&_=0.860525818455115&serverid=1&uid='
// url2 = 'http://party3hxddz.syyx.com/thanksgiving/draw_discount?chn=02&ver=1.0.0&sign=xxx&servercode=50&_=0.860525818455115&serverid=1&uid='
=======
url = 'http://party.hxddz.syyx.com/thanksgiving/insert_data?name=payok&uid=529630510&pay_amount=100&item_id=543&pf_id=123&pk_id=123&pay_id=123&chn=02&ver=205&order_id='
    // url = 'http://party3hxddz.syyx.com/thanksgiving/draw_award?chn=02&ver=1.0.0&sign=xxx&servercode=50&_=0.860525818455115&serverid=1&uid='
    // url2 = 'http://party3hxddz.syyx.com/thanksgiving/draw_discount?chn=02&ver=1.0.0&sign=xxx&servercode=50&_=0.860525818455115&serverid=1&uid='
>>>>>>> db02731cd61de4a2565f96fc8f95573d253624e0:liushui/openreq.js
var run_worker = function() {

    main();

    return
}

var main = function() {
    // + '&cluster=' + cluster.worker.id
    var exta = Math.ceil(Math.random() * 10000001300)
    pw++
    request({
        url: url + exta,
        // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
        method: "GET"
    }, function(err, req, body) {


        if (pos < count) {
            pos++;
            main();
            // console.log(body)
            var data = JSON.parse(body)
            console.log(pos, '-----', data)

            //     var data = body.toString().split(/[?&]/)
            //     var arg = {}
            //     data.forEach(function (item) {
            //         arg[item.split('=')[0]] = item.split('=')[1];
            //     })

            // if(arg.ret=='1'){
            //  process.send({ cmd: 'ok' });    
            // }

        }
        // request({
        //     url: url2 + exta,
        //     // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
        //     method: "GET"
        // }, function(err, req, body) {
        //     console.log(pos, '-----', data)
        // });
    });
    return

}



var run_master = function() {
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