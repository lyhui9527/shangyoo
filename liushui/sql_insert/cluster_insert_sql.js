var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}


var mysql = require(father + '/code/node_modules/mysql');
var connection = mysql.createConnection({
    host: '192.168.16.102',
    user: 'root',
    password: '123456',
    database: 'yqqs_kf'
    // database: 'test'
});

connection.connect();
const cluster = require('cluster');


//----------------------------------------------基础配置定义
var funmax = 100; //每个进程进行多少轮
var pos = 0;
var start = new Date();
var max_worker = 1; //多少个进程
funmax = 100
//----------------------------------------------基础配置定义


var strcat = function(col, row) { //col=需插入列数,row=每次组成多少行
    if (col < 0) {
        retrun
    }
    var retcat = {
        'str': '',
        'data': []
    }
    var substr = '';
    substr = substr + '(?';
    for (var i = 1; i < col; i++) {
        substr = substr + ', ?'
    }
    substr = substr + ')';
    retcat.str = substr

    for (var i = 1; i < row; i++) {
        retcat.str = retcat.str + ',' + substr

    }
    var p = 0;
    for (var i = 0; i < row; i++) {

        //---------------------------------------------------------数据定义
        var phone = Math.ceil(Math.random() * 1000000000000);
        var paymoney = Math.floor(Math.random() * 100000);
        var grade = Math.floor(Math.random() * 1000);
        var mobiletype = Math.floor(Math.random() * 3);
        var uid = pos * 100000 + (i + 1);
        var chn = '02'
        var date = '2019-02-19'
        if (cluster.worker.id == 1) {
            date = '2019-02-18'
        }
        var tempdata = [uid, chn, date];
        //---------------------------------------------------------数据定义

        for (var j = 0; j < col; j++) {
            retcat.data[p++] = tempdata[j]

        }
    }
    return retcat
} //链接value后面的？

var multistr = function(row) {

    var retcat = {
        'str': '',
        'data': []
    }



    var tempdata = [
        1
    ]



    var substr = '';
    substr = substr + '(?';
    for (var i = 1; i < tempdata.length; i++) {
        substr = substr + ', ?'
    }
    substr = substr + ')';
    retcat.str = substr

    for (var i = 1; i < row; i++) {
        retcat.str = retcat.str + ',' + substr

    }


    for (var i = 0; i < row; i++) {       

//------------------------------------------------------------------  //定义插入数据的具体内容

        tempdata[0] = Math.ceil( Math.random() * 1000000000000000)
        // tempdata[1] = i + 1
        // tempdata[2] = Math.ceil( Math.random() * 4)

//------------------------------------------------------------------

        retcat.data = retcat.data.concat(tempdata)
    }

    return retcat
}


var funsyn = function() { //同步处理，更加内存不会挤爆

    var t = Math.floor(Math.random() * 3);
    var phone = Math.ceil(Math.random() * 1000000000);    
    var paymoney = Math.floor(Math.random() * 100000);
    var grade = Math.floor(Math.random() * 1000);
    var mobiletype = Math.floor(Math.random() * 3);
    // var data = strcat(3, 100000) 
    var data = multistr(10000)
    var sql = "INSERT INTO `yqqs_kf`.`hw_lottery_card` (`card`)  VALUES" + data.str

    // sql ="SELECT DATE_ADD('2018-04-01 5',INTERVAL FLOOR(RAND()* 90) DAY ) as a"
    // console.log(sql)
    connection.query(sql, data.data, function(err, result) {

        if (err) {console.log(err)}
        pos++
        console.log("cluster: ", cluster.worker.id, ' pos:', pos)
        if (pos < funmax) {
            funsyn()
        }
        console.log(result);

        if (pos == funmax) {
            connection.end();
            console.log('time', new Date().valueOf() - start.valueOf())
         }
    });
}


var run_worker = function() {

    funsyn();

    return
}


var run_master = function() {
    //   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < max_worker; i++) {
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