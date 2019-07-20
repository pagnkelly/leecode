var a = 0;
function chou() {
  let ret = false;
  if (Math.random() < 0.0001) {
    ret = true;
  }
  console.log(a, ret);
  return ret;
}

while(!chou()) {
  a++;
}
