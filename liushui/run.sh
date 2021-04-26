#!/bin/bash
NODE='/root/node-v8.11.1-linux-x64/bin/node'

两种跑数据的脚本
1、/root/code/tools/newdb_tools/ss_launcher.js  --path=/root/code/tools/newdb_tools/hxddz.bs  --log=/home/data/log/hxddz --date=2019-10-08 --src=login  --topo='dau'
2、curl 'http://127.0.0.1:8817/start?date=2019-10-08&rocket=gm,gm2,gm3,gm4,gm_hv,gm_hv2,gm_hv4,gm_hv3'


04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgma.bs/2019-10-04/*   /Data0/data/hxddz/dgma.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-04/*   /Data0/data/hxddz/dgmc.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmf.bs/2019-10-04/*   /Data0/data/hxddz/dgmf.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmp.bs/2019-10-04/*   /Data0/data/hxddz/dgmp.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmt.bs/2019-10-04/*   /Data0/data/hxddz/dgmt.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu2.bs/2019-10-04/*   /Data0/data/hxddz/dgmu2.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu.bs/2019-10-04/*   /Data0/data/hxddz/dgmu.bs/2019-10-04

 
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-04/*   /Data0/data/hxddz/dgmc.bs/2019-10-04
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmwc.bs/2019-10-04/*   /Data0/data/hxddz/dgmwc.bs/2019-10-04


 05


scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgma.bs/2019-10-05/*   /Data0/data/hxddz/dgma.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-05/*   /Data0/data/hxddz/dgmc.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmf.bs/2019-10-05/*   /Data0/data/hxddz/dgmf.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmp.bs/2019-10-05/*   /Data0/data/hxddz/dgmp.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmt.bs/2019-10-05/*   /Data0/data/hxddz/dgmt.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu2.bs/2019-10-05/*   /Data0/data/hxddz/dgmu2.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu.bs/2019-10-05/*   /Data0/data/hxddz/dgmu.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-05/*   /Data0/data/hxddz/dgmc.bs/2019-10-05
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmwc.bs/2019-10-05/*   /Data0/data/hxddz/dgmwc.bs/2019-10-05

scp   -r    root@172.21.0.195:/home/data/hxddz/dgmwc.bs/*   /Data0/data/hxddz/dgmwc.bs/2019-10-05


mv  /Data0/data/hxddz/dgma.bs/2019-10-05   /home/data/hxddz/dgma.bs
mv  /Data0/data/hxddz/dgmc.bs/2019-10-05   /home/data/hxddz/dgmc.bs
mv  /Data0/data/hxddz/dgmf.bs/2019-10-05   /home/data/hxddz/dgmf.bs
mv  /Data0/data/hxddz/dgmp.bs/2019-10-05   /home/data/hxddz/dgmp.bs
mv  /Data0/data/hxddz/dgmt.bs/2019-10-05   /home/data/hxddz/dgmt.bs
mv  /Data0/data/hxddz/dgmu2.bs/2019-10-05   /home/data/hxddz/dgmu2.bs
mv  /Data0/data/hxddz/dgmu.bs/2019-10-05   /home/data/hxddz/dgmu.bs
mv  /Data0/data/hxddz/dgmwc.bs/2019-10-05   /home/data/hxddz/dgmwc.bs


mv  /Data0/data/hxddz/dgma.bs/2019-10-05/*  /home/data/hxddz/dgma.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmc.bs/2019-10-05/*  /home/data/hxddz/dgmc.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmf.bs/2019-10-05/*  /home/data/hxddz/dgmf.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmp.bs/2019-10-05/*  /home/data/hxddz/dgmp.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmt.bs/2019-10-05/*  /home/data/hxddz/dgmt.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmu2.bs/2019-10-05/*  /home/data/hxddz/dgmu2.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmu.bs/2019-10-05/*  /home/data/hxddz/dgmu.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmc.bs/2019-10-05/*  /home/data/hxddz/dgmc.bs/2019-10-05/
mv  /Data0/data/hxddz/dgmwc.bs/2019-10-05/*  /home/data/hxddz/dgmwc.bs/2019-10-05/



06



scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgma.bs/2019-10-06/*   /Data0/data/hxddz/dgma.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-06/*   /Data0/data/hxddz/dgmc.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmf.bs/2019-10-06/*   /Data0/data/hxddz/dgmf.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmp.bs/2019-10-06/*   /Data0/data/hxddz/dgmp.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmt.bs/2019-10-06/*   /Data0/data/hxddz/dgmt.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu2.bs/2019-10-06/*   /Data0/data/hxddz/dgmu2.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu.bs/2019-10-06/*   /Data0/data/hxddz/dgmu.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-06/*   /Data0/data/hxddz/dgmc.bs/2019-10-06/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmwc.bs/2019-10-06/*   /Data0/data/hxddz/dgmwc.bs/2019-10-06/


mv  /Data0/data/hxddz/dgma.bs/2019-10-06    /home/data/hxddz/dgma.bs/
mv  /Data0/data/hxddz/dgmf.bs/2019-10-06    /home/data/hxddz/dgmf.bs/
mv  /Data0/data/hxddz/dgmp.bs/2019-10-06    /home/data/hxddz/dgmp.bs/
mv  /Data0/data/hxddz/dgmt.bs/2019-10-06    /home/data/hxddz/dgmt.bs/
mv  /Data0/data/hxddz/dgmu2.bs/2019-10-06    /home/data/hxddz/dgmu2.bs/
mv  /Data0/data/hxddz/dgmu.bs/2019-10-06    /home/data/hxddz/dgmu.bs/
mv  /Data0/data/hxddz/dgmc.bs/2019-10-06    /home/data/hxddz/dgmc.bs/
mv  /Data0/data/hxddz/dgmwc.bs/2019-10-06    /home/data/hxddz/dgmwc.bs/




07 
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgma.bs/2019-10-07/*   /Data0/data/hxddz/dgma.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-07/*   /Data0/data/hxddz/dgmc.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmf.bs/2019-10-07/*   /Data0/data/hxddz/dgmf.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmp.bs/2019-10-07/*   /Data0/data/hxddz/dgmp.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmt.bs/2019-10-07/*   /Data0/data/hxddz/dgmt.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu2.bs/2019-10-07/*   /Data0/data/hxddz/dgmu2.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu.bs/2019-10-07/*   /Data0/data/hxddz/dgmu.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-07/*   /Data0/data/hxddz/dgmc.bs/2019-10-07/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmwc.bs/2019-10-07/*   /Data0/data/hxddz/dgmwc.bs/2019-10-07/


mv  /Data0/data/hxddz/dgma.bs/2019-10-07    /home/data/hxddz/dgma.bs/
mv  /Data0/data/hxddz/dgmf.bs/2019-10-07    /home/data/hxddz/dgmf.bs/
mv  /Data0/data/hxddz/dgmp.bs/2019-10-07    /home/data/hxddz/dgmp.bs/
mv  /Data0/data/hxddz/dgmt.bs/2019-10-07    /home/data/hxddz/dgmt.bs/
mv  /Data0/data/hxddz/dgmu2.bs/2019-10-07    /home/data/hxddz/dgmu2.bs/
mv  /Data0/data/hxddz/dgmu.bs/2019-10-07    /home/data/hxddz/dgmu.bs/
mv  /Data0/data/hxddz/dgmc.bs/2019-10-07    /home/data/hxddz/dgmc.bs/
mv  /Data0/data/hxddz/dgmwc.bs/2019-10-07    /home/data/hxddz/dgmwc.bs/


08

scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgma.bs/2019-10-08/*   /Data0/data/hxddz/dgma.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-08/*   /Data0/data/hxddz/dgmc.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmf.bs/2019-10-08/*   /Data0/data/hxddz/dgmf.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmp.bs/2019-10-08/*   /Data0/data/hxddz/dgmp.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmt.bs/2019-10-08/*   /Data0/data/hxddz/dgmt.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu2.bs/2019-10-08/*   /Data0/data/hxddz/dgmu2.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmu.bs/2019-10-08/*   /Data0/data/hxddz/dgmu.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmc.bs/2019-10-08/*   /Data0/data/hxddz/dgmc.bs/2019-10-08/
scp   -r    root@172.21.0.195:/Data0/data/hxddz/dgmwc.bs/2019-10-08/*   /Data0/data/hxddz/dgmwc.bs/2019-10-08/



mv  /Data0/data/hxddz/dgma.bs/2019-10-08    /home/data/hxddz/dgma.bs/
mv  /Data0/data/hxddz/dgmc.bs/2019-10-08    /home/data/hxddz/dgmc.bs/
mv  /Data0/data/hxddz/dgmf.bs/2019-10-08    /home/data/hxddz/dgmf.bs/
mv  /Data0/data/hxddz/dgmp.bs/2019-10-08    /home/data/hxddz/dgmp.bs/
mv  /Data0/data/hxddz/dgmt.bs/2019-10-08    /home/data/hxddz/dgmt.bs/
mv  /Data0/data/hxddz/dgmu2.bs/2019-10-08    /home/data/hxddz/dgmu2.bs/
mv  /Data0/data/hxddz/dgmu.bs/2019-10-08    /home/data/hxddz/dgmu.bs/
mv  /Data0/data/hxddz/dgmwc.bs/2019-10-08    /home/data/hxddz/dgmwc.bs/




172.21.0.195:/home/data/hxddz/dadc.bs on /home/data/hxddz/dadc.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/dadu.1.bs on /home/data/hxddz/dadu.1.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/dadu.1s.bs on /home/data/hxddz/dadu.1s.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/dadu.2.bs on /home/data/hxddz/dadu.2.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/dadu.2s.bs on /home/data/hxddz/dadu.2s.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/dadu.3.bs on /home/data/hxddz/dadu.3.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/dnu.bs on /home/data/hxddz/dnu.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/rtadc.1.bs on /home/data/hxddz/rtadc.1.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/rtadc.2.bs on /home/data/hxddz/rtadc.2.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/rtadc.3.bs on /home/data/hxddz/rtadc.3.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/tau.bs on /home/data/hxddz/tau.bs type nfs (rw,addr=172.21.0.195)
172.21.0.195:/home/data/hxddz/daadu.bs on /home/data/hxddz/daadu.bs type nfs (rw,addr=172.21.0.195)


mount -t nfs  172.21.0.195:/home/data/hxddz/dadc.bs        /home/data/hxddz/dadc.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/dadu.1.bs        /home/data/hxddz/dadu.1.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/dadu.1s.bs        /home/data/hxddz/dadu.1s.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/dadu.2.bs        /home/data/hxddz/dadu.2.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/dadu.2s.bs        /home/data/hxddz/dadu.2s.bs/file_to_mem/out
mount -t nfs  172.21.0.195:/home/data/hxddz/dadu.3.bs        /home/data/hxddz/dadu.3.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/dnu.bs        /home/data/hxddz/dnu.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/rtadc.1.bs        /home/data/hxddz/rtadc.1.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/rtadc.2.bs        /home/data/hxddz/rtadc.2.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/rtadc.3.bs        /home/data/hxddz/rtadc.3.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/tau.bs        /home/data/hxddz/tau.bs
mount -t nfs  172.21.0.195:/home/data/hxddz/daadu.bs        /home/data/hxddz/daadu.bs


mount -t nfs 172.21.0.148:/home/data/hxddz/dnu.json/   /data/home/data/hxddz/dnu.json


curl 'http://127.0.0.1:1817/start?date=2019-10-08&rocket=gm'


/root/code/tools/newdb_tools/hxddz.bs/ss_dn_30d_imei_androidid_oaid_stream.sh   $day  | /root/code/tools/newdb_tools/hxddz.bs/ss_dn_30d_imei_androidid_oaid.js  $day




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

