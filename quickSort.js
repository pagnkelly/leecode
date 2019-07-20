var quickSort = function(nums) {
  if (nums.length < 2) return nums;

  var base = nums[0];
  var left = [], right = [];
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < base) {
      left.push(nums[i]);
    } else if(nums[i] > base) {
      right.push(nums[i]);
    }
  }
  const leftArr = quickSort(left);
  leftArr.push(base);
  return leftArr.concat(quickSort(right));
}
var swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}
var arr = [1, 3, 4, 10, 2, -1, 0];
var now = +new Date();
console.log(quickSort(arr));
console.log(+new Date() - now);


var quick = function (arr, start , end) {
  if (start > end) {
     return;
  }
  let i = start,
         j = end,
        pivot = arr[start]; //存放基准数
    while (i !== j) {

      // 从左边开始，找第一个大于基准的位置
      while (arr[i] <= pivot && i < j) {
        i++

      }
           // 从右边开始，找第一个小于基准的位置
          while (arr[j] >= pivot && i < j) {
                 j--;
      
    }
         // 交换两个数
            if (i < j) {
               let tmp = arr[i];
                 arr[i] = arr[j];
               arr[j] = tmp;
    
    }
  }
       // 最后把基准数归位\
  console.log('111', arr);
    arr[start] = arr[i];
    arr[i] = pivot;
    console.log(arr);
      // 递归处理左边
  quick(arr, start, i - 1);
   // 递归处理右边
  quick(arr, i + 1, end);
} 
console.log('---------');
var now = +new Date();
console.log(quick([1, 2, -1, 0, 11], 0, 4));
console.log(+new Date() - now);



var qqq = function (nums, start, end) {
  if (nums.length < 2) return;
  var base = 0;
  while (start < end) {
    while (nums[start] < nums[base]) {
      start ++;
    }
  }
}