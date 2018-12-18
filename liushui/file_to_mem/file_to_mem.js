#!/root/code/tools/node/node7

var fs = require('fs')
// var async = require('D:\\code\\node_modules\\async')
var split = require('split')
var readline = require('readline')
var async = require('async')

//使用流的方式读写，监听的方式

function read_file(name) {
    var file = fs.createReadStream(name)

    file.setEncoding('utf8')
    // return file
    return file.pipe(split())

}

var i = 1
var last = ''
const child_process = require('child_process')

function start() {

    var child_handle = 'child_handle.js'
    var count = 2
    var file_name = 'in'
    var flag = 1
    // split_file(file_name, count)
    // var all_file = ['in_0', 'in_1', 'in_2']



    // worker.on('exit', function(code) {
    //     flag++
    //     console.log('child_' + worker.pid + '_over')


    // })



    async.waterfall([
        function(cb) {
            split_file(file_name, count, cb)

        },
        function(all_file, cb) {

            console.log(all_file)

            for (var i = 0; i < count; i++) {
                var worker = child_process.fork(child_handle, [all_file[i], i], {
                    maxBuffer: 1024 * 1024 * 100 * 1024,
                    timeout: 1000 * 60 * 10
                })

                worker.on('exit', function(code) {
                    flag++
                    console.log('child_' + worker.pid + '_over')
                })
            }

            cb(null, all_file)

        }
    ], function(error, result) {
        if (error) {
            console.log(error)
        }

    })

    // var i=2
    // setInterval(function(){
    //  console.log(i)
    // },1000)


    // setTimeout(function(){
    //     console.log('over')
    // },10000)

    // console.log(all_file)
    // for (let i = 0; i < 2; i++) {
    //     console.log(all_file[i], '===', i)
    //     var worker = child_process.fork(child_handle, [all_file[i], i])

    //     worker.on('close', function(code) {
    //         flag++
    //         console.log('child_' + worker.pid + '_over')


    //     })
    // }



    // child_process.on('message',()=>{
    //     if(flag>=count)
    // })



    // var d1 = {}
    // var r1 = read_file('in')
    // var writer = fs.createWriteStream('out')
    // writer.on('finish', function() {
    //     console.log('haole')
    // })
    // r1.on('data', (data) => {

    //     writer.write(data)
    //     // var temp = data.toString()
    //     // writer.write(temp )
    //     // var t_data = to_obj(temp)
    //     // d1[t_data['name']] = t_data
    // })
    // r1.on('end', () => {
    //     console.log('r1eadok')
    //     writer.end()

    //     return

    // var r2 = read_file('in1')
    // r2.on('data', (data) => {

    //     var temp = data.toString()
    //     var t_data = to_obj(temp)
    //     if (d1[t_data['name']]) {
    //         d1[t_data['name']]['cos'] = t_data['cos']
    //     } else {
    //         d1[t_data['name']] = t_data
    //     }
    // })
    // r2.on('end', () => {
    //     console.log('r2eadok')
    //     // console.log(d1)

    //     var writer = fs.createWriteStream('out')
    //     var pos = 0
    //     for (i in d1) {
    //         // console.log(d1[i])

    //         writer.write(to_str(d1[i]) + '\n')
    //         // pos++
    //         // if (pos > 100) {
    //         //     return
    //         // }
    //     }

    //     // writer.end()
    //     writer.on('finish', function() {
    //         console.log('haole')
    //     })

    // })


    // })



}



var split_file = function(file_name, count, callback) {
    // console.log(file_name,count,callback)
    var writer = []
    var arr = []
    var ret = []

    for (let i = 0; i < count; i++) {
        ret[i] = file_name + '_' + i
        writer[i] = fs.createWriteStream(ret[i])
        arr[i] = []
    }
    var file = fs.createReadStream(file_name)
    var rl = readline.createInterface({
        input: file
    })
    // file=read_file(file_name)
    var pos = 0

    rl.on('line', (data) => {
        arr[pos % count].push(data)
        pos++

    })
    rl.on('close', () => {

        for (var i = 0; i < count; i++) {

            writer[i].write(arr[i].join('\n'))
            writer[i].end()
        }
        callback(null, ret)
        return
    })

    return

    // file.on('data', (data) => {
    //     arr[pos % count].push(data)
    //     pos++

    // })
    // file.on('end', () => {

    //     for (var i = 0; i < count; i++) {

    //         writer[i].write(arr[i].join('\n'))
    //         writer[i].end()
    //     }
    // })

}


var to_obj = function(obj) {
    var data = obj.toString().split(/[&=]/)
    // console.log(data)
    var ret = {}
    for (var i = 0; i < data.length; i = i + 2) {
        ret[data[i]] = data[i + 1]
    }
    return ret
}
var to_str = function(obj) {
    var data = Object.keys(obj)
    var ret = ''
    for (var i = 0; i < data.length; i++) {
        var t
        if (i) {
            t = '&' + data[i] + '=' + obj[data[i]]
        } else {
            t = data[i] + '=' + obj[data[i]]
        }

        ret = ret + t
    }
    return ret
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



var file = {
    'file': 'in',
    'row': 10000000,
    'unit': 2000000
}

var createfile = function(all) {

    var create_writer = fs.createWriteStream(all.file)

    var data = {
        'name': null,
        'value': null
    }

    create_writer.on('finish', function() {
        console.log('create_ok')
    })

    // next(1)

    // function next(i) {
    //     if (i > all.row) {
    //         create_writer.end()
    //         return
    //     }

    //     var syni = 0 //计算每个单元的index  每个单元里面都是一起异步进行写
    //     for (var j = 0; j < all.unit; j++) {

    //         data.name = 'name=' + Math.ceil(Math.random() * 100000000)
    //         data.value = 'cos=' + Math.ceil(Math.random() * 100000000)
    //         create_writer.write(data.name + '&' + data.value + '\n', function() {
    //             syni++
    //             i++
    //             if (syni >= all.unit && i <= all.row) {
    //                 next(i)
    //                 return
    //             }
    //             if (i > all.row) {
    //                 create_writer.end()
    //                 return
    //             }
    //         })

    //     }
    // }
    // create_writer.write()



    var ddd = unit_write_data(all.row)
    create_writer.write(ddd)



}

function unit_write_data(unit) {
    var ret = []
    var name
    var value
    for (let i = 0; i < unit; i++) {
        name = 'name=' + 123654789 //Math.ceil(Math.random() * 100000000)  //fun slow
        value = 'cos=' + 963258741 //Math.ceil(Math.random() * 100000000)  //fun slow
        ret.push(name + '&' + value)
    }
    return ret.join('\n')
}
// createfile(file)

start()