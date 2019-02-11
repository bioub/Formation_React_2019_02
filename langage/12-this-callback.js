class Contact {
  constructor(prenom) {
    this.prenom = prenom;
  }
  hello() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  }
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000);
  }
  helloAsyncMethod() {
    setTimeout(this.hello.bind(this), 1000);
  }
}

// function bind(fct, applyThis) {
//   return function() {
//     fct.call(applyThis);
//   }
// }

const romain = new Contact('Romain');
romain.hello();
romain.helloAsync();
romain.helloAsyncMethod();

