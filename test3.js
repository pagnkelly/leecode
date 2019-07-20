let arr = [
  [
    ['1-7', '2-6'],
    '4-6',
    [
      ['2-0', '1-4'],
      ['3-9'],
      '4-5',
    ],
  ]
]

// Q1: 完成数组 flat 函数
function flat(arr) {
  // code
  var arr2 = [];
  arr.forEach(item => {
    // console.log('111', item);
    if(Array.isArray(item)) {
      arr2 = arr2.concat(flat(item));
    } else {
      arr2.push(item);
    }
  });
  return arr2
}

arr = flat(arr);
console.log(arr);

// Q2: 计算 arr 中所有的值：'1-7' => 1 * 7 = 7， 返回一个数字组成的数组
function calc(arr) {
  // code
  return arr.map(item => {
    const d = item.split('-');
    return d[0] * d[1];
  });
}

arr = calc(arr);
console.log(arr);

// Q3: 对这个数组排序和去重
function sortAndReduce(arr) {
  // code
  arr = [...new Set(arr)];
  arr.sort((a, b) => { return b - a; })
  return arr;
}

arr = sortAndReduce(arr);
console.log(arr);
