#!/root/code/tools/node/node7

var fs = require('fs')
var async = require('D:\\code\\node_modules\\async')
var split = require('D:\\code\\node_modules\\split')

//使用流的方式读写，监听的方式

function read_file(i, on_data, finish) {
    var file = fs.createReadStream('in (' + i + ').log')
    file.setEncoding('utf8')
    
    return file.pipe(split())

}

var i = 1
var last = ''

function start() {

    var r = read_file(i)

    r.on('data', (data) => {

        var temp = data.toString()
        var ret = do_task(temp)
        ret && writer.write(ret)

    })
    r.on('end', () => {
        console.log('readok', i)
        i++
        if (i <= 50) {
            start()
        } else {
            writer.end()
        }
    })
}

var do_task = function(data) {
    var ret = ''
    if (data.indexOf('page=/nycs_') != -1) {
        ret = '\n' + 'curl \'127.0.0.1:8008' + data.split('page=')[1] + '?'
        last = 'nycs'
    }
    if (last == 'account') {
        return
    }
    if (data.indexOf('serverid=') != -1) {
        ret = 'serverid' + data.split('serverid')[1] + '&'
    }
    if (data.indexOf('account=') != -1) {
        ret = 'account' + data.split('account')[1] + '\''
        last = 'account'
    }
    if (data.indexOf('active=') != -1) {
        ret = 'active' + data.split('active')[1] + '&'
    }
    if (data.indexOf('time=') != -1) {
        ret = 'time' + data.split('time')[1] + '&'
    }
    return ret
}

var writer = fs.createWriteStream('aaa.txt')

start()

writer.on('finish', function() {
    console.log('haole')
})