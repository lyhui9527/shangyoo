#!/root/code/tools/node/node4.x64

var http = require('http');
var request = require('request');
const cluster = require('cluster');

/*

    var data_post = {
        nick_name: 2,
        group_id: 2
    }
        url: url,
        method: "POST",
        json: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_post)
-----------------------------
        url: url,
        method: "GET",

*/


var nickname = [
    ['阿魏',
        '小歪',
        '寒月',
        '笑笑',
        '蓝黑',
        '丹丹',
        '石头',
        '天勤',
        '大毛',
        '东尼',
        '晴天观雨',
        '阿土',
        '麦兜',
        '旺旺',
        '落叶',
        '霜林',
        '白手',
        '绝风',
        '慕斯',
        '宇称',
        '虫子',
        '丸子',
        '空气',
        '沙鹰',
        '大牛',
        '黑豆',
        '木木',
        '骆驼',
        '飞鱼',
        '大鹏',
        '海啸',
        '土豆',
        '枫叶',
        '小杰',
        '甜星',
        '鸥洋',
        '果子',
        '风华',
        '凡尘',
        '力古',
        '蜜蜂',
        '棋子',
        '布丁',
        '文竹',
        '幻翼',
        '沙加',
        '辛夷',
        '馨子',
        '夜风',
        '荔枝',
        '爱喜',
        '西米',
        '暗月',
        '蓝枫',
        '默言',
        '杨柳',
        '厘米',
        '夏目',
        '白杨',
        '红豆',
        '灯笼',
        '文菡',
        '春晓',
        '梅子',
        '嘉树',
        '流苏',
        '寒轩',
        '致远',
        '菜头',
        '墨菲',
        '暖冬',
        '随风',
        '木槿',
        '至贤',
        '泽西',
        '梦乘',
    ],
    [
        '夏夜',
        '玄衣',
        '卡王',
        '二宝',
        '之晗',
        '米八',
        '蜡笔',
        '青山',
        '五叶',
        '菠萝',
        '剑圣',
        '羽轩',
        '龙象',
        '芦微',
        '犀牛',
        '马龙',
        '泡椒',
        '艾莎',
        '娜美',
        '星辰',
        '酥糖',
        '家腾',
        '白雪',
        '迦叶',
        '雪儿',
        '微风',
        '囍纸',
        '长风',
        '金桔',
        '盲僧',
        '刹那',
        '山竹',
        '香草',
        '冬然',
        '龙骑',
        '扶摇',
        '杜若',
        '紫竹',
        '舒窈',
        '晓航',
        '潘森',
        '一休',
        '黛茜',
        '排风',
        '胖胖',
        '夜雨',
        '豆芽',
        '竹剑',
        '四月',
        '若帆',
        '尤达',
        '夜月',
        '玉昆',
        '永澄',
        '飞星',
        '笠寒',
        '沐晨',
        '吉姆',
        '夜猫',
        '麦斯',
        '水母',
        '青蛙',
        '魏森',
        '有恒',
        '止水',
        '灵犀',
        '幺鸡',
        '见月',
        '天狼',
        '山川',
        '盖伦',
        '边城',
    ],
    [
        '叮当',
        '尼克',
        '砂糖',
        '思堂',
        '浪客',
        '留白',
        '宾果',
        '旅梦',
        '肉松',
        '戒指',
        '炭轩',
        '猎人',
        '杰里',
        '探长',
        '茶币',
        '麦冬',
        '熹禾',
        '风雨',
        '沉尘',
        '浅念',
        '夏葵',
        '弈语',
        '上原',
        '家驹',
        '狸花',
        '粥香',
        '苍炎',
        '阵雨',
        '星迹',
        '穆勒',
        '罗夏',
        '迦若',
        '防沙',
        '王子',
        '倍禾',
        '盒子',
        '牛搞',
        '林克',
        '未明',
        '沐戒',
        '冬夏',
        '山羊',
        '流水',
        '夕雾',
        '幻梦',
        '元亮',
        '贝勒',
        '巴顿',
        '白果',
        '彼得',
        '梁仁',
        '兔四',
    ],
    [
        '一帆',
        '黄桃',
        '圣轩',
        '七夜',
        '水濑',
        '弗丁',
        '夏风',
        '柳丁',
        '飞狐',
        '西罗',
        '耳猫',
        '木辛',
        '子云',
        '摩卡',
        '米悠',
        '蹦跶',
        '北鲲',
        '冰块',
        '晴明',
        '崇明',
        '木洋',
        '追风',
        '汤川',
        '树萌',
        '蛋黄',
        '杜衡',
        '卫龙',
        '天胡',
        '今朝',
        '什方',
        '子易',
        '虚竹',
        '墨明',
        '达尼',
        '汉堡',
        '南星',
        '奇主',
        '圆猫',
        '云帆',
        '拾光',
        '拙诚',
        '酒窝',
        '纯洁',
        '璇子',
        '芷萝',
        '叫兽',
        '乌拉',
        '赫拉',
        '迈特',
        '行者',
        '疾风',
        '犹大',
        '睡裤',
        '明天',
        '七海',
        '归尘',
        '胖虎',
        '皎月',
        '三九',
        '梵章',
    ],
    [
        '吖树',
        '帽子',
        '豆瓣',
        '逆光',
        '空白',
        '百舸',
        '烟枪',
        '顺子',
        '月飞',
        '莫寻',
        '科沃',
        '辰翼',
        '番妮',
        '知秋',
        '乔西',
        '当康',
        '洛书',
        '豆牛',
        '茉力',
        '秋晨',
        '帕林',
        '刘浪',
        '歆歆',
        '十里',
        '鱼晓',
        '山兔',
        '叶知',
        '初见',
        '雪露',
        '以寒',
        '云兮',
        '夕颜',
        '金木',
        '冰糖',
        '牧卡',
        '知遥',
        '笙歌',
        '腹肌',
        '肉丸',
    ],
    [
        '静水',
        '文香',
        '二鸣',
        '雷猴',
        '页书',
        '芋头',
        '三井',
        '浅溪',
        '铭月',
        '漠然',
        '埃迪',
        '天河',
        '芝士',
        '骑士',
        '文古',
        '千染',
        '影侠',
        '青岚',
        '羡平',
        '春夏',
        '典点',
        '丹妮',
        '抹茶',
        '雷诺',
        '艾帕',
        '木偶',
        '雨霏',
        '丑角',
        '阔落',
        '紫荆',
        '笑尘',
        '子默',
        '雪糍',
        '大刀',
        '凯文',
        '玄羽',
        '杰西',
        '米布',
        '铁米',
        '秋微',
        '枫阳',
        '梦轩',
        '琳娜',
        '炎武',
        '水星',
        '浅予',
        '蜀葵',
        '胖妹',
        '肥羊',
        '青豆',
        '二喵',
        '桐庐'
    ]
]





var count = 2
var pos = 0
var random = Math.ceil(Math.random() * 100000)
var pw = 0
var url = 'http://party3hxddz.syyx.com/mj_game_party/init?&sid=1&chn=20&ver=100&uid=' + Math.ceil(Math.random() * 1000000) + '&award_type=' + Math.ceil(Math.random() * 2) + '&award_rank=' + Math.ceil(Math.random() * 4)

url = 'http://party.hxddz.syyx.com/thanksgiving/insert_data?name=payok&uid=529630510&pay_amount=100&item_id=541&pay_id=65&chn=10006&ver=205&order_id=20065181120164674'
// url = 'http://party3hxddz.syyx.com/thanksgiving/draw_award?chn=02&ver=1.0.0&sign=xxx&servercode=50&_=0.860525818455115&serverid=1&uid='
url = 'http://party2hxddz.syyx.com/double12_buy/init_lottery?chn=10007&ver=1.0.0&uid=288138155&sign=xxx&servercode=224&serverid=1&r='
url = 'http://us.syyx.com/2019year_party/enroll/reg'
var run_worker = function() {

    main();

    return
}

var main = function() {
    // + '&cluster=' + cluster.worker.id
    var exta = Math.ceil(Math.random() * 10000001300)
    pw++
    var data_post = {
        nick_name: 2,
        group_id: 2
    }
    console.log(cluster.worker.id,pos)
    data_post.nick_name = nickname[cluster.worker.id][pos] //  Math.ceil(Math.random() * 10000001300) //nickname[cluster.worker.id][pos]

    request({
        url: url,
        // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
        method: "POST",
        json: true,
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data_post)
    }, function(err, req, body) {


        if (pos < count) {
            pos++;
            main();
            // console.log(body)
            // var data = JSON.parse(body)
            console.log(pos, '-----', body.ok)

           
            //     var data = body.toString().split(/[?&]/)
            //     var arg = {}
            //     data.forEach(function (item) {
            //         arg[item.split('=')[0]] = item.split('=')[1];
            //     })

            // if(arg.ret=='1'){
            //  process.send({ cmd: 'ok' });    
            // }

        }
        // request({
        //     url: url2 + exta,
        //     // url: 'http://192.168.1.60:8000?request='+cluster.worker.id+'&pw='+pw,
        //     method: "GET"
        // }, function(err, req, body) {
        //     console.log(pos, '-----', data)
        // });
    });
    return

}



var run_master = function() {
    //   const numCPUs = require('os').cpus().length;
    for (var i = 0; i < 5; i++) {
        cluster.fork();
    }


    function messageHandler(msg) {
        if (msg.cmd && msg.cmd === 'ok') {
            process.exit(0)
        }
    }


    for (const id in cluster.workers) {
        cluster.workers[id].on('message', messageHandler);
    }

}


if (cluster.isMaster) {
    run_master();

} else {

    run_worker();
}