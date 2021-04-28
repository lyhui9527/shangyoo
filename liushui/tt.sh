#!/bin/bash

echo [`date +'%Y-%m-%d %T'`]`ipcs -m |wc -lc`
echo '/root/code/tools/newdb_tools/shm_leak.sh  clean'
/root/code/tools/newdb_tools/shm_leak.sh  clean
echo [`date +'%Y-%m-%d %T'`]' ok'`ipcs -m |wc -lc`

