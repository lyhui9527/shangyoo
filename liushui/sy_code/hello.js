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


var date2 = [1, 2, 3, 4, 2, 11, 22, 21, 25, 31]



var sort_asc = function(a, b) {
	return a > b
}


var sort_desc = function(a, b) {
	return a < b
}



console.log(date1.sort(sort_desc))