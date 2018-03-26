function isPrime(num) {
	
	if(num <= 1) return false;
	
    for (let count = 2; count <= Math.floor(Math.sqrt(num)); count++) {
		
        if (num % count == 0) {
			
            return false;
			
        }
		
    }
	
    return true;
	
}

console.log("1:", isPrime(1)); //false
console.log("2:", isPrime(2)); //true
console.log("3:", isPrime(3)); //true
console.log("4:", isPrime(4)); //false
console.log("7:", isPrime(7)); //true
console.log("17:", isPrime(17)); //true