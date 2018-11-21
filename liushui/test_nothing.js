var arr_small = [1, 2, 3, 4]

var arr_big = [1, 4, 5, 6, 7, 2, 3]

var arr_date1 = ['2018-12-23','2018-08-12','2018-05-23','2018-02-20']
var arr_date2 = ['2018-12-23','2018-01-12','2018-05-13','2018-02-22','2017-12-25','2017-10-21']

var sortby_asc = function(a,b){
	return a>b
}

var sortby_desc = function(a,b){
	return a<b
}

console.log(arr_date2.sort(sortby_asc))


// var ret = arr_big.filter(function(item) {
//     return arr_small.indexOf(item) == -1
// })

// console.log(ret)
