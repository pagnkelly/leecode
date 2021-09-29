/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
  let count = 0
  const result = []
 
  while (count <= rowIndex) {
    result.push(1)

    let l = 0
    let r = result.length - 1
    let cache = result[l]
    while(l + 1 <= r - 1) {
      l++
      r--
      const pre = cache
      cache = result[l]
      if (l !== r) {
        const rpre = result[r - 1]
        result[r] += rpre
      }

      result[l] += pre

    }


    count++
  }
  return result
};

console.log(getRow(4))