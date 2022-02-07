window.onload = () => {
    document.querySelector(".transition").classList.add("transition--loaded")
}

// import localizationFile from "./localization.json" assert{type: "json"};

const localizationFile = {
    "supportLanguages": ["ko", "en"],
    "shortcut": {
        "0x0": "home_sect-intro_title",
        "0x1": "home_sect-intro_description",
        "0x2": "home_sect-recent-pj_title",
        "0x3": "home_sect-recent-pj_project-1_title",
        "0x4": "home_sect-recent-pj_project-1_description",
        "0x5": "home_sect-recent-pj_project-2_title",
        "0x6": "home_sect-recent-pj_project-2_description",
        "0x7": "home_sect-recent-pj_project-3_title",
        "0x8": "home_sect-recent-pj_project-3_description",
        "0x9": "home_sect-recent-pj_project-4_title",
        "0xa": "home_sect-recent-pj_project-4_description",
        "0xb": "home_sect-recent-pj_go-to-site",
        "0xc": "global_lang-btn"
    },
    "textDictionary": {
        "home_sect-intro_title": {
            "ko": "반갑습니다!",
            "en": "Hello!"
        },
        "home_sect-intro_description": {
            "ko": " 웹 개발, 게임 개발, 딥러닝 등<br> 다양한 분야를 취미 삼아 공부하고 있는 <br>DoktaUwU (독타 UwU)입니다.<br />현재 아래와 같은 사이트에서 활동하고 있습니다 :)",
            "en": "I'm DoktaUwU learning Web development, Game development, Deep learning, etc. as hobby.<br>I'm active on these sites at the bottom. :)"
        },
        "home_sect-recent-pj_title": {
            "ko": "최근 프로젝트",
            "en": "Recent projects"
        },
        "home_sect-recent-pj_project-1_title": {
            "ko": "준비 중",
            "en": "Preparing"
        },
        "home_sect-recent-pj_project-1_description": {
            "ko": "아직 프로젝트가 없습니다.",
            "en": "There's no project yet."
        },
        "home_sect-recent-pj_project-2_title": {
            "ko": "준비 중",
            "en": "Preparing"
        },
        "home_sect-recent-pj_project-2_description": {
            "ko": "아직 프로젝트가 없습니다.",
            "en": "There's no project yet."
        },
        "home_sect-recent-pj_project-3_title": {
            "ko": "준비 중",
            "en": "Preparing"
        },
        "home_sect-recent-pj_project-3_description": {
            "ko": "아직 프로젝트가 없습니다.",
            "en": "There's no project yet."
        },
        "home_sect-recent-pj_project-4_title": {
            "ko": "깃허브",
            "en": "Github"
        },
        "home_sect-recent-pj_project-4_description": {
            "ko": "깃허브에서 프로젝트 더 보기",
            "en": "Find more projects on github."
        },
        "home_sect-recent-pj_go-to-site": {
            "ko": "이동하기",
            "en": "Go to site"
        },
        "global_lang-btn": {
            "ko": "ENG",
            "en": "KR"
        }
    }
}


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