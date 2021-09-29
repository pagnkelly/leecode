
const swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
};
const arr = [1, 3, 5, 12, 35, 3, 35, 456, 32];
// 冒泡排序

const bubble = (nums) => {
  const len = nums.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        swap(nums, j+1, j);
      }
    }
  }

  return nums;
}

console.log('=============bubble: ', bubble(arr));

// 选择排序

const select = (nums) => {
  const len = nums.length;
  let min = 0;
  for (var i = 0; i < len; i++) {
    min = i;
    for (var j = i; j < len; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }

    swap(nums, min, i);
  }

  return nums;
}

console.log('=============select: ', select(arr));

//插入排序

const insert = (nums) => {
  const len = nums.length;
  for (var i = 0; i < len; i ++) {
    var temp = nums[i];
    for (var j = i - 1; j >= 0 && nums[j] > nums[i]; j--) {
      nums[j + 1] = nums[j];
    }
    nums[j + 1] = temp;
  }

  return nums;
}

console.log('=============insert: ', insert(arr));


// 希尔排序


const shell = (nums) => {
  const len = nums.length;
  var gap = Math.floor(len / 3) + 1;
  for (; gap > 0; gap = Math.floor(gap/3)) {
    console.log('gap', gap);
    for (var i = gap; i < len; i ++) {
      var temp = nums[i];
      for (var j = i - gap; j >= 0 && nums[j] > nums[i]; j-=gap) {
        nums[j + gap] = nums[j];
      }
      nums[j + gap] = temp;
    }
  }
  return nums;
}

console.log('=============shell: ', shell(arr));

// 归并排序

const merge = (nums) => {
  const len = nums.length;
  if(len < 2) { return nums; }

  var middle = Math.floor(len / 2);
  var left = nums.slice(0, middle);
  var right = nums.slice(middle);

  return mergeSort(merge(left), merge(right));
}

const mergeSort = (left, right) => {
  var result = [];
  while(left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log('=============merge: ', merge(arr));

const quick = (nums, left, right) => {
  if (left < right) {
    var povit = partion(nums, left, right);
    quick(nums, left, povit - 1);
    quick(nums, povit+1, right);
  }
  return nums;
}

const partion = (nums, left, right) => {
  var index = left;
  var povit = nums[left];
  for (var i = left + 1; i <= right; i++) {
    if (nums[i] <= povit) {
      index++;
      if (index !== i) {
        swap(nums, index, i);
      }
    }
  }
  nums[left] = nums[index];
  nums[index] = povit;
  return index;
}

console.log('=============quick: ', quick(arr, 0, arr.length -1));