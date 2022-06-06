function factorial(number, answer = 1) {
  if (number === 1) {
    return answer;
  }
  return factorial(number - 1, answer * number);
}

// console.log(factorial(5));
// console.log("ANSWER: ", 5 * 4 * 3 * 2 * 1);

// console.log(factorial(4));
// console.log("ANSWER: ", 4 * 3 * 2 * 1);

// console.log(factorial(3));
// console.log("ANSWER: ", 3 * 2 * 1);

function factorial2(number) {
  if (number === 2) {
    return 2;
  }
  debugger;
  return number * factorial2(number - 1);
}

console.log(factorial2(5));
console.log("ANSWER: ", 5 * 4 * 3 * 2 * 1);
