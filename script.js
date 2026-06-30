async function creerVideo(){

let theme = document.getElementById("theme").value;
let plateforme = document.getElementById("plateforme").value;
let style = document.getElementById("style").value;


if(theme == ""){
    alert("Écris un sujet !");
    return;
}


let resultat = document.getElementById("resultat");

resultat.innerHTML = `
<h2>⏳ Création de ta vidéo...</h2>
<p>L'IA prépare ton script, tes idées et ton plan de contenu.</p>
`;


try {


let reponse = await fetch("http://localhost:3000/generer", {

method:"POST",

headers:{
"Content-Type":"application/json"
},


body: JSON.stringify({

theme: theme,
plateforme: plateforme,
style: style

})


});


let data = await reponse.json();



resultat.innerHTML = `

<h2>🎬 Ta vidéo complète</h2>


<h3>🔥 Titre :</h3>

${data.titre}


<h3>⚡ Hook :</h3>

${data.hook}


<h3>📝 Script :</h3>

${data.script}


<h3>🎥 Plans à filmer :</h3>

${data.plans}


<h3>✂️ Montage :</h3>

${data.montage}


<h3>📄 Description :</h3>

${data.description}


<h3>#️⃣ Hashtags :</h3>

${data.hashtags}


<h3>💡 Miniature :</h3>

${data.miniature}


<h3>📱 Plateforme :</h3>

${plateforme}


<h3>🎭 Style :</h3>

${style}


`;


}

catch(error){


resultat.innerHTML = `

<h2>❌ Erreur</h2>

<p>Impossible de contacter l'IA pour le moment.</p>

`;

console.log(error);


}


}
