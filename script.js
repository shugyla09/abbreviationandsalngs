const abbreviations = {
    "btw": "by the way = айтқанда",
    "lol": "laugh out loud = қатты күлді",
    "omg": "oh my god = о, құдайым",
    "brb": "be right back = жақын арада ораламын",
    "idk": "I don't know = білмеймін",
    "ttyl": "talk to you later = кейін сөйлесеміз",
    "fyi": "for your information = сіздің ақпарат үшін",
    "кринж": "cringe (испанский стыд)",
    "изи": "easy",
    "задонатить": "to donate",
    "бф": "best friend",
    "рофл": "Rolling On The Floor Laughing (насмешка)",
    "треш": "trash (про что-то очень плохое)",
    "токсик": "toxic (токсичный человек)",
    "хейтить": "to hate",
    "флексить": "to flex (выпендриваться)",
    "юзать": "to use",
    "чекать": "to check",
    "чилить": "chill (расслабленный отдых)",
    "байтить": "to bite (в точности копировать что-то чужое)",
    "кикнуть": "to kick (исключить откуда-то)",
    "пруф": "proof",
    "имба": "imbalance (выдающийся по характеристикам)",
};

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById("translateBtn");
    button.addEventListener("click", translateText);
});

function translateText() {
    let inputText = document.getElementById("inputText").value;
    let outputText = document.getElementById("outputText");
    
    let words = inputText.split(" ");
    let translatedWords = words.map(word => abbreviations[word.toLowerCase()] || word);
    
    outputText.value = translatedWords.join(" ");
}