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


var count = 1000
var maxworker = 1
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




// url = 'https://party3hxddz.syyx.com/pass_check/draw?chn=10006'
// url2 = 'https://party3hxddz.syyx.com/pass_check/draw?chn=10006'

url = 'http://192.168.16.102:80/hit_mole/get_n'
url2 = 'http://192.168.16.102:80/boost/get_task'
url = 'http://192.168.16.102:80/boost/set_incr?val=5_8&sign=dfb02ce1476d2e60c1b7f3bbd68f7dd5'
// url = 'http://192.168.16.102:80/roles_interacts/set_click'
url = 'https://party3hxddz.syyx.com/roles_interacts/set_inter'
url = 'http://192.168.16.102:80/bet_role_skill/init'
url = 'http://party3hxddz.syyx.com/bet_role_skill/choose' //draw  choose

url = 'http://192.168.16.102:80/role_jigsaw_2021/init' 
// init_task  do_task get_level do_ddp init 
// url = 'http://hxservice.syyx.com/custom_exchange/save_exchangeInfo'

url2 = 'http://kefufish.syyx.com/problem'
// url2 = 'http://www.ehijoy.com/service_center/create_problem'

// url2 = 'http://user.syyx.com/nycs_activate?account=t001&gameid=2&serverid=3&sign=92c5171e6e183dc81ccc0994958f0f72'

// url= 'http://adhxddz.syyx.com/receive_activation_data?spreadurl=http://uri6.com/tkio/vUJBZr2&spreadname=%E5%A4%B4%E6%9D%A1_%E4%BF%A1%E6%81%AF%E6%B5%81%E5%B9%BF%E5%91%8A_1&channel=%E4%BB%8A%E6%97%A5%E5%A4%B4%E6%9D%A1&clicktime=1444457008000&ua=Mozilla%2f5.0+(iPhone%3b+CPU+iPhone+OS+12_4+like+Mac+OS+X)+AppleWebKit%2f605.1.15(KHTML%2c+like+Gecko)+Version%2f12.1.2+Mobile%2f15E148+Safari%2f604.1&uip=119.58.118.226&appkey=f819f9cac5c030f812b2067d0cf8&activetime=1444457008000&osversion=9.0&devicetype=iphone&idfa=3DEA635F-B24F-434B-833F-4ED028FEAEEF&mac=68:F7:18:B4:BC:80&androidid=836897c779db16e2&imei=866280041545123&aip=119.58.118.226&skey=119.58.118.226&ry_adgroup_id=123&ry_adplan_id=456&ry_adcreative_id=789'

// url2= 'http://192.168.16.106:80/pass_check/check_if_can_buy?chn=02&ver=1.0.0&uid=6010225860&sign=xxx&servercode=500&serverid=1&num=10&_=0.6307592940892413&good_name=senior'
// url = 'http://party.syyx.com/2020_09_ten_friendship/push_content'
// url = 'http://party.syyx.com/2020_09_ten_friendship/get_code'
// url = 'http://party.syyx.com/2020_09_ten_friendship/add_shave'

// url = 'http://config.hxddz.shangyoo.com/running/delete'  //del array/record one  row
// url = 'http://config.hxddz.shangyoo.com/running/add_cell?id=act_item.0%3Achannel&sid=1'  //add one array row
// url = 'http://config.hxddz.shangyoo.com/running/reset?data%5Bid%5D=act_cond.107%3Alabel&data%5Btype%5D=string&data%5Bvalue%5D=version&id=act_cond.107%3Alabel&sid=1&isnew=1&type=record' //cond change label
// url = 'http://config.hxddz.shangyoo.com/running/add_row2/tarot_card/1?id=tarot_card.0%3Atarot_card&sid=1' //add one record row
// url = 'http://config.hxddz.shangyoo.com/running/delete_row/tarot_card/1'
// url = 'http://config.hxddz.shangyoo.com/change_data'
// url = 'http://config.hxddz.shangyoo.com/copy_table'

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
    serverid: '1',
    server_id: '1',
    servercode: '500',
    task_id: 'task2',
    level: 'level1',
    pid: 0,

}

// data_post = {
//     data: 'Tq%2FEEV2v2Ti1VvnJvmZd%2Fh55BQeqRCKCqZLeQq%2FYq4j1GgB8dwww8bDliwj%2BxsCi1QlF%2BZd1GMvi1g81sJrJ7w%3D%3D',
//     sign: '3922dcbdc79272789d514e5f6a98d22e'
// }


// data_post['data'] = 'z2xZIqJqi7DK1o%2Bzfnbygg9YPwIJEXap72gtkcgLYoc6ZIzSsC0VkuvU5vGWVeLSKaVwJmce5f1DpiCyZ2hwmd6H9t4Tl905XERO7yEj81w%3D'


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
        var r = Math.random()
        var rr = '&r=' + r
        // var content ='新"内\'容'
        // data_post['role_id'] = Math.floor( Math.random()*100000000)
        // data_post['account'] = data_post['role_id']+''
        // // data_post['uid'] = 234
        // data_post['content'] = content + data_post['account']


        // console.log(JSON.stringify(data_post))
        // data_post['uid'] = Math.floor( Math.random()*100000000)
        // data_post['pid'] = Math.floor( Math.random()*16)
        request({
            url: url,
            method: "POST",
            json: true,
            headers: { "content-type": "application/json", "host": "party3hxddz.syyx.com" }, //, "host": "party3hxddz.syyx.com"
            body: JSON.stringify(data_post)

        }, function(err, res, body) {
            over ++

            console.log(cluster.worker.id, '------', tpos, res && res.statusCode, '-----', JSON.stringify(body))

            if(over>=count){
                          process.send('ok');  //通知父进程，已经完成
            }

            // data_post['p_id'] = body.p_id
            //   request({
            //     url: url,
            //     method: "POST",
            //     json: true,
            //     // jar: j,
            //     headers: { "content-type": "application/json","Host":'kefufish.syyx.com',"Cookie":"admintoken=; admin1=Val0=aJsC08TYZdU=&Val1=YM7Q1LSio3A=&Val2=YON93ukLd3rE4+tvEK2h/g==&Val3=bLsFN7wqBP/ot95MJcg2EQ==&Val4=aJsC08TYZdU=&Val5=2015-02-05 16:34:21&Val6=False&Val7=2015-02-05 16:34:21&Val8=ip&Val100=NfUwGryBlFF+V3YpmI/U1ZhqkX/SfLYNi9BD8CRsVMJtxm4Pbd9G0yw7gsCt0frai9BD8CRsVMJtxm4Pbd9G093oTTL2sXav; account_name=pttest; syyx.sid=5pbjOZlT5kr7xlHFIWAL13UU.D4v972iwPpk0xHnHZKukRQLvtgIThWM9WtDOvExJLc4" }, //, "host": "party3hxddz.syyx.com"
            //     body: JSON.stringify(data_post)

            // }, function(err, res, body) {
            //     console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', JSON.stringify(body))

            // })
        })

        // data_post['uid'] = Math.floor( Math.random()*100000000)
        // // data_post['uid'] = 567

        //   request({
        //     url: url,
        //     method: "POST",
        //     json: true,
        //     headers: { "content-type": "application/json" ,"Host":'party3hxddz.syyx.com'},
        //     body: JSON.stringify(data_post)

        // }, function(err, res, body) {
        //     console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', JSON.stringify(body))

        // })


    }, 10)





}

// normal_main()     //单进程常规请求

var run_worker = function() {
    normal_main()
    // main()
    return
}


var ret = []

// count = count + pos - 1
var main = function() { //同步操作，第一个请求处理完了，再进行第二个请求

    console.log(cluster.worker.id, pos)
    // data_post['pid'] = pos

    if (pos <= count) {
        request({
            url: url,
            method: "POST",
            json: true,
            headers: { "content-type": "application/json", "host": "party3hxddz.syyx.com" }, //, "host": "party3hxddz.syyx.com"
            body: JSON.stringify(data_post)
        }, function(err, res, body) {
            console.log(cluster.worker.id, '------', pos, res && res.statusCode, '-----', JSON.stringify(body))

            pos++;
            main();
        });
    }

    // conn.set('count:67:02:6010233230', levels[pos] || 0, function(err, res) {
    // })

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