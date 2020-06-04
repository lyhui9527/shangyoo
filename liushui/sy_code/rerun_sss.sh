#!/bin/sh
date=$1
if [ x$1 = x ]
then
    date='2020-01-17'
fi
echo $date

#远程数据源的ip
ip='172.21.0.81'

#生成各个目录

mkdir -p /home/data/hxddz/daadu2.json/$date
mkdir -p /home/data/hxddz/daadu.bs/$date
mkdir -p /home/data/hxddz/daadu.json/$date
mkdir -p /home/data/hxddz/dad.bs/$date
mkdir -p /home/data/hxddz/dau.bs/$date
mkdir -p /home/data/hxddz/dgmp_flow.bs/$date
mkdir -p /home/data/hxddz/dgmp_flow.json/$date
mkdir -p /home/data/hxddz/dmjnu.bs/$date
mkdir -p /home/data/hxddz/dmju.bs/$date
mkdir -p /home/data/hxddz/dnd2.bs/$date
mkdir -p /home/data/hxddz/dnd.bs/$date
mkdir -p /home/data/hxddz/dnu.bs/$date
mkdir -p /home/data/hxddz/dnu.json/$date
mkdir -p /home/data/hxddz/dnu_ver.bs/$date
mkdir -p /home/data/hxddz/dorderu.bs/$date
mkdir -p /home/data/hxddz/dpayadt.bs/$date
mkdir -p /home/data/hxddz/dpayadu.bs/$date
mkdir -p /home/data/hxddz/dpay.json/$date
mkdir -p /home/data/hxddz/dpaynu.bs/$date
mkdir -p /home/data/hxddz/dpayt.bs/$date
mkdir -p /home/data/hxddz/dpayu.bs/$date
mkdir -p /home/data/hxddz/dplayc.json/$date
mkdir -p /home/data/hxddz/dptnu.bs/$date
mkdir -p /home/data/hxddz/dptu.bs/$date
mkdir -p /home/data/hxddz/firstdnu.bs/$date
mkdir -p /home/data/hxddz/fish_uid2ddz_uid.json/$date
mkdir -p /home/data/hxddz/rpkt_award.bs/$date
mkdir -p /home/data/hxddz/tad2.bs/$date
mkdir -p /home/data/hxddz/tad.bs/$date
mkdir -p /home/data/hxddz/tau.bs/$date
mkdir -p /home/data/hxddz/tau_ver.bs/$date
mkdir -p /home/data/hxddz/tmju.bs/$date
mkdir -p /home/data/hxddz/tmpmau.bs/$date
mkdir -p /home/data/hxddz/tmpmgmu.bs/$date
mkdir -p /home/data/hxddz/tmpmpayu.bs/$date
mkdir -p /home/data/hxddz/tpayu.bs/$date
mkdir -p /home/data/hxddz/tptau.bs/$date
mkdir -p /home/data/hxddz/trd_dpayu.bs/$date

mkdir -p /Data0/data/hxddz/dgma.bs/$date
mkdir -p /Data0/data/hxddz/dgmc.bs/$date
mkdir -p /Data0/data/hxddz/dgmf.bs/$date
mkdir -p /Data0/data/hxddz/dgmp.bs/$date
mkdir -p /Data0/data/hxddz/dgmt.bs/$date
mkdir -p /Data0/data/hxddz/dgmu2.bs/$date
mkdir -p /Data0/data/hxddz/dgmu.bs/$date
mkdir -p /Data0/data/hxddz/dgmwc.bs/$date


#复制各个目录
scp -r  root@$ip:/home/data/hxddz/daadu2.json/$date/*   /home/data/hxddz/daadu2.json/$date  
scp -r  root@$ip:/home/data/hxddz/daadu.bs/$date/*   /home/data/hxddz/daadu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/daadu.json/$date/*   /home/data/hxddz/daadu.json/$date  
scp -r  root@$ip:/home/data/hxddz/dad.bs/$date/*   /home/data/hxddz/dad.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dau.bs/$date/*   /home/data/hxddz/dau.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dgmp_flow.bs/$date/*   /home/data/hxddz/dgmp_flow.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dgmp_flow.json/$date/*   /home/data/hxddz/dgmp_flow.json/$date  
scp -r  root@$ip:/home/data/hxddz/dmjnu.bs/$date/*   /home/data/hxddz/dmjnu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dmju.bs/$date/*   /home/data/hxddz/dmju.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dnd2.bs/$date/*   /home/data/hxddz/dnd2.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dnd.bs/$date/*   /home/data/hxddz/dnd.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dnu.bs/$date/*   /home/data/hxddz/dnu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dnu.json/$date/*   /home/data/hxddz/dnu.json/$date  
scp -r  root@$ip:/home/data/hxddz/dnu_ver.bs/$date/*   /home/data/hxddz/dnu_ver.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dorderu.bs/$date/*   /home/data/hxddz/dorderu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dpayadt.bs/$date/*   /home/data/hxddz/dpayadt.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dpayadu.bs/$date/*   /home/data/hxddz/dpayadu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dpay.json/$date/*   /home/data/hxddz/dpay.json/$date  
scp -r  root@$ip:/home/data/hxddz/dpaynu.bs/$date/*   /home/data/hxddz/dpaynu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dpayt.bs/$date/*   /home/data/hxddz/dpayt.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dpayu.bs/$date/*   /home/data/hxddz/dpayu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dplayc.json/$date/*   /home/data/hxddz/dplayc.json/$date  
scp -r  root@$ip:/home/data/hxddz/dptnu.bs/$date/*   /home/data/hxddz/dptnu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/dptu.bs/$date/*   /home/data/hxddz/dptu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/firstdnu.bs/$date/*   /home/data/hxddz/firstdnu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/fish_uid2ddz_uid.json/$date/*   /home/data/hxddz/fish_uid2ddz_uid.json/$date  
scp -r  root@$ip:/home/data/hxddz/rpkt_award.bs/$date/*   /home/data/hxddz/rpkt_award.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tad2.bs/$date/*   /home/data/hxddz/tad2.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tad.bs/$date/*   /home/data/hxddz/tad.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tau.bs/$date/*   /home/data/hxddz/tau.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tau_ver.bs/$date/*   /home/data/hxddz/tau_ver.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tmju.bs/$date/*   /home/data/hxddz/tmju.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tmpmau.bs/$date/*   /home/data/hxddz/tmpmau.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tmpmgmu.bs/$date/*   /home/data/hxddz/tmpmgmu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tmpmpayu.bs/$date/*   /home/data/hxddz/tmpmpayu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tpayu.bs/$date/*   /home/data/hxddz/tpayu.bs/$date  
scp -r  root@$ip:/home/data/hxddz/tptau.bs/$date/*   /home/data/hxddz/tptau.bs/$date  
scp -r  root@$ip:/home/data/hxddz/trd_dpayu.bs/$date/*   /home/data/hxddz/trd_dpayu.bs/$date  


scp -r  root@$ip:/data/Data0/data/hxddz/dgma.bs/$date/*  /Data0/data/hxddz/dgma.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmc.bs/$date/*  /Data0/data/hxddz/dgmc.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmf.bs/$date/*  /Data0/data/hxddz/dgmf.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmp.bs/$date/*  /Data0/data/hxddz/dgmp.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmt.bs/$date/*  /Data0/data/hxddz/dgmt.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmu2.bs/$date/*  /Data0/data/hxddz/dgmu2.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmu.bs/$date/*  /Data0/data/hxddz/dgmu.bs/$date
scp -r  root@$ip:/data/Data0/data/hxddz/dgmwc.bs/$date/*  /Data0/data/hxddz/dgmwc.bs/$date

TRUNCATE  yuanxiao_dengmi_rank;
TRUNCATE  yuanxiao_dengmi_flow;
TRUNCATE  yuanxiao_dengmi_score;