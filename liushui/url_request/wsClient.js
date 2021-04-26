//#!/root/code/tools/node/node7




;
$(function() {



    var data = {
        account: 'ggg',
        server_id: 2,
        rank: 5,
        server_name: 0,
        role_name: 2564,
        role_id: 21458,
        rank: 2552
    }
    data.message = 'client';
    data.video_name = '2315'



    var wscb = function(ws, i) {

        ws.onmessage = function(msg) {

            console.log(msg);

            // $('#con').append("<p>" + ret.data.server_name + "</p>")
        }

        ws.onclose = function() {
            alert('connect fail')
        }

        ws.onerror = function(e) {

            alert('err')

        }

        ws.onopen = function() {
            // $('#con').append("<p>" + i + "</p>")
            ws.send(JSON.stringify({ name: "verify", data: i }))
        }
    }


    var ws = [];
    var maxws = 20
    var singlenum = 500


    var run = function() {

        var i = 300
        
        var ss = setInterval(function() {
            ws[i] = new WebSocket('wss://us.syyx.com:443/money_money/player')
            wscb(ws[i], i)
            i++
            if (i > maxws) {



                setTimeout(function() {
                clearInterval(ss)

                }, 6000)


                console.log('create man ok')
            }


        }, 100)




        // i = 1
        // var sss = setInterval(function() {
        //   
        //     i++
        //     if (i > maxws) {
        //         clearInterval(sss)
        //         console.log('connect server ok')
        //     }

        // }, 100)

        // setTimeout(function() {
        //     for (var i = 1; i <= maxws; i++) {
        //         singlerun(ws[i])
        //     }

        // }, 5000)



    }

    var singlerun = function(wsi) {
        let i = 0
        var ss = setInterval(function() {
            if (i < singlenum) {
                i++
                wsi.send(JSON.stringify({ data: i, name: "score" }))

            } else {
                clearInterval(ss)
                console.log()
            }
        }, 50)
    }

    run();

});