function creerVideo(){

let theme = document.getElementById("theme").value;
let plateforme = document.getElementById("plateforme").value;
let style = document.getElementById("style").value;


if(theme == ""){
    alert("Écris un sujet !");
    return;
}


let resultat = `

<h2>🎬 Ta vidéo complète</h2>


<h3>🔥 Titre :</h3>

"7 choses que personne ne te dit sur ${theme}"


<h3>⚡ Hook (0-3 secondes) :</h3>

"Si tu fais ça dans ${theme}, tu dois absolument arrêter maintenant..."


<h3>📝 Script complet :</h3>


<b>🎙️ Introduction (0-5 secondes)</b>

"Beaucoup de personnes veulent réussir dans ${theme}, mais elles font souvent les mêmes erreurs.
Aujourd'hui je vais te montrer les choses importantes que tu dois savoir."


<br><br>

<b>📌 Partie 1 - Le problème (5-20 secondes)</b>

"Le plus gros problème avec ${theme}, c'est que beaucoup de personnes commencent sans avoir de plan.
Elles cherchent des résultats rapides, mais oublient les bases."


<br><br>

<b>📌 Partie 2 - La solution (20-45 secondes)</b>

"La meilleure façon de progresser est de comprendre les fondamentaux.
Commence simplement, teste différentes méthodes et améliore-toi chaque jour."


<br><br>

<b>📌 Partie 3 - Exemple concret (45-60 secondes)</b>

"Imagine une personne qui commence dans ${theme}.
Au lieu d'abandonner après quelques jours, elle analyse ses erreurs et continue d'apprendre."


<br><br>

<b>🎯 Conclusion (fin)</b>

"Si tu veux progresser dans ${theme}, commence aujourd'hui.
La régularité est plus importante que la perfection.
Abonne-toi pour plus de conseils."


<h3>📱 Plateforme :</h3>

${plateforme}


<h3>🎭 Style :</h3>

${style}


<h3>🎥 Plans à filmer :</h3>

1. Face caméra pour l'introduction

2. Texte animé avec les points importants

3. Images ou vidéos d'exemple

4. Zooms et changements de plans pour garder l'attention


<h3>✂️ Montage conseillé :</h3>

- Ajouter des sous-titres automatiques

- Couper les silences

- Changer de plan toutes les 3 à 5 secondes

- Mettre les mots importants en gros texte

- Ajouter une musique légère en arrière-plan


<h3>📄 Description :</h3>

"Découvre les meilleures méthodes pour progresser dans ${theme}.
Cette vidéo explique les erreurs à éviter et les stratégies importantes."


<h3>#️⃣ Hashtags :</h3>

#${theme} #createur #viral #astuces #motivation


<h3>💡 Idée de miniature :</h3>

Une personne avec une expression forte + un texte court :

"ARRÊTE ÇA !"


`;


document.getElementById("resultat").innerHTML = resultat;


}
