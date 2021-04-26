var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}

var fs = require('fs')
var vm = require('vm')


var handle_one_key = function (sub_meta, key) {
    // console.log(sub_meta, key)
    var do_key = sub_meta.fields[key]
    var sub_ret = {
        width: 200
    }
    if (do_key.type == 'number') {
        if (do_key.hasOwnProperty('from')) {
            sub_ret['width'] = 150
        } else {
            sub_ret['width'] = 80
        }
    }
    if (do_key.type == 'boolean') {
        sub_ret['width'] = 50
    }
    if (do_key.type == 'array') {
        if (do_key['range'].array_type == 'number') {
            if (do_key.hasOwnProperty('from')) {
                sub_ret['width'] = 150
            } else {
                sub_ret['width'] = 80
            }
        }
    }
    if (do_key.type == 'table' || do_key.type == 'record') {

        sub_ret['value'] = [{
            'value': []
        }]
        // console.log('--------',metaparams[do_key['from'].replace(':','')])
        var metakeys = Object.keys(metaparams[do_key['from'].replace(':', '')]['fields'])
        var key_width = 0
        var ret = {}
        for (let i = 0; i < metakeys.length; i++) {
            ret = handle_one_key(metaparams[do_key['from'].replace(':', '')], metakeys[i])
            sub_ret['value'][0]['value'].push(ret)
            key_width = key_width + ret['width']
        }
        sub_ret['width'] = key_width 

    }
    return sub_ret

}




var handle_meta = function (mainmeta, name) {
    result_obj[name] = []
    var fields = mainmeta[name].fields
    var metakeys = Object.keys(fields)
    // console.log(metakeys)

    var ret = {}
    for (let i = 0; i < metakeys.length; i++) {
        ret = handle_one_key(mainmeta[name], metakeys[i])
        result_obj[name].push(ret)
        console.log(metakeys[i] + ' finish')
    }
    console.log(JSON.stringify(result_obj))
}

 var path = 'D:\\code\\tools\\hxddz_config\\4\\'
path = 'D:\\code\\tools\\hxddz_config\\4\\'
var allmeta = ['game_ad']
var result_obj = {}
var metaparams = null

if (allmeta.length > 0) {

    allmeta.forEach(function (metaname) {
        result_obj = {}
        var metafile = path + `${metaname}.meta`
        console.log(metafile)
        var stringmeta = fs.readFileSync(metafile).toString()
        stringmeta = `(${stringmeta})`
        metaparams = vm.runInThisContext(stringmeta)
        // console.log(metaparams, Object.keys(metaparams))
        handle_meta(metaparams, metaname)
    })
} else {
    console.log('no meta')
}