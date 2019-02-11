const fs = require('fs');

(async function () {
  try {
    const octetsText = await fs.promises.readFile('fichiers.txt'); // le thread est disponible le temps que le fichier soit lu
    const lignes = octetsText.toString('utf-8').split('\n');

    for (const fichier of lignes) {
      if (fichier !== '') {
        const octetsFichier = await fs.promises.readFile(fichier);
        console.log(octetsFichier.toString('utf-8'));
      }
    }
  }
  catch (err) {
    console.log(err);
  }
})();

