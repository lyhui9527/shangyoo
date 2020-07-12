var obj1 = {
	'3': 33,
	'aa': 1,
	'cc': 3,
	'bb': 2,
}

var obj2 = {
	'aa': 2,
	'cc': 3,
	'bb': 1,

}

obj1 = {
	1: 1,
	3: 3,
	2: 2,
	4: 4,
}

obj2 = {
	2: 2,
	1: 1,
	4: 4,
}

delete obj1['3']
var go = function (arg) {
	console.log(arg)
	console.log(Object.keys(arg))

}
go(obj1)
// go(obj2)
