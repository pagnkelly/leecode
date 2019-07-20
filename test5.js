function a () {
	setTimeout(() => { console.log('11111');}, 0)
	setImmediate(() => { console.log(2222);}, 0)
}

a();


function b () {

  setTimeout(() => { console.log(1); Promise.resolve().then(() => { console.log(3)}) }, 0)
  setTimeout(() => { console.log(2) }, 0)
}
b ();