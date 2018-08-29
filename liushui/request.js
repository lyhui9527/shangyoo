#!/root/code/tools/node/node7

var fs = require('fs');
var http = require('http');
var request = require('request');



var main = function() {

    var url_get = 'http://party3hxddz.syyx.com/fifa18/today_matches'
    var url_post = 'http://party3hxddz.syyx.com/fifa18/my_bet'

    var count = 10000;


    //post
    var data_post = {
        server_id: 1,
        chn: 13001,
        uid: 288125,
        imei: 'ffffffff',
        sign: 'B6EC9C0E372A0867CF843A052ACD1182',
        beans: 1000,
        btype: 2,
        mid: 1,
        rid: 2,
        binfo: ["0304", "0200"],
        ver: 100,
        servercode: 10,
    }



    for (var i = 0; i < count; i++) {
        //        get

        data_get = '?servercode=100&uid=288125&sign=e3932c43107c70d7717b441890d6323e'
        request({
            url: 'http://192.168.1.60:8000?gg=5452&ee=3301',
            method: "GET"
        }, function(err, req, body) {
            console.log(body)
        });

        //     request({
        //         url: url_post,
        //         method: "post",
        //         json: true,
        //         headers: { "content-type": "application/json" },
        //         body: JSON.stringify(data_post)
        //     }, function(err, req, body) {

        //         console.log('body: %o ', body)
        //     });


    }



}


main();