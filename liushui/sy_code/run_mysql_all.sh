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

day=`date -d "${first} " +%Y%m%d`
/root/code/tools/newdb_tools/mysql_query_tool.js  "DELETE from  stat_ad_ltv_${day}  WHERE type = 'fish';" "hx_stat_ad"

first=`date -d "${first} +1 day" +%Y-%m-%d`
done

