// define a function to calculate the Fibonacci sequence up to a given number
function fibonacci(num) {
    let a = 0, b = 1, c;
    if (num === 0) {
      return a;
    }
    for (let i = 2; i <= num; i++) {
      c = a + b;
      a = b;
      b = c;
    }
    return b;
  }
  
  // define a function to check if a given number belongs to the Fibonacci sequence
  function checkBelongs(num) {
    let i = 0, fib;
    do {
      fib = fibonacci(i);
      if (num === fib) {
        return true; 
      }
      i++;
    } while (fib <= num);
    return false;
  }
  
  // test the checkBelongs function with a given number
  const checkNumber = 4;
  if (checkBelongs(checkNumber)) {
    console.log(`${checkNumber} belongs to the Fibonacci sequence.`);
  } else {
    console.log(`${checkNumber} does not belong to the Fibonacci sequence.`);
  }