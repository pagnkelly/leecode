async function async1() {
  console.log('async1 start')
  await async2()
  console.log('async1 end')
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

  console.log('promise1 start')

  resolve()
  console.log('promise1 end');
}).then(function () {

  console.log('promise2')

})

console.log('script end')

// script start
// async1 start
// async2
// promise1
// pppp
// script end
// async1 end
// async2
// promise2
// async2 end
// settimeout