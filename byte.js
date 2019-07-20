// 第一题： 定义一个Queue类， 第一次调用可以隔1000秒输出1，， 第二次调用可以隔2000秒输出2...最后可以调用run();

// new Queue()
//   .task(() => {
//     console.log(1)
//   }, 1000).task(() => {
//     console.log(2)
//   }, 2000).task(() => {
//     console.log(3)
//   }, 3000).run()
// 复制代码
// 第二题： 定义一个函数， 求和函数， 可以无数次调用， 并且在最后调用valueOf显示最终求和结果；

// sum(1)(2)(3)(4).valueOf()
// 复制代码
// 第三题： 第一步Promise + axios实现并发请求； 写完之后， 要求再在此基础上实现每次都并发5个请求（ 不会~~~）；

//   //  Promise+axios实现并发请求
//   // 实现并发5次请求

//   // 第一个答案
//   function getRequest() {
//     return axios.get(url)
//   };

// function postrequest() {
//   return axios.post(url)
// };
// axios.all([getRequest(), postrequest()])
//   .then()

// 作者： 木头房子
// 链接： https: //juejin.im/post/5cd0bdfc6fb9a031f10ca08c
//   来源： 掘金
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。


// class Queue {
//   constructor () {
//     this.taskList = [];
//   }

//   next() {
//     this.taskList.length && this.taskList.shift()();
//   }

//   task(fn, time) {
//     var f = () => {
//       setTimeout(() => {
//         fn();
//         this.next();
//       }, time);
//     };
//     this.taskList.push(f);
//     return this;
//   }

//   run() {
//     // console.log(this.taskList);
//     this.next();
//   }
// }



// class Queue {
//   constructor () {
//     this.taskList = [];
//   }

//   task(fn, time) {
//     this.taskList.push({ fn, time});
//     return this;
//   }

//   run () {
//     this.taskList.reduce((prev, next) => {
//       return prev.then(() => {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             next.fn();
//             resolve();
//           }, next.time);
//         }); 
//       });
//     }, Promise.resolve());
//   }
// }

// new Queue()
//   .task(() => {
//     console.log(1)
//   }, 1000).task(() => {
//     console.log(2)
//   },2000).task(() => {
//     console.log(3)
//   }, 3000).run()


var curry = function (fn, ...args) {
  let that = this;
  function r (...args2) {
    const a = [...args, ...args2];
    
    return curry.apply(that, [fn, ...a]);
  }

  r.valueOf = function () {
    return fn.apply(that, args)
    console.log(args);
  }
  return r;
}

var sum = curry((...args) => {
    console.log(args);
    return args.reduce((prev, next) => {
      return prev + next
    }, 0);
});

var res = sum(1)(2)(3)(4).valueOf();
console.log(res);