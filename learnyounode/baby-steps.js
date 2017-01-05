// 2- Baby steps
var sum = 0;
for (var i = process.argv.length - 1; i >= 0; i--) {
	if (!isNaN(process.argv[i])){
		sum += Number(process.argv[i]);
	}
}
console.log(sum);

// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
//   result += Number(process.argv[i])
// }
// console.log(result)
