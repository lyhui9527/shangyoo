#!/root/code/tools/node/node7


const exec = require('child_process').exec
const execSync = require('child_process').execSync


//获取cpu、mem
var pidcmd = `ps -ef |grep node | grep -v "grep" |grep -v "site_check_cluster" | awk '{print $2}'`
var pids = execSync(pidcmd, { encoding: 'utf-8' }).split(/\n/)
var allcpu = 0
var allmem = 0
var allmem100 = 0


var getB = function (st) {
    if (st.indexOf('g') != -1) {
        return st.split('g')[0] * 1024 * 1024 * 1024
    }
    if (st.indexOf('m') != -1) {
        return st.split('m')[0] * 1024 * 1024
    }
    return st
}
var getBman = function (st) {

    if (st > 1024 * 1024 * 1024) {
        return (st / (1024 * 1024 * 1024)).toFixed(2) + 'g'
    }
    if (st > 1024 * 1024) {
        return (st / (1024 * 1024)).toFixed(2) + 'm'
    }
    return st

}

var getcpumem = function () {

    for (let i = 0; i < pids.length; i++) {
        if (pids[i] != '') {
            var topcmd = `top -b -n 1 -p ${pids[i]} | grep 'root'`
            let allinfo = ('  ' + execSync(topcmd, { encoding: 'utf-8' })).replace(/\s+/g, '#').split('#')
            // console.log(JSON.stringify(allinfo))
            // console.log(getB(allinfo[6]))
            allmem = allmem + Number(getB(allinfo[6]))
            allcpu = allcpu + Number(allinfo[9])
            allmem100 = allmem100 + Number(allinfo[10])

        }
    }
}

//获取机器运行时间
var uptime = execSync(`uptime | awk '{print $3$4$5}'`, { encoding: 'utf-8' })


//获取站点运行时间

var gettime = function (params) {
    params = params.split('\n')[0]
    if (params.split('-').length > 1) {
        var tinytimes = (params.split('-')[0] ? params.split('-')[0] : 0) * 86400
        var hms = params.split('-')[1].split(':')

    } else {
        var tinytimes = 0
        var hms = params.split('-')[0].split(':')
    }
    if (hms[2] != undefined) {

        tinytimes = tinytimes + hms[0] * 3600 + hms[1] * 60 + hms[2] * 1
    } else if (hms[1] != undefined) {
        tinytimes = tinytimes + hms[0] * 60 + hms[1] * 1


    } else if (hms[0] != undefined) {
        tinytimes = tinytimes + hms[0] * 1
    }

    return tinytimes

}
var times = []
var timesobj = {}

var getsitetime = function () {
    var max = null
    var min = null
    for (let i = 0; i < pids.length; i++) {

        if (pids[i] != '') {
            var pscmd = `ps -eo pid,etime | grep ${pids[i]} | awk '{print $2}'`

            let time = execSync(pscmd, { encoding: 'utf-8' })

            timesobj[gettime(time)] = time.split('\n')[0]
            times.push(gettime(time))

        }
    }
    times.sort(function (a, b) { return a - b })

}
// getsitetime()



//站点链接数、数据库连接数、文件句柄数

var est_num = Number(execSync(`netstat -nat|grep -i ":80"|grep "EST"|wc -l`, { encoding: 'utf-8' }))
var wat_num = Number(execSync(`netstat -nat|grep -i ":80"|grep "WAIT"|wc -l`, { encoding: 'utf-8' }))
var all_num = Number(execSync(`netstat -nat|grep -i ":80"|wc -l`, { encoding: 'utf-8' }))

var mysql_3306 = 0
var mysql_3307 = 0
var mssql_1433 = 0
var open_file = 0
for (let i = 0; i < pids.length; i++) {

    if (pids[i] != '') {
        var mysql_3306num = execSync(`netstat -anp|grep -i ":3306" | grep ${pids[i]} |wc -l`, { encoding: 'utf-8' })
        var mysql_3307num = execSync(`netstat -anp|grep -i ":3307" | grep ${pids[i]} |wc -l`, { encoding: 'utf-8' })
        var mssql_1433num = execSync(`netstat -anp|grep -i ":1433" | grep ${pids[i]} |wc -l`, { encoding: 'utf-8' })
        var open_filenum = execSync(`lsof -n|awk '{print $2}'| grep ${pids[i]} | wc -l`, { encoding: 'utf-8' })

        mysql_3306 += Number(mysql_3306num)
        mysql_3307 += Number(mysql_3307num)
        mssql_1433 += Number(mssql_1433num)
        open_file += Number(open_filenum)
    }
}



// 对外连接数

var ipaddr = execSync(`ifconfig | grep "inet addr" | awk 'NR==1{print $2}'`, { encoding: 'utf-8' })
var sip = ipaddr.split(/:|\n/g)[1]
var out_con = execSync(`netstat -nat| awk '{if($4!="'"${sip}"':80"&&$4!="'"${sip}"':22"&&$4~/'"${sip}"'/&&$5!="0.0.0.0:*") print $0}'|wc -l`, { encoding: 'utf-8' })




var version = execSync(`cd /root/code/script ;./cur_version.sh`, { encoding: 'utf-8' })




var alldir = execSync(`df -hl |grep '/'`, { encoding: 'utf-8' }).split(/\n/g)
var dirinfo = []

for (var i = 0; i < alldir.length; i++) {
    if (alldir[i] != '') {
        var info = {}
        var allinfo = alldir[i].split(/\s+/g)
        info['use'] = allinfo[2]
        info['avail'] = allinfo[3]
        info['use100'] = allinfo[4]
        info['name'] = allinfo[5]
        dirinfo.push(info)
    }

}
var showname = ''
dirinfo.forEach(function(i){
    showname += `${i.name}:已用${i.use}(${i.use100}),可用${i.avail}。`
})


var  rr=execSync(`iostat -dk | awk '{if($1=="sda" || $1=="vda") print $3}'`, { encoding: 'utf-8' })//.split(/\n/g)
var  rw=execSync(`iostat -dk | awk '{if($1=="sda" || $1=="vda") print $4}'`, { encoding: 'utf-8' })//.split(/\n/g)
var  hr=execSync(`iostat -dk | awk '{if($1=="sdb" || $1=="vdb") print $3}'`, { encoding: 'utf-8' })//.split(/\n/g)
var  hw=execSync(`iostat -dk | awk '{if($1=="sdb" || $1=="vdb") print $4}'`, { encoding: 'utf-8' })//.split(/\n/g)


getcpumem()
getsitetime()



console.log('cpu,mem,空间，机器运行时间，站点运行时间 ：')

console.log( allcpu + '%')
console.log(getBman(allmem), `(${allmem100.toFixed(2)}%)`)
console.log(showname)
console.log('', uptime)
console.log('最小：',timesobj[times[0]],'中间：',timesobj[times[parseInt((times.length-1)/2)]],'  最大：',timesobj[times[times.length-1]])
console.log('建立,等待，总的,3306,3307,1433,打开文件句柄,对外连接数: \n', est_num, '\n', wat_num, '\n', all_num, '\n',mysql_3306, '\n',mysql_3307, '\n',mssql_1433, '\n',open_file, '\n',out_con)
console.log(version)
console.log(`ioinfo:根目录:${rr}K(读);${rw}K(写);Home目录:${hr}K(读);${hw}K(写)`)