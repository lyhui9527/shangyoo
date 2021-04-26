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



var count = 200
var maxworker = 1
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0



url = 'http://121.196.217.166:80/duiduipeng/do_ddp'   //接口

// init_task  do_task get_level do_ddp init
url = 'http://192.168.16.102:80/test' 
url = 'http://192.168.16.102:80/collect_praise/third_visit'
url = 'http://192.168.16.102:80/collect_praise/record'

var data_post = {
    appid: '1404',
    ver: '0',
    imei: '862856040459879',
    chn: '20001',
    uid: '2140017322',
    nickname: '昵称大王',
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
    task_id: 'task2',
    level: 'level1',
    pid: 0,
    a:'1',
    b:'2',
    c: '2020-01-19 01:01:01',
    type : 'third',




}








arr = ['2020-01-19 23:59:01','2020-01-20 00:00:00']
arrt = ['third','second','first','learn_about_click']

//?a=1&b=2&c=2020-01-19%2001:01:01
var normal_main = function() {

var over = 0
    var ss = setInterval(function() {
        pos++
        if (pos > count) {
            clearInterval(ss);
            return;

        }
        data_post.c=arr[(pos<50?0:1)]
        data_post.type = arrt[Math.round(Math.random())]
        // data_post.c=arr[Math.round(Math.random())]
        console.log('pos-----', pos)

        request({
            url: url,
            method: "POST",
            json: true,
            headers: { "content-type": "application/json", "host": "yq.syyx.com" }, //, "host": "party3hxddz.syyx.com"
            body: JSON.stringify(data_post)

        }, function(err, res, body) {
            over ++
            console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', JSON.stringify(body))

            if(over>=count){
                          process.send('ok');  //通知父进程，已经完成
            }

        })



    }, 100)





}

// normal_main()     //单进程常规请求

var run_worker = function() {
    normal_main()
    // main()
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