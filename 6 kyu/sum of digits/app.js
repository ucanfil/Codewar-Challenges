// SOLUTION 1 //

function digital_root(n) {
	let array = String(n).split("").reduce((a, b) => a + +b, 0).toString().split("");
	while(array.length > 1){
		array = array.reduce().toString().split("");
	}
	return +array[0];
}

// SOLUTION 2 //

function digital_root(n) {
	return n < 10 ? n : digital_root(n.toString().split("").reduce((a, b) => a + +b,0));
}

// SOLUTION 3 //

const digital_root = n => (n - 1) % 9 + 1;