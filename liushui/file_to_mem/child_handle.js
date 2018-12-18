var fs = require('fs')
var readline = require('readline')

function start() {
	var input_name = process.argv[2] || 'in_0'
	var index = process.argv[3] || 0
	// if(input_name==''||index==0){
	// 	return
	// }
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
		writer.write(arr.join('\n'))
		writer.end()
	})

	writer.on('finish', () => {
		console.log('writer_ok')
		return

	})



}
var do_task = function(line) {
	var data = line.toString().split(/[=&]/)
	var ret = data[1] + ',' + data[3] || ''
	return ret
}
start()