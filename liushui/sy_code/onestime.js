#!/root/code/tools/node/node7
//for activity.hxddz.syyx.com proxy type

const exec = require('child_process').exec

var time = null
var timekey = {}
var mem = null
var max

setInterval(

    function () {
        exec("tail -n 3000  /home/data/logs/bee_proxy.log |grep 'activity.hxddz.syyx.com' |cut -f2 -d' '", (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            time = []
            timekey = {}
            time = stdout.split('\n')
            for (i in time) {
                if (timekey[time[i]]) {
                    timekey[time[i]] = timekey[time[i]] + 1
                } else {
                    timekey[time[i]] = 1
                }
            }
            max = Math.max.apply(this, Object.values(timekey))

            exec("df -h |grep 'home'", (err, std, stderr) => {
                if (err) {
                    console.error(`exec error: ${error}`);
                    return;
                }
                mem = std.split(/\s+/)
                console.log(Date().toString(), ' max_req:' + max, ',all_mem:' + mem[1], ',used_mem:' + mem[2], ',free_mem:' + mem[3], ',free_%#:' + mem[4], ',status:' + (parseFloat(mem[4]) < 10 ? 'err' : 'nice'))
            })
        })

    }
    , 5000
)

