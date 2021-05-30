var os = require('os')
var patt = /linux/i
var father = 'D:'
if (patt.test(os.type())) {
    father = '/root'
}

var fs = require('fs')
var readline = require('readline')



	var obj = {
		'pay_id=1' :  '' ,
		'pay_id=7' :  '' ,
		'pay_id=37' :  '' ,
		'pay_id=65' :  '' ,
		'pay_id=81' :  '' ,
		'pay_id=90' :  '' ,
		'pay_id=101' :  '' ,
		'pay_id=102' :  '' ,
		'pay_id=103' :  '' ,
		'pay_id=104' :  '' ,
		'pay_id=105' :  '' ,
		'pay_id=106' :  '' ,
		'pay_id=108' :  '' ,
		'pay_id=109' :  '' ,
		'pay_id=110' :  '' ,
		'pay_id=111' :  '' ,
		'pay_id=112' :  '' ,
		'pay_id=113' :  '' ,
		'pay_id=114' :  '' ,
		'pay_id=115' :  '' ,
		'pay_id=116' :  '' ,
		'pay_id=117' :  '' ,
		'pay_id=118' :  '' ,
		'pay_id=119' :  '' ,
		'pay_id=120' :  '' ,
		'pay_id=121' :  '' ,
		'pay_id=123' :  '' ,
		'pay_id=124' :  '' ,
		'pay_id=125' :  '' ,
		'pay_id=126' :  '' ,
		'pay_id=127' :  '' ,
		'pay_id=128' :  '' ,
		'pay_id=130' :  '' ,
		'pay_id=131' :  '' ,
		'pay_id=134' :  '' ,
		'pay_id=135' :  '' ,
		'pay_id=85' :  '' ,
		
		}




function start() {
	var input_name = process.argv[2] || 'D:/shangyoo/liushui/file_to_mem/diff.log'
	var index = process.argv[3] || 0
	// if(input_name==''||index==0){
	// 	return
	// }
	// input_name = 'F:/shangyoo/liushui/url_request/prebuy2.js'
	console.log(input_name, '+++', index)



	console.log("handle_pid parent", process.pid)

	var file = fs.createReadStream(input_name)
	var writer = fs.createWriteStream('out_' + index)
	var rl = readline.createInterface({
		input: file
	})
	var pos = 0
	var arr = []

	rl.on('line', (line) => {
		// pos++
		// if (pos % 10000 == 0) {
		// 	console.log(line)
		// }
		var data = do_task(line)

		arr.push(data)

	})
	rl.on('close', () => {
		console.log('readline_ok')
		let set = new Set(arr);
		console.log(set,)
		// writer.write(arr.join('\n'))
		// writer.end()
	})

	writer.on('finish', () => {
		console.log('writer_ok')
		return

	})



}
var do_task = function(line) {
	var data = line.toString().split(/\|/)
	return data[1]
	obj[data[1]] = line
	
}
start()