##!/bin/bash

cat all_redis_cmd.txt | /root/code/tools/redis/redis-3.2.1-x64/src/redis-cli.x64 -h 127.0.0.1 -p 6379  --pipe



