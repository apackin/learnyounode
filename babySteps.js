var arr = process.argv;
var sum = 0;
for (var i = 2; i < arr.length; i++) {
	sum += Number(arr[i]);
};

console.log(sum);