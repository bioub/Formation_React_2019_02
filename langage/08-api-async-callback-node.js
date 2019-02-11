const fs = require('fs');

// Callback hell / Pyramid of doom
fs.readFile('fichiers.txt', (err, octetsText) => {
  if (err) {
    console.log(err);
  }
  else {
    const lignes = octetsText.toString('utf-8').split('\n');
    lignes.filter((fichier) => fichier !== '')
          .forEach((fichier) => {
            fs.readFile(fichier, (err, octetsFichier) => {
              if (err) {
                console.log(err);
              }
              else {
                console.log(fichier); // parfois dans le désordre
                console.log(octetsFichier.toString('utf-8'));
              }
            });
          });
  }
});
