var arr = [{id: 1}, {id: 1}, {id: 4}];

function removal (arr) {
  var str = JSON.stringify(arr);
  str = str.substring(1, str.length - 1);
  return [...new Set(str.split(','))].map(item => JSON.parse(item));
}

console.log(removal(arr));
