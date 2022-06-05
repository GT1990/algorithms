// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811, ...

// Naive Approach
function fibonacci(n, currentSum = 0, lastSum = 0, iteration = 0) {
  if (iteration === n) {
    console.log(currentSum);
    return;
  }
  if (iteration === 0) {
    return fibonacci(n, 1, 0, iteration + 1);
  }
  return fibonacci(n, currentSum + lastSum, currentSum, iteration + 1);
}

function fibonacci2(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci2(n - 1) + fibonacci2(n - 2);
}

fibonacci(0);
fibonacci(1);
fibonacci(2);
fibonacci(3);
fibonacci(4);
fibonacci(5);
fibonacci(6);
fibonacci(7);
fibonacci(8);
fibonacci(9);
fibonacci(10);
fibonacci(11);
fibonacci(12);
fibonacci(13);
fibonacci(14);
fibonacci(15);
