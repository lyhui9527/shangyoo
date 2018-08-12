#!/root/code/tools/node/node7

var fs = require('fs');

var isExit = function(arg, argv) { //等同indexOf()
    var len = argv.length

    for (var i = 0; i < len; i++) {
        if (argv[i] == arg) {
            return true
        }
    }
    return false
}




var target = fs.readFileSync('./need_row', 'utf8').toString().split(/\s/); //tongbu read needed row
var data = fs.readFileSync('./in', 'utf8').toString().split('\r\n'); //tongbu read source 

fs.truncateSync('./out') //清空文件
    // fs.unlinkSync('./out'); //删除文件


if (process.argv.length > 2) {
    target = process.argv;
}


for (var i = 0; i < data.length; i++) {
    if (target.indexOf((i + 1).toString()) != -1) {
        console.log(i + 1, data[i])
        fs.writeFileSync('./out', i + 1 + ' ' + data[i] + '\n', { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式

        // fs.writeFile('./out', i + 1 + ' ' + data[i] + '\n', { encoding: 'utf8', mode: '0777', flag: 'a' }, function(err) {
        //     if (err) {
        //         return console.error(err);
        //     }
        // });  也可以，这是异步的方式

    }
}



















// 一共72格
var sum = 72

//持续天数：6天，剩下的五天走完剩下的格子,大约每天走8格,180分增加一格
var now_width = 0

// get_progressbar_width 获得进度条长度
exports.get_progressbar_width = function(req,res){
    now_width = progressbar_width()
    res.send({ width : now_width })
}

var t0 = {
    ts : new Date('2018-06-26 00:00:00').valueOf(),
    v  : 0,
    sum : 0,
}
var t1 = {
    ts : new Date('2018-06-27 00:00:00').valueOf(),
    v  : 9,
    sum : 9,
}
var t2 = {
    ts : new Date('2018-06-28 00:00:00').valueOf(),
    v  : 15,
    sum : 24,
}
var t3 = {
    ts : new Date('2018-06-29 00:00:00').valueOf(),
    v  : 30,
    sum : 54,
}
var t4 = {
    ts : new Date('2018-06-30 00:00:00').valueOf(),
    v  : 12,
    sum : 66,
}
var t5 = {
    ts : new Date('2018-06-30 10:00:00').valueOf(),
    v  : 6,
    sum : 72
}
function progressbar_width(){
    /*var Until = 25;
    var jie1 = 26;
    
    var date = (new Date()).getDate();
    var hour = (new Date()).getHours();
    if(+date >= Until) {
        if(+date >= jie1) {
            return date >= 26 ? (24 + ((date-27)*24+hour)*k)
        }else{
            return hour
        }
    }else {
        return 0
    }*/
    // var k = 48 / (4 * 24 + 10)
    // var d1 = new Date('2018-06-25 00:00:00')
    // var d2 = new Date('2018-06-26 00:00:00')
    // var dn = new Date();
    // if (dn.getTime() >= d2.getTime()) {

    //     return (24 + ((dn.getTime() - d2.getTime()) / (1000 * 60 * 60)) * k)
    // } else {
    //     return dn.getHours()
    // }

    if(Date.now() < t0.ts) {
        return 0
    }
    if(Date.now() >= t0.ts && Date.now() < t1.ts) {
        return get_time() / 86400 * t1.v
    }
    if(Date.now() >= t1.ts && Date.now() < t2.ts) {
        return t1.sum + get_time() / 86400 * t2.v
    }
    if(Date.now() >= t2.ts && Date.now() < t3.ts) {
        return t2.sum + get_time() / 86400 * t3.v
    }
    if(Date.now() >= t3.ts && Date.now() < t4.ts) {
        return t3.sum + get_time() / 86400 * t4.v
    }
    if(Date.now() >= t4.ts && Date.now() < t5.ts) {
        return t4.sum + get_time() / 36000 * t5.v
    }
    return t5.sum
}

function get_time() {
    var d = new Date()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    return h * 3600 + m * 60 + s
}
