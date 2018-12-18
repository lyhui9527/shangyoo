var phone = {}
var call = []
var target_phone = []

var maxnum = 2000

var start = Date.now()

for (var i = 0; i < maxnum; i++) {
    var t = Math.ceil(Math.random() * 1000000)
    console.log(t)
    phone[t] = true
}

// for (var i = 0; i < maxnum; i++) {
//     var t = Math.ceil(Math.random() * 100000)
//     call.push(t)
// }

// console.log(Date.now() - start)

// start
// console.log("ok")
// var sum = 0
// start = Date.now()
// var tp = Object.keys(phone)
// for (var i = 0; i < call.length; i++) {
//     if (phone[call[i]]) {
//         phone[call[i]] = false
//     }

// }
// for (var i in phone) {
//     if (phone[i]) {
//     	target_phone.push(i)
//         sum++

//     }
// }


// console.log(Date.now() - start)

// console.log(Object.keys(phone).length)
// console.log(sum,target_phone.length)
// // console.log(target_phone)










