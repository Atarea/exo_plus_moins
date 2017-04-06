alert("Bienvenue dans ce jeu du Plus ou Moins !");

// Cette ligne demande au joueur 1 de choisir un nombre entre 1 et 100
var solution = Number(prompt("Joueur 1, choisissez un nombre entre 1 et 100 :"));

//Il est demandé au joueur 2 d'essayer de deviner le choix du joueur 1
var saisie = Number(prompt("Joueur 2, Essayez de deviner le choix du Joueur 1 en entrant un nombre entre 1 et 100 :"));
var tentative = 1; //cette variable stocke le nombre de tentatives du joueur 2 pour trouver

while (saisie !== solution) {
  tentative++;
  if(saisie > solution) {
    saisie = Number(prompt(saisie + " est trop grand, réessayez ! Entrez un nombre entre 1 et 100 :"));
  }
  else if(saisie < solution) {
    saisie = Number(prompt(saisie + " est trop petit, réessayez ! Entrez un nombre entre 1 et 100 :"));
  };
};

if (saisie === solution) {
  alert("Bravo vous avez gagné ! La solution est " + solution + ". Vous avez trouvé en " + tentative + " essais !");
}

var newPartie = prompt("Voulez-vous lancer une nouvelle partie (Oui/Non) ? :");
if (newPartie === "Oui") {
  // Cette ligne demande au joueur 1 de choisir un nombre entre 1 et 100
  var solution = Number(prompt("Joueur 2, choisissez un nombre entre 1 et 100 :"));

  //Il est demandé au joueur 2 d'essayer de deviner le choix du joueur 1
  var saisie = Number(prompt("Joueur 1, Essayez de deviner le choix du Joueur 2 en entrant un nombre entre 1 et 100 :"));
  var tentative = 1; //cette variable stocke le nombre de tentatives du joueur 2 pour trouver

  while (saisie !== solution) {
  tentative++;
    if(saisie > solution) {
      saisie = Number(prompt(saisie + " est trop grand, réessayez ! Entrez un nombre entre 1 et 100 :"));
    }
    else if(saisie < solution) {
      saisie = Number(prompt(saisie + " est trop petit, réessayez ! Entrez un nombre entre 1 et 100 :"));
    }
  };

  if (saisie === solution) {
    alert("Bravo vous avez gagné ! La solution est " + solution + ". Vous avez trouvé en " + tentative + " essais !");
  };
}
else if (newPartie === "Non") {
  alert("A une prochaine fois alors !");
}
