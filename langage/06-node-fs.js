const fs = require('fs');

// Lire un fichier (version synchrone)
try {
  const octets = fs.readFileSync('.editorconfig'); // reste bloqué sur cette ligne le temps le fichier soit lu
  console.log(octets.toString('utf-8'));
}
catch (err) {
  console.log(err);
}

// Lire un fichier (version asynchrone basé sur des callbacks Node)
fs.readFile('.editorconfig', (err, octets) => {
  if (err) {
    return console.log(err);
  }
  console.log(octets.toString('utf-8'));
});

// Lire un fichier (version asynchrone basé sur des promesses)
fs.promises.readFile('.editorconfig')
  .then((octets) => console.log(octets.toString('utf-8')))
  .catch((err) => console.log(err));

// Lire un fichier (version asynchrone basé sur des promesses et async/await)
(async function () {
  try {
    const octets = await fs.promises.readFile('.editorconfig'); // reste bloqué sur cette ligne le temps le fichier soit lu
    console.log(octets.toString('utf-8'));
  }
  catch (err) {
    console.log(err);
  }
})();
