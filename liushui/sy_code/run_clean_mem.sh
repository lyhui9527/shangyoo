##!/bin/bash
num=`/root/code/tools/newdb_tools/shm_leak.sh  |wc -l`

echo  'mem: '$num

if [ $num -ge 500 ] 
then
/root/code/tools/newdb_tools/shm_leak.sh  clean
echo   'clean mem  ok' 
else
echo    'pass'
fi


