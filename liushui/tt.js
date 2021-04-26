#!/root/code/tools/node/node4.x64

var i = 0
var s = setInterval(function () {

    if (i < 50) {
        clearInterval()
    }
    console.log(i)
    i++

},1000)