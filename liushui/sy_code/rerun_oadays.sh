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

echo '$HOME/code/script/oa_attendance.sh'
$HOME/code/script/oa_attendance.sh  $first
echo '$HOME/code/script/oa_vacate_checkin.sh'
$HOME/code/script/oa_vacate_checkin.sh  $first
echo '$HOME/code/script/oa_weekend_result.sh'
$HOME/code/script/oa_weekend_result.sh  $first
echo '$HOME/code/script/oa_clock_checkin.sh'
$HOME/code/script/oa_clock_checkin.sh $first
echo '$HOME/code/script/oa_business_checkin.sh'
$HOME/code/script/oa_business_checkin.sh $first 

first=`date -d "${first} +1 day" +%Y-%m-%d`
done

