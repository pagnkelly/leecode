
class Lazyman {
  constructor() {
    this.tasklist = [];
  }

  next() {
    this.tasklist.length && this.tasklist.shift()();
  }

  eat(type) {
    this.task(() => {
      console.log(type);
      this.next();
    });
    return this;
  }

  sleep(time) {
    this.task(this.fn(time));
    return this;
  }

  fn(time) {
    return () => {
      setTimeout(() => {
        console.log("sleep: " + time);
        this.next();
      }, time);
    };
  }

  sleepFirst(time) {
    this.tasklist.unshift(this.fn(time));
    return this;
  }

  task(fn) {
    this.tasklist.push(fn);
  }

  run() {
    this.next();
  }
}

var p = new Lazyman();

p.sleep(1000)
  .eat("lunch")
  .sleepFirst(2000)
  .sleep(500)
  .run();

