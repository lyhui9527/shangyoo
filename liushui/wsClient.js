//#!/root/code/tools/node/node7




; $(function () {



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

    var wscb = function (ws, i) {




        ws.onmessage = function (msg) {
            var ret = JSON.parse(msg.data)
            // console.log(ret.data);

            $('#con').append("<p>" + ret.data.server_name + "</p>")
        }

        ws.onclose = function () {
            alert('connect fail')
        }

        ws.onerror = function (e) {

            alert('err')

        }

        ws.onopen = function () {
            $('#con').append("<p>" + i + "</p>")
            // ws.send(JSON.stringify(data))
        }
    }


    var ws = [];

    var run = function () {

        // for (var i = 0; i < 500; i++) {
        //     // ws[i] = new WebSocket('ws://192.168.1.60:12306')
        //     ws[i] = new WebSocket('ws://119.145.139.71:12306')
        //     wscb(ws[i], i);

        // }
        var i = 0

        setInterval(function () {
            // i = i %1000;

            if(i<200){
                // ws[i] = new WebSocket('ws://119.145.139.71:12306')
                ws[i] = new WebSocket('ws://192.168.1.60:12306')
                wscb(ws[i], i);
                i++
            }
            // data.server_name = i;
            // console.log(ws[i].readyState)
            // if (ws[i]) {

            //     ws[i].send(JSON.stringify(data))
            // }
       
            // if (i % 10 == 0) {
            //     ws[i].close()

            // }
        }, 500)

    }
    run();

});
