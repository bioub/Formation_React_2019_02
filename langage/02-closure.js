var a = 'a';
function externe() {
  var b = 'b';
  function interne() {
    // on a toujours accès aux portées du dessus
    var c = 'c';
    console.log(a, b, c);
  }
  interne();
}

externe();
// console.log(typeof interne); // undefined

// pile d'appels
// ^
// |log
// |interne
// |externe
// +----------------------------> temps
