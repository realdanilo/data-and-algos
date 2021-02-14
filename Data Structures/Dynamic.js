//dynamic programming example
//Fibonnacci Seq

//2^n
function fib(n){
    if(n <= 2) return n
    return fib(n-1)+fib(n-2)
}

//n
function fib_memo(n, memo=[]){
    if(memo[n]) return memo[n]
    let res = fib_memo(n-1, memo)+fib(n-2, memo)
    memo[n] = res 
    return res
}