
var moment = require('moment')
var s = moment('2020-02-03')


var sql = `
SELECT

DATE_FORMAT(t1.login_time,'%Y-%m-%d'),
 COUNT(DISTINCT t1.imei)
FROM
    gm_first_login AS t1
INNER JOIN gm_ad_login AS t2 ON t1.uid = t2.uid
WHERE
    t1.channel = '30001'
AND t1.login_time >= '2020-02-03'
AND t2.login_time >= '2020-02-03'
AND t1.login_time < '2020-02-04'
AND t2.login_time < '2020-02-04'
AND t2.sParam1 = '1000016'
AND t2.channel = '30001';
`
var exp1 = '/[01]*'
var exp2 = '/2[012].*'

var rest_day = [
    "Sunday",
    "Saturday"
]

for (var i = 0; i <=31; i++) {
    var dd = moment(s).add(i, 'days').format('dddd')
    var d = moment(s).add(i, 'days').format('YYYY-MM-DD')
    var d2  = moment(s).add(i+1, 'days').format('YYYY-MM-DD') 
    var is_work = rest_day.indexOf(dd) > -1 ? 0:1
    // console.log('rm -rf  '+d+exp1)
    // console.log('CREATE TABLE IF not exists  stat_ad_dpay_s_result_'+d," LIKE  stat_ad_dpay_s_result_20190808; ")
    //DELETE FROM  stat_ad_dgm_result_20190421  WHERE chn in ('10007','10006') AND adid != 'all'; 
    sql = `
SELECT
DATE_FORMAT(t1.login_time,'%Y-%m-%d'),
 COUNT(DISTINCT t1.imei)
FROM
    gm_first_login AS t1
INNER JOIN gm_ad_login AS t2 ON t1.uid = t2.uid
WHERE
    t1.channel = '30001'
AND t1.login_time >= '${d}'
AND t2.login_time >= '${d}'
AND t1.login_time < '${d2}'
AND t2.login_time < '${d2}'
AND t2.sParam1 = '1000016'
AND t2.channel = '30001';
`
    console.log('xxxxxxx.js ',d)
}


