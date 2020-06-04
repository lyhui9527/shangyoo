var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}

var fs = require('fs')


var handle_one_key = function (key, value) {
    var key_cont = {}
    key_cont['name'] = key
    key_cont['range'] = {}
    var data_type = Array.isArray(value) ? typeof (value[0]) : typeof (value)
    var objectname = Array.isArray(value) ? 'table' : 'record'
    var type = Array.isArray(value) ? 'array' : data_type
    var sub_value = Array.isArray(value) ? value[0] : value


    if (data_type == 'number') {
        key_cont['type'] = type
        key_cont['range']['edit_type'] = data_type
    }
    if (data_type == 'string') {
        key_cont['type'] = type
        key_cont['range']['edit_type'] = data_type
    }
    if (data_type == 'boolean') {
        key_cont['type'] = type
        key_cont['range']['edit_type'] = "switch"
    }


    if (data_type == 'object') {
        key_cont['type'] = objectname
        key_cont['from'] = ':child_' + key
        delete key_cont['range']
        handle_multi_key(sub_value, `child_${key}`)
    }
    if (Array.isArray(value) && data_type != 'object') {
        key_cont['range']['array_type'] = data_type
        key_cont['range']['edit_type'] = key_cont['range']['edit_type'] + '_delete'
    }
    if (key == 'id') { key_cont['range']['edit_type'] = 'number_read_only' }
    return key_cont
}

var handle_multi_key = function (sub_conf, feature_name) {
    var keys = Object.keys(sub_conf)
    var ret = {}
    for (let i = 0; i < keys.length; i++) {
        ret[keys[i]] = handle_one_key(keys[i], sub_conf[keys[i]])
    }
    result_obj[feature_name] = result_obj[feature_name] || { "name": feature_name, "type": "table" }
    result_obj[feature_name]['fields'] = ret
}

var result_obj = {}

function main() {
    var feature_name = process.argv[2] || 'config'
    var feature_meta = feature_name+'.meta' || 'config.meta'
    var params = JSON.parse(fs.readFileSync(`${feature_name}.json`, 'utf-8'))
    handle_multi_key(params, feature_name)
    fs.writeFileSync(feature_meta, JSON.stringify(result_obj))
    console.log(feature_meta,': ',JSON.stringify(result_obj)) 
}

main()