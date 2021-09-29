var leastInterval = function(tasks, n) {
  var tasksMap = {};
  var len = tasks.length;
  if (!len) return 0;
  var max = 0;
  for (var i = 0; i<len; i++) {
      var it = tasks[i];
      if (tasksMap[it] > 0) {
          tasksMap[it] += 1;
      } else {
          tasksMap[it] = 1;
      }
      max = Math.max(tasksMap[it], max);
  }
  var maxcount = 0;
  for (i in tasksMap) {
    if (tasksMap[i] == max) {
      maxcount ++;
    }
  }
  console.log(max, maxcount);
  var res = (max - 1)*(n + 1) + maxcount;
  
  return res > len ? res : len;
};


var res = leastInterval(["A","A","A","A","A","A","B","C","D","E","F","G"], 2);
console.log(res);