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


fs.truncateSync('./out') //清空文件



for (var i= 1;i<=50;i++){

    var target = fs.readFileSync('./in('+i+')', 'utf8').toString().split('\r\n'); //tongbu read needed row

    for (var i = 0; i < data.length; i++) {
        if (target.indexOf((i + 1).toString()) != -1) {
            console.log(i + 1, data[i])
            fs.writeFileSync('./out', i + 1 + ' ' + data[i] + '\n', { encoding: 'utf8', mode: '0777', flag: 'a' }); //同步的方式
       
        }
    }


}













var target = fs.readFileSync('./need_row', 'utf8').toString().split(/\s/); //tongbu read needed row
var data = fs.readFileSync('./in', 'utf8').toString().split('\r\n'); //tongbu read source 


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














