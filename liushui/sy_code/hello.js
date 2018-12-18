var async = require('D:\\code\\node_modules\\async')
var gg = [11, 2, 2, 1, 1, 2, 2, ]

var date1 = [
    '2018-11-21',
    '2018-11-17',
    '2018-11-18',
    '2018-11-23',
    '2018-11-19',
    '2018-11-20',
    '2018-11-22',
    '2018-11-24',
    '2018-11-25',
    '2018-11-26'
]


var date2 = [{
	a: 12,
	b: '1-1-1'
}, {
	a: 13,
	b: '2-2-2'
}, {
	a: 14,
	b: '3-3-3'
}, {
	a: 15,
	b: '4-4-4'
}, {
	a: 16,
	b: '5-5-5'
}]



var sort_asc = function(a, b) {
    return a > b
}


var sort_desc = function(a, b) {
    return a < b
}



// console.log(date1.sort(sort_desc))

// if (temp.indexOf('temp/nycs_')) {
//     ret = temp.spilt('temp')[1]
//     out
// }
// if (temp.indexOf('serverid=')) {
//     ret = 'serverid' + temp.spilt('serverid')[1]
//     out
// }
// if (temp.indexOf('=')) {
//     ret = 'serverid' + temp.spilt('serverid')[1]
//     out
// }
// if (temp.indexOf('active=')) {
//     ret = 'active' + temp.spilt('active')[1]
//     out
// }
// if (temp.indexOf('active=')) {
//     ret = 'active' + temp.spilt('active')[1]
//     out
// }

var card = {}

var run = function(num) {
    for (let i = 0; i < num; i++) {
        card[Math.ceil(Math.random() * 1000000000)] = 1

        // console.log(parseInt((Math.random() * 1000 + 1), 10))
    }

    ccard = Object.keys(card)
    for (let i = 0; i < ccard.length; i++) {
        console.log(ccard[i])
    }

}


run(400)


