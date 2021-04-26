var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}

var fs = require('fs')


var conf = JSON.parse(fs.readFileSync('config.json', 'utf-8'))

console.log(conf)

var handle_one_key = function (key, value) {
    var key_cont = {}
    key_cont['name'] = key
    var data_type = Array.isArray(value) ? typeof (value[0]) : typeof (value)
    var objectname = Array.isArray(value) ? 'table' : 'record'
    var type = Array.isArray(value) ? 'array' : data_type
    var sub_value = Array.isArray(value) ? value[0] : value
    if (data_type == 'number') {
        key_cont['type'] = type
    }
    if (data_type == 'string') {
        key_cont['type'] = type


    }
    if (data_type == 'object') {
        key_cont['type'] = objectname
        key_cont['from'] = handle_multi_key(sub_value)
    }
    if (Array.isArray(value)&&data_type != 'object') {
        key_cont['range'] = { 'array_type': data_type }
    }

    return key_cont
}

var handle_multi_key = function (sub_conf) {
    var keys = Object.keys(sub_conf)
    var ret = {}
    for (let i = 0; i < keys.length; i++) {
        ret[keys[i]] = handle_one_key(keys[i], sub_conf[keys[i]])
    }
    return ret
}

function main(params) {
    console.log(JSON.stringify(handle_multi_key(params)))
}

main(conf)
