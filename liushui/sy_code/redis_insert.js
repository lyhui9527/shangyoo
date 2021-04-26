#!/root/code/tools/node/node4.x64
'use strict'
var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}
var redis = require(father + '/code/node_modules/redis')
var cluster = require('cluster')
var conn = redis.createClient({
    host: '192.168.16.102',
    port: 6379,
    db: 9,
})

conn.on('error', function (err) {
    console.log(err)
})

var uid = 'liushui:ceping:uid:'
var value = '2019-03-21 12:12:12'
var onecount = 500000
var maxworker = 1
var pos = 0
var pn = ['name' , 'key', 'good_job']
pn = 'pt_redis_5_anniversary_signin'

var key = [
"2019-01-01",
"2019-01-02",
"2019-01-03"
]

var oneman = 
{ '1': '1',
  '2': '2',
  '3': '3',
  '4': '4',
  '5': '5',
  pt_login20190824: 6,
  pt_login20190825: 6,
  pt_login20190826: 6,
  pt_login20190827: 6,
  pt_login20190828: 6,
  pt_login20190820: 6,
  pt_login20190819: 6,
  pt_login20190816: 6,
  pt_login20190815: 6,
  pt_login20190814: 6,
  pt_login20190813: 6,
  pt_login20190812: 6,
  pt_login20190811: 6,
  pt_login20190810: 6,
  pt_login20190809: 6,
  pt_login20190808: 6,
  pt_login20190807: 6,
  pt_login20190805: 6,
  pt_login20190804: 6,
  pt_login20190803: 6,
  pt_login20190905: 6,
  pt_login20190806: 6,
  pt_login20190802: 6,
  pt_login20190801: 6,
  pt_login20190731: 6 }


var main_insert = function () {
	// pn[1]='key'+ cluster.worker.id +pos
var keys = []
	for(let i=0;i<onecount;i++) {
		let k = cluster.worker.id + ':' + i
    keys.push(k)
		// let val = JSON.stringify(oneman)
		// console.log(k,val)
		// conn.set(k, val, function(err, res) {
		// 	console.log(i)

		// })	
		// conn.hset(pn , key, JSON.stringify(val), function(err, res) {

		// })	
	}
    conn.del(keys, function(err, res) {
     console.log(res)

    }) 
    // conn.hmset(pn,function (err, ret) {
    //     pos++
    //     if (pos < onecount) {
    //         main_insert()
    //     } else {
    //         conn.quit()
    //         process.send('ok')
    //         console.log(pos, '--', cluster.worker.id)
    //     }
    // })


}

var run_worker = function () {
    main_insert()
    return
}


var run_master = function () {
    //   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < maxworker; i++) {
        cluster.fork();
    }

    var back_worker = 0;
    function messageHandler(msg) {
        if (msg && msg === 'ok') {
            back_worker++
            console.log(back_worker)
            if(back_worker>=maxworker){
                process.exit(0)

            }
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



