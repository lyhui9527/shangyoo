#!/root/code/tools/node/node7

var fs = require('fs')
var readline = require('readline')



var file = {
    'file': 'in',  //file path
    'row': 5000000,
    'unit': 2000000
}

var createfile = function (all) {

    var create_writer = fs.createWriteStream(all.file)
    var data = {
        'name': null,
        'value': null

    }
    create_writer.on('finish', function () {
        console.log('create_ok')
    })
    var data = unit_write_data(all.row)
    create_writer.write(data)
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
}

function unit_write_data(unit) {
    var ret = []
    var name
    var value
    for (let i = 0; i < unit; i++) {
        // name = 'name=' + 123654789 //Math.ceil(Math.random() * 100000000)  //fun slow
        // value = 'cos=' + 963258741 //Math.ceil(Math.random() * 100000000)  //fun slow
        value = Math.ceil(Math.random() * 100000000) + '1111111111111111111111111111111111111111111111111111111111111'
        ret.push(value)
    }
    return ret.join('\n')
}
createfile(file)