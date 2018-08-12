#!/root/node-v8.11.1-linux-x64/bin/node

var fs = require('fs');
var readLine = require('lei-stream').readLine;

// // readLineStream第一个参数为ReadStream实例，也可以为文件名
// var s = readLine(fs.createReadStream('./in'), {
//     // 换行符，默认\n
//     newline: '\r\n',
//     // 是否自动读取下一行，默认false
//     autoNext: false,
//     // 编码器，可以为函数或字符串（内置编码器：json，base64），默认null
//     encoding: function(data) {
//         return data.toString();
//     }
// });
// var pos = 0

// // 读取到一行数据时触发data事件
// s.on('data', function(data) {
//     if (pos % 100 == 0) {
//         console.log(pos, data);
//     }
//     pos++;
//     s.next();
// });

// // 流结束时触发end事件
// s.on('end', function() {
//     console.log('end');
// });


// // writeLineStream第一个参数为ReadStream实例，也可以为文件名
// var s = writeLineStream(fs.createWriteStream('./myfile.txt'), {
//     // 换行符，默认\n
//     newline: '\n',
//     // 编码器，可以为函数或字符串（内置编码器：json，base64），默认null
//     encoding: function (data) {
//       return JSON.stringify(data);
//     },
//     // 缓存的行数，默认为0（表示不缓存），此选项主要用于优化写文件性能，当数量缓存的内容超过该数量时再一次性写入到流中，可以提高写速度
//     cacheLines: 0
//   });

//   // 写一行
//   s.write('data', function () {
//     // 回调函数可选
//     console.log('wrote');
//   });

//   // 结束
//   s.end(function () {
//     // 回调函数可选
//     console.log('end');
//   });



var readLine = require('lei-stream').readLine;
var writeLine = require('lei-stream').writeLine;

// 一个几百M的文本文件
var inputFile = './in';
var outputFile = './out';

var output = writeLine(outputFile);
var counter = 0;
var startTime = Date.now();

function msToS(v) {
    return parseInt(v / 1000, 10);
}

function getSpentTime() {
    return Date.now() - startTime;
}

readLine(inputFile).go(function(data, next) {
    counter++;
    output.write(data, next);
    if (counter % 10000 === 0) {
        printSpeedInfo();
    }
    // next();
}, function() {
    console.log('end');
    output.end(function() {
        console.log('done. total %s lines, spent %sS', counter, msToS(getSpentTime()));
        printMemoryUsage();
        process.exit();
    });
});

// 打印进度
function printSpeedInfo() {
    var t = msToS(getSpentTime());
    var s = counter / t;
    if (!isFinite(s)) s = counter;
    console.log('read %s lines, speed: %sL/S', counter, s.toFixed(0));
}

// 打印内存占用情况
function printMemoryUsage() {
    var info = process.memoryUsage();

    function mb(v) {
        return (v / 1024 / 1024).toFixed(2) + 'MB';
    }
    console.log('rss=%s, heapTotal=%s, heapUsed=%s', mb(info.rss), mb(info.heapTotal), mb(info.heapUsed));
}
setInterval(printMemoryUsage, 1000);