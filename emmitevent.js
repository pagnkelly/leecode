class EmmitEvent {
  constructor() {
    this.pubs = {};
  }

  add(name, fn) {
    const pub = this.pubs[name];
    if (pub) {
      pub.push(fn);
    } else {
      this.pubs[name] = [fn];
    }
  }

  remove(name, fn) {
    const pub = this.pubs[name];
    if (pub) {
        const call = pub.indexOf(fn);
        pub.splice(call, 1);
    }
  }

  notify(name, args) {
    if (this.pubs[name]) {
      this.pubs[name].forEach(item => {
        item(args);
      });
    }
  }
}

const p = new EmmitEvent();

p.add('s', (name) => { console.log(name); });
p.add('s', (name) => { console.log(`${name} name`); })

p.notify('s', 'd');


const a = new EmmitEvent();
a.add('s', (name) => { console.log(`a${name}`); } );
a.notify('s', 'a')
