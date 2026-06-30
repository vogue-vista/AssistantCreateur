function creerVideo(){

let theme = document.getElementById("theme").value;
let plateforme = document.getElementById("plateforme").value;
let style = document.getElementById("style").value;


if(theme == ""){
alert("Écris un sujet !");
return;
}


let resultat = `

<h2>🎬 Ta vidéo</h2>


<h3>🔥 Titre :</h3>
Le secret de ${theme} que personne ne te montre


<h3>⚡ Hook :</h3>
"Arrête de faire ça si tu veux réussir dans ${theme}"


<h3>📝 Script :</h3>

Introduction :
Aujourd'hui je vais te montrer une chose importante sur ${theme}.

Partie 1 :
Explique le problème principal.

Partie 2 :
Donne une solution simple et utile.

Fin :
Abonne-toi pour plus de contenu.


<h3>📱 Plateforme :</h3>
${plateforme}


<h3>🎭 Style :</h3>
${style}


<h3>📄 Description :</h3>
Voici une vidéo sur ${theme}. Découvre les meilleures astuces.


<h3>#️⃣ Hashtags :</h3>
#${theme} #creation #viral


<h3>🎥 Plans :</h3>
- Face caméra
- Texte à l'écran
- Images de démonstration


`;


document.getElementById("resultat").innerHTML=resultat;


}
