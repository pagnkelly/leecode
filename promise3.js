function limitLoad(urls, handler, limit) {
  // 对数组做一个拷贝
  const sequence = [].concat(urls)
  let promises = [];

  //并发请求到最大数
  promises = sequence.splice(0, limit).map((url, index) => {
    // 这里返回的 index 是任务在 promises 的脚标，
    //用于在 Promise.race 之后找到完成的任务脚标
    return handler(url).then(() => {
      return index
    });
  });

  (async function loop() {
    let p = Promise.race(promises);
    for (let i = 0; i < sequence.length; i++) {
      p = p.then((res) => {
        promises[res] = handler(sequence[i]).then(() => {
          return res
        });
        return Promise.race(promises)
      })
    }
  })()
}

var urls = [1, 2, 3, 4, 5, 6, 7, 8];
function loadImg(i) {
  return new Promise((resolve) => {
    const time = parseInt(Math.random() * i) * 100;
    setTimeout(() => {
      resolve(console.log(i, time));
    }, time);
  })
 
}
limitLoad(urls, loadImg, 3)




// 
var count = 0;

// 封装请求的异步函数,增加计数器功能
function request() {
  count++;
  loadImg(urls.shift()).then(() => {
    count--
  }).then(diaodu)


}
// 负责调度的函数
function diaodu() {
  if (urls.length > 0 && count <= 3) {
    request();
  }
}

function async1() {
  for (var i = 0; i < 3; i++) {
    request();
  }
}
async1()







// 计数器
var count = 0;
// 全局锁
var lock = [];
var l = urls.length;
// 阻塞函数
function block() {
  let _resolve;
  return new Promise((resolve, reject) => {
    _resolve = resolve;
    // resolve不执行,将其推入lock数组;
    lock.push(_resolve);
  });
}
// 叫号机
function next() {
  lock.length && lock.shift()()
}
async function bao() {
  if (count >= 3) {
    //超过限制利用await和promise进行阻塞;
    await block();
  }
  if (urls.length > 0) {
    console.log(count);
    count++
    await loadImg(urls.shift());
    count--;
    next()
  }
}
for (let i = 0; i < l; i++) {
  bao();
}
