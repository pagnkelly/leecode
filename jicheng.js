function Parent(){
  this.a = 1;
  this.b = [1,2,this.a];
  this.c = {demo:5};
  this.show = function(){
   console.log(this.a + '' + this.c.demo + ':' + this.b + ': ' + this.c.s)
  }
}

function Child(){
  this.a  = 2;
  this.change = function(){
    this.b.push(this.a);
    this.a = this.b.length;
    this.c.demo = 2;
    this.c.s = 1;
    console.log('------', this.c.demo);
  }

}

Child.prototype = new Parent();
var parent = new Parent();
var child1 = new Child();
var child2 = new Child();

child1.a = 11;
child2.a = 12;

// 这前面几个还算简单,继续看下去
parent.show(); // 15:1,2,1

// 因为 Child 自身没有 show 的方法,所以往原型链的上游找;
// 找到父类的,this 因为没更改,所以输出结果如下
child1.show(); // 115:1,2,1
child2.show(); // 125:1,2,1

child1.change();  // 改变一些数据,没有输出
child2.change();

parent.show(); // 15:1,2,1

child1.show(); // 55:1,2,1,11,12
child2.show(); // 65:1,2,1,11,12
