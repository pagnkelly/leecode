function thorttle (fn, wait) {
  let timeout;
  return function () {
    let args = arguments;
    let self = this;
    if (!timeout) {
      timeout = setTimeout(() => {
        fn.call(self, args);
        timeout = null;
      }, wait);
    }
  }
}

function t (fn, wait) {
  let prev = 0;

  return function () {
    let args = arguments;
    let self = this;

    let now = +new Date();

    if (now - prev > wait) {
      fn.call(self, args);
      prev = now;
    }
  }
}