const fucArr = [
  next => {
    setTimeout(() => {
      console.log(1);
      next()
    }, 300)
  },
  next => {
    setTimeout(() => {
      console.log(2);
      next()
    }, 200)
  },
  next => {
    setTimeout(() => {
      console.log(3);
      next()
    }, 100)
  }
]

// var run = arr => {
//   // 递归语句千万条，找到出口第一条，那咱们判断递归出口的条件就是等待队列为空
//   if (arr.length === 0) return;
//   // 好的，一句话执行过程写完了
//   arr[0](() => run(arr.slice(1)));
// }

var run = arr => {
  const trigger = () => {
    if (arr.length === 0) return;
    arr.shift()();
  }
  arr = arr.map(val => {
    return () => new Promise(resolve => {
      console.log(resolve.toString());
      val(resolve)
      console.log('----');
    }).then(trigger);
  })
  trigger();
}

var curry = (fn, ...arr) => {
    // console.log('arr', arr);
  return (...args) => {
    // const arg = args.concat(arr);
    const arg = arr;
    arg.push(...args)
    // console.log(arr, arg, args);
    if (args.length === 0) {
      arr = [];
      return fn.apply(this, arg);
    } else {
      return curry.call(this, fn, ...arg);
    }
  }
}
// 实现一个run方法,使得run(fucArr)能顺序输出1、2、3.
run(fucArr);

// const curry = (fn, ...arg) => {
//   let all = arg || [],
//     length = fn.length;
//   return (...rest) => {
//     let _args = all;
//     _args.push(...rest);
//     if (rest.length === 0) {
//       all = [];
//       return fn.apply(this, _args);
//     } else {
//       return curry.call(this, fn, ..._args);
//     }
//   }
// }

// let test = curry(function (...rest) {
//   let args = rest.map(val => val * 10);
//   console.log(args);
// })
// test(2);
// test(2);
// test(3);
// test();
// test(5);
// test();
// test(2)(2)(2)(3)(4)(5)(6)();
// test(2, 3, 4, 5, 6, 7)();