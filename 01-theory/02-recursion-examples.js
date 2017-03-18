/*
	using recursion to perform integer multiplication using addition

 */
function multiplyNumbers(a, b) {
	// without recursion
	let result = 0;
	while(b > 0) {
		result += a;
		b--;
	}
	return result;
}


function multiplyNumbersRecursively(a, b) {
	// add a to itself b times
	if(b == 1) return a; // base case
	return a + multiplyNumbers(a, b - 1);
}

/*
	Using recursion to compute n factorial
	
 */

// without recursion
function factorial(n) {
	let result = 1;
	while(n > 0) {
		result *= n;
		n--;
	}
	return result;
}

function factorialRecursion(n) {
	if(n == 1) return 1; // base case
	return n * factorialRecursion(n - 1);
}
