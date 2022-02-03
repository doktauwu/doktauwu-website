import localizationFile from "./localization.json" assert{type: "json"};

let language;

if (navigator.language === "ko") {
    language = "ko"
}
else {
    language = "en"
}

// Replace Language

const replaceLanguage = () => {
    if (language === "ko") {
        language = "en"
    }
    else {
        language = "ko"
    }

    const targetTexts = document.querySelectorAll(".lang-text");

    targetTexts.forEach((element) => {
        try {
            const textcode = element.getAttribute("textcode");
            element.innerHTML = localizationFile.textDictionary[localizationFile.shortcut[textcode]][language]
        }
        catch { console.error("Failed to read localizing content") }
    })

}



// Language Button Event Listner

document.querySelector(".gn-lang-btn").addEventListener("click", replaceLanguage)