
// ./stream_rt.js -p /root/code/tools/party_tools/hxddz -l /home/data/log/hxddz/party/rt  payrt  payrt silk_bag_2019 600 '2019-08-08' -f
// ./stream_rt.js -c /root/code/tools/party_tools/hxddz/sss_rt_conf.js -b '2019-08-08' -f
// ./stream_rt.js -f stopall -t

// 启动ledis /root/code/tools/redis/redis-3.2.1-x64/src/redis-cli.x64 -h 192.168.10.160 -p 8899

//2019-04-01
var moment = require('moment')

var s = moment('2019-07-01')

for (var i = 0; i >= -120; i--) {
	var d = moment(s).add(i, 'days').format('YYYY-MM-DD')
	// console.log('CREATE TABLE IF not exists  stat_ad_dpay_s_result_'+d," LIKE  stat_ad_dpay_s_result_20190808; ")
	//DELETE FROM  stat_ad_dgm_result_20190421  WHERE chn in ('10007','10006') AND adid != 'all'; 
	console.log("/root/code/tools/newdb_tools/hxddz.bs/ss_gm_liushui_stream.sh  ",d," | /root/code/tools/newdb_tools/hxddz.bs/ss_dgmp.js ",d)
}






// { host: '172.21.0.110', port: 6379, must_conn : 1, database: 0, db_list: ['hxddz_pt_redis'] }



// zadd hxddz_ok_orders  1565201400000003 "id=878021439&order_id=20001190412001478&pf_id=oppo&pk_id=02&pay_id=81&op_id=0&app_id=1404&server_id=1&account=&third_account=160234727&role_id=288138012&item_id=603&item_name=675%E4%B8%87%E9%87%91%E8%B1%86&item_count=1&item_price=900&currency=RMB&total_price=900&pay_amount=900&pay_result=ok&create_at=2019-08-05%2015%3A25%3A09&pay_at=2019-08-05%2016%3A55%3A51&ok_at=2019-08-05%2016%3A55%3A51&order_3rd_id=GC201904121410192620100180000&info=&user_type=1&ad_id="

// zadd hxddz_ok_orders  1565201400000002  "id=878021439&order_id=20001190412001478&pf_id=oppo&pk_id=02&pay_id=81&op_id=0&app_id=1404&server_id=1&account=&third_account=160234727&role_id=288138012&item_id=602&item_name=675%E4%B8%87%E9%87%91%E8%B1%86&item_count=1&item_price=900&currency=RMB&total_price=900&pay_amount=900&pay_result=ok&create_at=2019-08-05%2015%3A25%3A09&pay_at=2019-08-05%2016%3A55%3A51&ok_at=2019-08-05%2016%3A55%3A51&order_3rd_id=GC201904121410192620100180000&info=&user_type=1&ad_id="








// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=conf

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=check_time_interval

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=tel

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=restart_time

// http://kfd2.shangyoo.com/running/monitor/insert_data_to_monitor_conf?monitor_type=mini_prebuy_chn&name=is_open




