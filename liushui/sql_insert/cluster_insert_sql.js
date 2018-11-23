#!/root/code/tools/node/node4.x64

var mysql = require('/root/code/node_modules/mysql');
var connection = mysql.createConnection({
    host: '192.168.10.238',
    user: 'root',
    password: '123456',
    database: 'kf'
    // database: 'test'
});

connection.connect();

const cluster = require('cluster');

var funmax = 10000;
var pos = 0;
var start = new Date();
funmax=40000



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
        
        var phone = Math.ceil(Math.random() * 1000000000);
        var paymoney= Math.floor(Math.random() * 100000);
        var grade = Math.floor(Math.random() * 1000);
        var mobiletype = Math.floor(Math.random() * 3);


        var tempdata=[];
        for(var j=0;j<col;j++){
            retcat.data[pos++]=tempdata[j]

        }
    }


    return retcat
}       //链接value后面的？













var funsyn = function() { //同步处理，更加内存不会挤爆

    var t = Math.floor(Math.random() * 3);
    var phone = Math.ceil(Math.random() * 1000000000);
    var paymoney= Math.floor(Math.random() * 100000);
    var grade = Math.floor(Math.random() * 1000);
    var mobiletype = Math.floor(Math.random() * 3);
    var data = [phone,paymoney,grade,mobiletype]

    var sql = "INSERT INTO nysycallingup (`mobile`, `paymoney`, `grade`,`mobiletype`) VALUES(? , ? , ? , ?)"
    
   // sql ="SELECT DATE_ADD('2018-04-01 5',INTERVAL FLOOR(RAND()* 90) DAY ) as a"
        
   console.log(sql)

    connection.query(sql,data, function(err, result) {

        if (err) console.log(err)
        pos++
        console.log("cluster: ",cluster.worker.id,' pos:',pos)
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


var run_worker = function() {

    funsyn();

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
