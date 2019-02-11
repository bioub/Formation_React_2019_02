// 3 styles pour créer des objets

// object literal
const coords = {
  x: 10,
  y: 20,
  getInfos: function() {
    return 'x: ' + this.x;
  },
};

// factory function
function coordsFactory(x = 0, y = 0) {
  return {
    x: x,
    y: y,
    getInfos: function() {
      return 'x: ' + this.x;
    },
  };
}

const coordsA = coordsFactory(10, 20);
const coordsB = coordsFactory(10, 20);
console.log(coordsA.getInfos() === coordsB.getInfos()); // true (dans ce cas le retour est le même)
console.log(coordsA.getInfos === coordsB.getInfos); // false

// constructor function
function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je m\'appelle ' + this.prenom;
};

// class Contact {
//   constructor(prenom) {
//     this.prenom = prenom;
//   }
//   hello() {
//     return 'Bonjour je m\'appelle ' + this.prenom;
//   }
// }

console.log(typeof Contact); // function
console.log(typeof Contact.prototype.hello); // function

const romain = new Contact('Romain');
const jean = new Contact('Jean');
console.log(romain.hello());
console.log(jean.hello());
console.log(romain.hello === jean.hello); // true
