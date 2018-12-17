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



var fun1 = function() {
	console.log(date1.sort(sort_desc))

	if (temp.indexOf('temp/nycs_')) {
		ret = temp.spilt('temp')[1]
		out
	}
	if (temp.indexOf('serverid=')) {
		ret = 'serverid' + temp.spilt('serverid')[1]
		out
	}
	if (temp.indexOf('=')) {
		ret = 'serverid' + temp.spilt('serverid')[1]
		out
	}
	if (temp.indexOf('active=')) {
		ret = 'active' + temp.spilt('active')[1]
		out
	}
	if (temp.indexOf('active=')) {
		ret = 'active' + temp.spilt('active')[1]
		out
	}

}

var fun2 = function() {
	console.log(date1.indexOf('2018-11'), "===", date1.indexOf('2018-11-26'))

	var re1 = date2.find(function(item) {
		return (item.a>13)
	})
	console.log(re1)

	var re2 = date2.filter(function(item){
		return item.a<14
	})
	console.log(re2)

}
fun2()