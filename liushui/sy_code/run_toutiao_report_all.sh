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
    s_day=`date -d"-1 day" +%Y-%m-%d`
    e_day=`date -d"-1 day" +%Y-%m-%d`
else
    s_day=$1

fi

first=$s_day
second=$e_day

while [ `date -d $first +%s` -le `date -d $second +%s` ]
do

/root/code/tools/db_tools/hxddz/ad/toutiao_dauly_report.sh $first

first=`date -d "$first +1 day" +%Y-%m-%d`
done

