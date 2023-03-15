const fibonacci = (num, memo) => {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num < 2) return num;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  };
  
  for (let i = 0; i < 100; i++) console.log(fibonacci(i));