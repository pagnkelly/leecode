// function myPromise(excutor) {

//   this.state = 'pending';
//   this.value = null;
//   this.reason = null;

//   function resolve(value) {
//     if (this.state == 'pending') {
//       this.state = 'fulfilled';
//       this.value = value;
//     }
//   }

//   function reject(reason) {
//     if (this.state == 'pending') {
//       this.state = 'reject';
//       this.reason = reason;
//     }
//   }

//   try {
//     excutor(resolve, reject);
//   } catch (e) {
//     console.log(e);
//   }
// }

// myPromise.prototype.then = function(onFulfilled, onRejected) {
//   if (this.state == 'fulfilled') {
//     onFulfilled(this.value);
//   } else if (this.state == 'fulfilled') {
//     onRejected(this.reason);
//   }
// }

const fucArr = [
  () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(1) 
      resolve(1)
    }, 1000)
  }),
  () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(2)
      resolve(2)
    }, 2000)
  }),
  () => new Promise((resolve) => {
    setTimeout(() => {
      console.log(3)
      resolve(3)
    }, 1000)
  })
]
/* 使用 async await */
async function queue(tasks) {
  const res = []
  for (let promise of tasks) {
    const r = await promise();
    console.log('------', r);
    res.push(r)
  }
  return await res
}
queue(fucArr)
  .then(data => {
    console.log(data)
  })
