//快速排序
function partition(arr, left, right){
    //对序列进行划分，以第一个为基准
    var pivot = arr[left];
    var pivotpos = left;
    for (var i = left+1; i <= right; i++){
        if (arr[i] < pivot){
            pivotpos++;
            if (pivotpos != i){     //如果交换元素就位于基准后第一个，则不需要交换
                console.log(arr[pivotpos], arr[i]);
                swap(arr, i, pivotpos);
                console.log(arr) ;
              }
        }
    }
    arr[left] = arr[pivotpos];
    arr[pivotpos] = pivot;
    return pivotpos;
}
function quickSort(arr, left,right){
    if (left < right){
        var pivotpos = partition(arr, left, right);
        console.log(left, 'left', pivotpos);
        quickSort(arr, left, pivotpos - 1);
        quickSort(arr, pivotpos + 1, right);
    }
}
function quick_sort(arr, len){
    quickSort(arr, 0, len - 1);
}

var swap = (nums, i, j) => {
  [nums[i], nums[j]] = [nums[j], nums[i]];
}

var arrs = [1, 33, 21, 2, 35, 6, 32, 6, 234, 1, 2, 3];
quick_sort(arrs, arrs.length);
console.log(arrs);
