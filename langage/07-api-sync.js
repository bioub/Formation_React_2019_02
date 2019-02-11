const fs = require('fs');

try {
  const octetsText = fs.readFileSync('fichiers.txt'); // reste bloqué sur cette ligne le temps le fichier soit lu
  const lignes = octetsText.toString('utf-8').split('\n');

  for (const fichier of lignes) {
    if (fichier !== '') {
      const octetsFichier = fs.readFileSync(fichier);
      console.log(octetsFichier.toString('utf-8'));
    }
  }
}
catch (err) {
  console.log(err);
}
