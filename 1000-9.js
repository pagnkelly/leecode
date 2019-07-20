function count9(num) {
  const map = { 1: 0 };
  let n = 1;
  while (n <= num) {
    map[n * 10] = map[n] * 10 + n;
    n = n * 10;
  }

  return map[num];
}

var res = count9(1000);
console.log(res);



// 1: 0
// 10 : 0 * 10 + 1
// 100: 1 * 10 + 10
// 1000: 20 * 10 + 100

// 9 19 29 39 49 59 69 79 89 99 90 91 92 93 94 95 96 97 98 99
