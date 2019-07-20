// 非立即执行


function debounce(fn, wait) {
  let timeout;
  return function () {
    let self = this;
    let args = arguments;
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.call(self, args);
    });
  }
}

function d(fn, wait) {
  let timeout;
  return function() {
    let self = this;
    let args = arguments;
    
    let imm = !timeout;

    timeout = setTimeout(() => {
      timeout = null;
    });

    imm && fn.call(self, wait);
  }
}