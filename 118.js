/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const result = []
  let count = 0
  while (numRows--) {
    let n = 0
    let line = []
    while(n <= count) {
      if (result[count - 1]) {
        const l = result[count - 1][n- 1] ? result[count - 1][n- 1] : 0
        const r = result[count - 1][n] ? result[count - 1][n] : 0
        line.push(l + r)
      } else {
        line.push(1)
      }
      n++
    }
    result.push(line)
    count++
  }

  return result
};


console.log(generate(5))