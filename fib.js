var make_memo_fib = function(){
  var cache = [];
  var m_fib = function(n) {
    memo_fib_count++;
    if(cache[n])
      return cache[n];
    if(n<2)
      return n;
    return cache[n]= m_fib(n-1)+m_fib(n-2);
  }
  console.log(cache);
  return m_fib;
}

var memo_fib = make_memo_fib();

var memo_fib_test = function(n) {
  memo_fib_count=0;
  var f = memo_fib(n);
  console.log('n= '+n+' fib= '+f+' count= '+memo_fib_count);
}
