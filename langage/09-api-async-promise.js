const fs = require('fs');

/*
Promise.all([
  fs.promises.readFile('.editorconfig'),
  fs.promises.readFile('01-hello.hs'),
]).then((octets) => {
  const octetsEditorConfig = octets[0];
  const octetsHello = octets[1];
})
*/

fs.promises.readFile('fichiers.txt')
  .then((octets) => octets.toString('utf-8').split('\n'))
  .then((lignes) => lignes.filter((fichier) => fichier !== ''))
  .then((lignes) => Promise.all(lignes.map((fichier) => fs.promises.readFile(fichier))))
  .then((octetsArray) => octetsArray.forEach((octets) => {
    console.log(octets.toString('utf-8'));
  }))
  .catch((err) => console.log(err));
