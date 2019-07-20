function NumberOf1Between1AndN_Solution(n) {
  var count = 0;
  var factor = 1;
  var cur = 0;
  var high = 0;
  var low = 0;

  while (divide(n, factor) !== 0) {
    low = n - (divide(n, factor)) * factor;
    cur = (divide(n, factor)) % 10;
    high = divide(n, factor * 10);

    if (cur === 0)
      count += high * factor;
    else if (cur === 1)
      count += (high * factor + low + 1);
    else
      count += (high + 1) * factor;
    
      console.log(low, cur, high, count);
    factor *= 10;
  }
  return count;
}

function divide(a, b) {
  return Math.floor(a / b);
}


var a = NumberOf1Between1AndN_Solution(4010);