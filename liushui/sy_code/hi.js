// ./stream_rt.js -p /root/code/tools/party_tools/hxddz -l /home/data/log/hxddz/party/rt  payrt  payrt silk_bag_2019 600 '2019-08-08' -f
// ./stream_rt.js -c /root/code/tools/party_tools/hxddz/sss_rt_conf.js -b '2019-08-08' -f
// ./stream_rt.js -f stopall -t

// 启动ledis /root/code/tools/redis/redis-3.2.1-x64/src/redis-cli.x64 -h 192.168.10.160 -p 8899

//2019-04-01
var moment = require('moment')

var s = moment('2021-03-19')


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


var deptid = [
72,
84,
2,
57,
64,
96,
16
]

var str = ''
var pos = 1
for (var i = 0; i < 30; i++) {
    var dd = moment(s).add(i*5, 'MINUTE').format('YYYY-MM-DD HH:mm:ss')
    var ddd = moment(s).add((i+1)*5, 'MINUTE').format('YYYY-MM-DD HH:mm:ss')
    var d = moment(s).add(i, 'days').format('YYYYMMDD')
    var d2  = moment(s).add(i, 'days').format('YYYY-MM-DD') 
    // var is_work = rest_day.indexOf(dd) > -1 ? 0:1
    // console.log('rm -rf  '+d+exp1)
    // console.log('CREATE TABLE IF not exists  stat_ad_dpay_s_result_'+d," LIKE  stat_ad_dpay_s_result_20190808; ")
    //DELETE FROM  stat_ad_dgm_result_20190421  WHERE chn in ('10007','10006') AND adid != 'all'; 

d = 16
sql = `SELECT 
t5.id,
t5.title,
sum(t5.oc_18)/COUNT(t5.day),
SUM(t5.ot_19/t5.oc_19)/COUNT(t5.ot_19)/3600,
SUM(t5.ot_18/t5.oc_18)/COUNT(t5.ot_18)/3600

FROM
(
SELECT 
t6.id,
t6.title,
t3.day,
SUM(if((timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 18*60+30 MINUTE),t3.last_at)) >0 ,timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 18*60+30 MINUTE),t3.last_at),0 )) as ot_18,
COUNT(if((timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 18*60+30 MINUTE),t3.last_at)) >0 ,timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 18*60+30 MINUTE),t3.last_at),0 )) as oc_18,
SUM(if((timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 19*60+30 MINUTE),t3.last_at)) >0 ,timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 19*60+30 MINUTE),t3.last_at),0 )) as ot_19,
COUNT(if((timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 19*60+30 MINUTE),t3.last_at)) >0 ,timestampdiff(SECOND,DATE_ADD(t3.day,INTERVAL 19*60+30 MINUTE),t3.last_at),0 )) as oc_19
 FROM
(SELECT
    t1.day,
t1.last_at,
t1.staffid,
t1.nickname
FROM
    checkin_result AS t1
INNER JOIN workday_setting AS t2 ON t1. DAY = t2. DAY
WHERE
    t2.is_workday = 1
AND t1.day > '2019'
AND t1.day < '2020')as t3  INNER JOIN  (SELECT  staffid,teamid FROM  team_member  GROUP BY staffid )as t4 INNER JOIN team as t6 on t4.staffid = t3.staffid  AND t4.teamid = t6.id
WHERE
t6.id in(

 SELECT
        id
    FROM
        team
    WHERE
        disabled = 0
    AND need_checkin = 1
    AND parentid = ${d}
    UNION
        SELECT
            ${d}
)
 GROUP BY t3.day,t6.id
)as t5 GROUP BY t5.id;`

str1 ='/root/code/tools/newdb_tools/hxddz.bs/ss_login2_stream.sh ' + d2 + '| /root/code/tools/newdb_tools/hxddz.bs/ss_ios_ad_dau_mysql.js ' + d2
str2 ='/root/code/tools/newdb_tools/hxddz.bs/ss_ad_pay_s_stream.sh ' + d2 + '| /root/code/tools/newdb_tools/hxddz.bs/ss_ddz_ad_dpay_mysql.js ' + d2
str3 ='/root/code/tools/newdb_tools/hxddz.bs/ss_gm4_stream.sh ' + d2 + '| /root/code/tools/newdb_tools/hxddz.bs/ss_ad_dgm_mysql.js ' + d2
str4 ='/root/code/tools/newdb_tools/hxddz.bs/ss_ios_ad_remain_mysql.js ' + d2 



     // console.log('/root/code/tools/newdb_tools/hxddz.bs/ss_dn_30d_imei_androidid_oaid_stream.sh   $day  | /root/code/tools/newdb_tools/hxddz.bs/ss_dn_30d_imei_androidid_oaid.js  $day',)
     // console.log('/root/code/tools/newdb_tools/hxddz_h5.bs/ss_paysubrt_stream.sh  ',dd,ddd,'| /root/code/tools/newdb_tools/hxddz_h5.bs/ss_rtpaysub.js ',dd,ddd)
     // console.log(d2)
     console.log(Math.random()*1000000000)
}






// { host: '172.21.0.110', port: 6379, must_conn : 1, database: 0, db_list: ['hxddz_pt_redis'] }



// zadd hxddz_ok_orders  1565201400000003 "id=878021439&order_id=20001190412001478&pf_id=oppo&pk_id=02&pay_id=81&op_id=0&app_id=1404&server_id=1&account=&third_account=160234727&role_id=288138012&item_id=603&item_name=675%E4%B8%87%E9%87%91%E8%B1%86&item_count=1&item_price=900&currency=RMB&total_price=900&pay_amount=900&pay_result=ok&create_at=2019-08-05%2015%3A25%3A09&pay_at=2019-08-05%2016%3A55%3A51&ok_at=2019-08-05%2016%3A55%3A51&order_3rd_id=GC201904121410192620100180000&info=&user_type=1&ad_id="

// zadd hxddz_ok_orders  1565201400000002  "id=878021439&order_id=20001190412001478&pf_id=oppo&pk_id=02&pay_id=81&op_id=0&app_id=1404&server_id=1&account=&third_account=160234727&role_id=288138012&item_id=602&item_name=675%E4%B8%87%E9%87%91%E8%B1%86&item_count=1&item_price=900&currency=RMB&total_price=900&pay_amount=900&pay_result=ok&create_at=2019-08-05%2015%3A25%3A09&pay_at=2019-08-05%2016%3A55%3A51&ok_at=2019-08-05%2016%3A55%3A51&order_3rd_id=GC201904121410192620100180000&info=&user_type=1&ad_id="








// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=conf

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=check_time_interval

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=tel

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=restart_time

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=is_open
























