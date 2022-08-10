var F = function () {}
Object.prototype.a = function() {
  console.log('a')
}
Function.prototype.b = function () {
  console.log('b')
}
var f = new F()

f.a()
console.log(f.__proto__ === F.prototype)
console.log(F.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)
f.b()
F.a()
F.b()