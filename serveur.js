const express = require("express");
const cors = require("cors");
const OpenAI = require("openai");


const app = express();

app.use(cors());
app.use(express.json());


const client = new OpenAI({

apiKey: "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"

});



app.post("/generer", async (req,res)=>{


const {theme, plateforme, style} = req.body;



try{


const response = await client.chat.completions.create({


model:"gpt-4.1-mini",


messages:[

{
role:"system",
content:
"Tu es un expert en création de vidéos TikTok, YouTube Shorts et Reels. Tu crées des scripts réalistes, variés et adaptés au sujet."
},


{
role:"user",

content:

`
Crée une vidéo complète.

Sujet : ${theme}

Plateforme : ${plateforme}

Style : ${style}


Répond uniquement en JSON avec :

titre
hook
script
plans
montage
description
hashtags
miniature

`
}


]

});



let texte = response.choices[0].message.content;


res.json(JSON.parse(texte));



}

catch(error){


console.log(error);

res.status(500).json({

erreur:"Erreur IA"

});


}



});



app.listen(3000,()=>{

console.log("Serveur IA lancé sur le port 3000");

});
