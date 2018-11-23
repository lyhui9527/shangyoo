#!/root/code/tools/node/node7

var fs = require('fs');

var out = 'out.sh'

fs.truncateSync(out) //清空文件
//10 4909
//20 5678
//30 4525
//40 4185
//50 8223
//同步读取文件数据，并且同步写进另外的文件

var last = ''

for (var i = 1; i <= 50 ; i++) {

    var data = fs.readFileSync('in ('+i+').log', 'utf8').toString().split('\n'); //tongbu read needed row

    for (var j = 0; j < data.length; j++) {

        var temp = data[j].toString()
        // console.log(temp)
        if (temp.indexOf('page=/nycs_') != -1) {
           var ret = '\n'+'curl \'127.0.0.1:8008'+temp.split('page=')[1]+'?'
           last = 'nycs'
             fs.writeFileSync(out, ret, { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式
        }

        if(last == 'account'){
            continue
        }
        if (temp.indexOf('serverid=') != -1) {
           var ret = 'serverid' + temp.split('serverid')[1]+'&'
            fs.writeFileSync(out, ret, { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式
        }
        if (temp.indexOf('account=') != -1) {
           var ret = 'account' + temp.split('account')[1]+'\''
           last = 'account'
            fs.writeFileSync(out, ret, { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式
        }
        if (temp.indexOf('active=') != -1) {
           var ret = 'active' + temp.split('active')[1]+'&'
            fs.writeFileSync(out, ret, { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式
        }
        if (temp.indexOf('time=') != -1) {
           var ret = 'time' + temp.split('time')[1]+'&'
            fs.writeFileSync(out, ret, { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式
        }



        // console.log(ret)


    }



}

