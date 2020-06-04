#!/bin/bash
# sday=$1
# eday=$2
# eday=`date -d "$eday +1 day" +%Y-%m-%d`
# while [ $sday != $eday ]
# do
# echo xxxxx.js $sday
# sday=`date -d "$sday +1 day" +%Y-%m-%d`
# done


min=`date -d "$1" +%M`
min2=$min
if [ ${min: 0: 1} = 0 ]
then 
    min2=${min: 1: 1}
fi
 day=`date -d "$1 " +%Y-%m-%d' '%H`:$(($min2-$min2%5))

 echo $day

