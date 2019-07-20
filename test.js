async function async1() {

  console.log('async1 start')

  await async2()

  console.log('async1 end')
  await async2()
  console.log('async2 end')
}

async function async2() {

  console.log('async2')

}

console.log('script start')

setTimeout(function () {

  console.log('settimeout')

})

async1()

new Promise(function (resolve) {

  console.log('promise1')

  resolve()
  console.log('pppp');
}).then(function () {

  console.log('promise2')

})

console.log('script end')