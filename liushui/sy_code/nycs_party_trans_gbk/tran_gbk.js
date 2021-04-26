var iconv = require('iconv-lite');

const buffer = iconv.encode("测试123123.*!", "gbk");
const result = [];
const escapeMark = '-._~!*\()'.split('').map(e => e.charCodeAt(0));

for (let i = 0; i < buffer.length; i++) {
    const b = buffer[i];
    const isNumber = b >= 48 && b <= 58;
    const isAbc = (b >= 65 && b <= 90) || (b >= 97 && b <= 122);
    const isMark = ~escapeMark.indexOf(b);
    result[i] = isNumber||isAbc||isMark ? String.fromCharCode(b) : '%' + b.toString(16).toUpperCase();
}
console.log(result.join(''));