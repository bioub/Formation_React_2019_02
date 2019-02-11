// REST Params (conversion liste -> array)
function sum(...nbs) {
  return nbs.reduce((acc, nb) => acc + nb, 0); // ES5
}

// acc: 0, nb: 1 = 1
// acc: 1, nb: 2 = 3
// acc: 3, nb: 3 = 6
// acc: 6, nb: 4 = 10
// acc: 10, nb: 5 = 15

console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD Operator (conversion array -> liste)
function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}

const nbs = [1 , 2   , 3    , 4, 5];
console.log(sum2(...nbs)); // 15

const clone = [...nbs];

nbs.push(6); // changement muable
const newNbs = [...nbs, 6]; // changement immuable

// Destructurer un tableau
// équivalent PHP de list :
// list($a, $b) = [1, 2];
//    [1 , 2   , 3    , 4, 5]
const [un, deux, trois,  ,  , six = 6] = nbs;

const x = 10;

const coords = {
  x,
  y: 20,
};

// Destructurer un objet
//    {x: 10  , y: 20  }
const {x: varX, y      , z: varZ = 30} = coords;
console.log(varX); // 10
console.log(varZ); // 30

// SPREAD Operator sur les objets (conversion objets -> liste de clé/valeur) (ES9)
const cloneCoords = {...coords};

coords.z = 30; // changement muable
const newCoords = {...coords, z: 30}; // changement immuable

// REST Params sur les objets (ES9)
const {z, ...coords2d} = coords;
console.log(z); // 30
console.log(coords2d); // {x: 10, y: 20}
