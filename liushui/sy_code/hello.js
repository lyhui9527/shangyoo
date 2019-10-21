#!/root/code/tools/node/node7

const exec = require('child_process').exec



console.log("/dev/vdb1       493G  349G  119G  75% /home".split(/\s+/))
var ret = "/dev/vdb1       493G  349G  119G  75% /home".split(/\s+/)
var c = ret.filter(function (i) {
    if (i) { return i }
})
console.log(c)
// setInterval(

//     function () {
//         exec("tail -n 2000  /home/data/logs/bee_proxy.log |grep 'activity.hxddz.syyx.com' |cut -f2 -d' '", (error, stdout, stderr) => {
//             if (error) {
//                 console.error(`exec error: ${error}`);
//                 return;
//             }

//             var time = stdout.split('\n')
//             var timekey = {}
//             for (i in time) {
//                 if (timekey[time[i]]) {
//                     timekey[time[i]] = timekey[time[i]] + 1
//                 } else {
//                     timekey[time[i]] = 1
//                 }
//             }

//             console.log(Math.max.apply(this, Object.values(timekey)))

//         })

//     }
//     , 2000
// )

