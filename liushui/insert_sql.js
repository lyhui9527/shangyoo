#!/root/code/tools/node/node4.x64

var mysql = require('/root/code/node_modules/mysql');
var connection = mysql.createConnection({
    host: '192.168.1.60',
    user: 'root',
    password: '123456',
    database: 'hxddz_party'
    // database: 'test'
});

connection.connect();


var today = new Date('2017-12-08 16:9');
var c = ['02', '03', '05'];
var s = [1, 2, 3];
var u = ['1001', '1002', '1003'];
var e = [77, 78];
var p = ['111', '222', '333'];
var re = [1000, 2000, 3000];
var buy = new Date('2017-12-08 10:9');

var max = 100 * 10000;
var unit = 10000;

// for (var i = 0; i < max; i+=unit) {
var func = function(count) { //分批次同步处理，同批次异步，更全面，每进一次函数就是一个批次
        console.log('count: ', count)
        if (count > max / unit) {
            connection.end();
            return
        }
        var uu = 0;
        for (var j = 0; j < unit; j++) {
            if (!Math.floor(Math.random() * 10)) {
                buy = new Date(buy.valueOf() + 1000);
            }
            today = new Date(today.valueOf() + 1000);
            var p_re = Math.floor(Math.random() * 3);

            var data = [s[Math.floor(Math.random() * 3)], Math.floor(Math.random() * 100), c[Math.floor(Math.random() * 3)],
                125, 5, e[Math.floor(Math.random() * 2)], today, re[p_re], 1000, p[p_re], '2', '3'
            ];
            var sql = "INSERT INTO gm_bean_flow (server_id, uid, channel, version, account_type, event, occur_time,`change`,new_value, param, ext1, ext2)" +
                " VALUES( ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? )"


            connection.query(sql, data, function(err, result) {
                uu++;

                // console.log('uu: ', uu)
                // console.log(result);
                if (uu === unit) {
                    func(++count);
                    console.log('next: ', count);
                }
            });
        }
    }
    //func(0);

var funmax = 10000000;
var pos = 0;
var id = [1, 2, 3];
var acc = '用户';
var role = '角色';
var str = 'test'

var start = new Date();


funmax=1000



var strcat=function(col,row){

    if(col<0){
        retrun 
    } 
    
    var retcat={'str':'','data':[]}
    var substr='';
    substr=substr+'(?';

    for(var i=1;i<col;i++){
        substr=substr+', ?'
    }
    substr=substr+')';

     retcat.str=substr
    
    for(var i=1 ;i<row;i++){
        retcat.str=retcat.str+','+substr

    }



    var pos=0;
      for(var i =0;i<row;i++){
        var uid = Math.ceil(Math.random() * 10000000);
        var mid= Math.ceil(Math.random() * 3);
        var btype=Math.ceil(Math.random() * 2);
        var tempdata=['1', '13001', '190', uid, '035031407692', '100', btype , mid, 'd', '200', '2018-06-05 14:05:49'];
        for(var j=0;j<col;j++){
            retcat.data[pos++]=tempdata[j]

        }
    }



    

    return retcat
}       //链接value后面的？


var funsyn = function() { //同步处理，更加内存不会挤爆

    var t = Math.floor(Math.random() * 3);
    var uid = Math.ceil(Math.random() * 10000000);
    var mid= Math.floor(Math.random() * 3);
    var data = ['1', '13001', '190', uid, '868035031407692', '100', '1', mid, 'd', '200', '2018-06-05 14:05:49'];
    data=[1,2,'2018-06-05 14:05:49','2018-06-05 14:05:49',2,4,'2018-06-05 14:05:49','2018-06-05 14:05:49',3,5,'2018-06-05 14:05:49','2018-06-05 14:05:49']


    var result=strcat(11,1000);

    var sql = "INSERT INTO fifa18_bet_flow (`sid`, `chn`, `ver`, `uid`, `imei`, `beans`, `btype`, `mid`, `binfo`, `rate`,  `create_at`)  VALUES "+
    result.str;
   // sql ="SELECT DATE_ADD('2018-04-01 5',INTERVAL FLOOR(RAND()* 90) DAY ) as a"
        

    connection.query(sql, result.data, function(err, result) {

        if (err) console.log(err)
        pos++
        if (pos < funmax) {
            funsyn()
        }
        console.log(result);

        if (pos == funmax) {s
            connection.end();
            console.log('time', new Date().valueOf() - start.valueOf())
        }
    });
}

funsyn();


var fun = function() { //异步处理，更快


        var fstart = new Date();
        for (var i = 0; i < funmax; i++) {

            var t = Math.floor(Math.random() * 3);
            var data = [id[t], str + id[t]];
            data = ['1', '13001', '190', '111123', '868035031407692', '72000', '1', '66', 'd', '305', '2018-06-05 14:05:49'];


            var sql = "INSERT INTO liushui_test (id,str)" +
                " VALUES( ? , ? )";

            sql = "INSERT INTO fifa18_bet_flow (`sid`, `chn`, `ver`, `uid`, `imei`, `beans`, `btype`, `mid`, `binfo`, `rate`,  `create_at`)" +
                " VALUES(? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ?   )";

            connection.query(sql, data, function(err, result) {
                // console.log(pos, 'next: ', data);
                if (err) console.log(err)

                //console.log('result: ', result);

            });

        }
        console.log('time2:', new Date().valueOf() - fstart.valueOf())

    }
    //fun()





//connection.end();  同步处理时，不可有
// } 
// #!/root/code/tools/node/node4.x64

// var mysql = require('/root/code/node_modules/mysql');
// var connection = mysql.createConnection({
//     host: '192.168.10.168',
//     user: 'root',
//     password: '123456',
//     database: 'hx_public_log'
// });

// connection.connect();

// var today = new Date('2017-12-08 16:9');

// var c = ['02', '03', '05'];
// var s = ['1', '2', '3'];
// var u = ['1001', '1002', '1003'];
// var p = [111, 222, 333];
// var re = [1000, 2000, 3000];

// var buy = new Date('2017-12-08 10:9');

// var max = 100
// var uu = 0

// for (var i = 0; i < max; i++) {
//     if (!Math.floor(Math.random() * 10)) {
//         buy = new Date(buy.valueOf() + 1000);
//     }
//     today = new Date(today.valueOf() + 1000);
//     var p_re = Math.floor(Math.random() * 3);

//     var data = [s[Math.floor(Math.random() * 3)]
//         , Math.floor(Math.random() * 100)
//         , c[Math.floor(Math.random() * 3)]
//         , '125'
//         , p[p_re]
//         , '1000'
//         , re[p_re]
//         , '1'
//         , buy.valueOf() / 1000
//         , today];

//     var sql = "INSERT INTO gm_funfund_remainder "
//         + "(server_id, uid, channel, version, product_id,bean_lt,reward_bean,left_times,buy_time,time) "
//         + "VALUES (?,?,?,?,?,?,?,?,?,?)";

//     connection.query(sql, data, function(err, result) {
//         uu ++
//         if (uu === max) {
//             connection.end();
//         }
//         // console.log(result);
//     });
// }


// returns




