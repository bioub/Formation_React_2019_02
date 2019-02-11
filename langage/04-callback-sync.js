const nbs = [2, 3, 4];

// programmation impérative
for (let i = 0; i < nbs.length; i++) {
  const nb = nbs[i];
  if (nb % 2 === 0) {
    const square = nb ** 2;
    console.log(square);
  }
}

// programmation fonctionnelle
nbs
.filter((nb) => nb % 2 === 0)
.map((nb) => nb ** 2)
.forEach((nb) => {
  console.log(nb);
});

// pile d'appels
// ^
// |               log  log
// |=> - => - =>   => - =>
// |filter       - forEach
// +----------------------------> temps
//                 2    4
