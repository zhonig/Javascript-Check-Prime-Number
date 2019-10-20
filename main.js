const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }


console.log("1:", isPrime(1)); //false
console.log("2:", isPrime(2)); //true
console.log("3:", isPrime(3)); //true
console.log("4:", isPrime(4)); //false
console.log("7:", isPrime(7)); //true
console.log("17:", isPrime(17)); //true