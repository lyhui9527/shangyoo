#!/root/code/tools/node/node7

var fs = require('fs')
var readline = require('readline')



var file = {
    'file': 'in', //file path
    'row':  10,
    'unit': 10
}

var data = {
    'name': null,
    'value': null

}

var createfile = function(all) {

    var create_writer = fs.createWriteStream(all.file)


        if (all.row - all.unit >= 0) {
            all.row = all.row - all.unit
            next_write(create_writer, all.unit); 
        }else{
         next_write(create_writer, all.row)
        }



    create_writer.on('finish', function() {
        console.log('create_ok')
    })


    create_writer.on('drain', function() {
        console.log(all);
        if (all.row - all.unit > 0) {
            all.row = all.row - all.unit
            next_write(create_writer, all.unit)
        }
        else if(all.row > 0){

            next_write(create_writer, all.row)
            all.row = all.row - all.unit
        }

        
    });

}
var next_write = function(writer, unit) {
    var data = unit_write_data(unit)
    writer.write(data)
}

function unit_write_data(unit) {
    var ret = []
    var name
    var value
    for (let i = 0; i < unit; i++) {
        // name = 'name=' + 123654789 //Math.ceil(Math.random() * 100000000)  //fun slow
        // value = 'cos=' + 963258741 //Math.ceil(Math.random() * 100000000)  //fun slow
        value = i + ' good' + Math.ceil(Math.random() * 100000000) + ' ' + Math.ceil(Math.random() * 100000000) //Math.ceil(Math.random() * 100000000) + '1111111111111111111111111111111111111111111111111111111111111'
        ret.push(value)
    }
    return ret.join('\n')+'\n'
}
createfile(file)