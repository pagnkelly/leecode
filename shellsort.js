function shellSort(arr) {
    var len = arr.length,
        temp,
        gap = 1;
    while(gap < len/3) {          //动态定义间隔序列
        gap =gap*3+1;
    }
    console.log(gap, len);
    for (gap; gap > 0; gap = Math.floor(gap/3)) {
        for (var i = gap; i < len; i++) {
            temp = arr[i];

            console.log('i', temp, i);

            for (var j = i-gap; j >= 0 && arr[j] > temp; j-=gap) {
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

console.log(shellSort([11, 2, 3, 5, 3, 4, 12, 43]));
console.log('----------');

function insertSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]){
      var temp = arr[i];

      for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
        arr[j+1] = arr[j];
      }
      arr[j + 1] = temp;
    }
  }

  return arr;
}

console.log(insertSort([1, 31, 11, 22, 32, 2]));
