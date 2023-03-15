var fibo = function(n) {

    if (n <= 1) return n;

    let prev2 = 0;
    let prev1 = 1;
    let c = 0;

    for (let i = 2; i<= n; i++) {
        c = prev1 + prev2;
        prev2 = prev1;
        prev1 = c;
    }

    return c;
};
console.log(fibo(10));





var fib = function(n) {
    if (n <= 1) return n;

    return fib(n-1) + fib(n-2);
}
console.log(fib(10));
