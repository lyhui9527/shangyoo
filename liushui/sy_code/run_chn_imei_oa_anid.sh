#!/bin/bash

if [ x$2 == x ]
then
    s_day=$1
    e_day=$1
else
    s_day=$2
    e_day=$2
fi

if [ x$1 == x ]
then
    s_day=`$HOME/code/tools/newdb_tools/yesterday.sh`
    e_day=`$HOME/code/tools/newdb_tools/yesterday.sh`
else
    s_day=$1

fi

first=$s_day
second=$e_day

second=`date -d "${second} +1 day" +%Y-%m-%d`
while [ $first != $second ]
do
echo === $first ==='start'
/root/code/tools/newdb_tools/hxddz.bs/ss_dn_30d_imei_androidid_oaid_stream.sh   $first  | /root/code/tools/newdb_tools/hxddz.bs/ss_dn_30d_imei_androidid_oaid.js  $first
echo === $first === 'done'
first=`date -d "${first} +1 day" +%Y-%m-%d`
done

