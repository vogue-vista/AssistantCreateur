function generer(){

let theme = document.getElementById("theme").value;

let idees = [
"Les 5 erreurs que les débutants font en "+theme,
"J'ai testé "+theme pendant 7 jours",
"3 choses que personne ne sait sur "+theme,
"Le meilleur conseil pour progresser en "+theme
];


let hasard = Math.floor(Math.random()*idees.length);


document.getElementById("resultat").innerHTML =
idees[hasard];

}
