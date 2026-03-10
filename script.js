const întrebări = [
    { 
        q: "„Ci voi veți primi o putere când se va coborî Duhul Sfânt peste voi.”", 
        options: ["Petru", "Isus Hristos", "Ioan", "Iacov"], 
        correct: 1 
    },
    { 
        q: "„Acest Isus care S-a înălțat la cer din mijlocul vostru va veni în același fel cum L-ați văzut mergând la cer.”", 
        options: ["Îngerii (cei doi bărbați în alb)", "Pavel", "Ștefan", "Luca"], 
        correct: 0 
    },
    { 
        q: "„Sunt plini de must!”", 
        options: ["Pilat", "Marii preoți", "Unii care își băteau joc", "Soldații romani"], 
        correct: 2 
    },
    { 
        q: "„Voi turna Duhul Meu peste orice făptură”", 
        options: ["Petru (citând din Ioel)", "Pavel", "Barnaba", "Filip"], 
        correct: 0 
    },
    { 
        q: "„Pocăiți-vă și fiecare din voi să fie botezat în Numele lui Isus Hristos.”", 
        options: ["Anania", "Matei", "Petru", "Andrei"], 
        correct: 2 
    },
    { 
        q: "„Argint și aur n-am dar ce am îți dau: în Numele lui Isus Hristos din Nazaret scoală-te și umblă.”", 
        options: ["Pavel", "Petru", "Ioan", "Ștefan"], 
        correct: 1 
    },
    { 
        q: "„Cu ce putere sau în numele cui ați făcut voi lucrul acesta?”", 
        options: ["Sinedriul (conducătorii iudei)", "Irod", "Pilat", "Corneliu"], 
        correct: 0 
    },
    { 
        q: "„Dă putere robilor Tăi să vestească Cuvântul Tău cu toată îndrăzneala.”", 
        options: ["Ucenicii (în rugăciune)", "Pavel și Silas", "Ștefan", "Filip"], 
        correct: 0 
    },
    { 
        q: "„Da, cu atâta.”", 
        options: ["Safira", "Lidia", "Tabita", "Priscila"], 
        correct: 0 
    },
    { 
        q: "„Trebuie să ascultăm mai mult de Dumnezeu decât de oameni.”", 
        options: ["Gamaliel", "Apostolii (prin Petru)", "Saul", "Vameșii"], 
        correct: 1 
    },
    { 
        q: "„Să nu vă pomeniți că luptați împotriva lui Dumnezeu.”", 
        options: ["Gamaliel", "Caiafa", "Festus", "Agripa"], 
        correct: 0 
    },
    { 
        q: "„Doamne Isuse, primește duhul meu.”", 
        options: ["Iacov", "Pavel", "Ștefan", "Petru"], 
        correct: 2 
    },
    { 
        q: "„Dați-mi și mie puterea aceasta.”", 
        options: ["Simon Magul", "Elima", "Temnicerul", "Irod"], 
        correct: 0 
    },
    { 
        q: "„Înțelegi tu ce citești?”", 
        options: ["Pavel", "Petru", "Filip", "Ioan"], 
        correct: 2 
    },
    { 
        q: "„Du-te și ajunge carul acesta.”", 
        options: ["Duhul (către Filip)", "Îngerul (către Petru)", "Anania", "Barnaba"], 
        correct: 0 
    },
    { 
        q: "„Cred că Isus Hristos este Fiul lui Dumnezeu.”", 
        options: ["Corneliu", "Famenul etiopian", "Saul", "Lidia"], 
        correct: 1 
    },
    { 
        q: "„Cine ești tu, Doamne?”", 
        options: ["Petru", "Saul (pe drumul Damascului)", "Anania", "Irod"], 
        correct: 1 
    },
    { 
        q: "„Frate Saule, Domnul Isus care ți s-a arătat pe drumul pe care veneai.”", 
        options: ["Petru", "Barnaba", "Anania", "Silas"], 
        correct: 2 
    },
    { 
        q: "„Niciodată n-am mâncat ceva spurcat”", 
        options: ["Pavel", "Petru", "Corneliu", "Iacov"], 
        correct: 1 
    },
    { 
        q: "„Scoală-te și eu sunt om”", 
        options: ["Pavel", "Barnaba", "Petru", "Filip"], 
        correct: 2 
    },
    { 
        q: "„Rugăciunile și milosteniile tale s-au suit înaintea lui Dumnezeu.”", 
        options: ["Îngerul (către Corneliu)", "Petru", "Pavel", "Isus"], 
        correct: 0 
    },
    { 
        q: "„Să ascultăm tot ce ți-a poruncit Domnul să ne spui.”", 
        options: ["Sinedriul", "Corneliu și casa lui", "Atenienii", "Efesenii"], 
        correct: 1 
    },
    { 
        q: "„Noi vom stărui necurmat în rugăciune”", 
        options: ["Cei șapte diaconi", "Femeile creștine", "Cei doisprezece apostoli", "Pavel și Barnaba"], 
        correct: 2 
    },
    { 
        q: "„Atunci oricine va chema Numele Domnului va fi mântuit.”", 
        options: ["Petru (la Rusalii)", "Filip", "Anania", "Ștefan"], 
        correct: 0 
    },
    { 
        q: "„Doamne în vremea aceasta ai de gând să așezi din nou Împărăția lui Israel?”", 
        options: ["Fariseii", "Ucenicii", "Irod", "Zeloții"], 
        correct: 1 
    }
];


let indexCurent = 0;
let scor = 0;
let raspunsuriCorecte = 0;
let secundeTotale = 0;
let intervalTimer;

// Pornim cronometrul imediat ce se încarcă scriptul
function pornesteCronometru() {
    // Curățăm orice interval vechi pentru a evita bug-urile de viteză
    clearInterval(intervalTimer); 
    intervalTimer = setInterval(() => {
        secundeTotale++;
        const timerElement = document.getElementById("total-timer");
        if(timerElement) {
            timerElement.innerText = "Timp: " + formateazaTimpul(secundeTotale);
        }
    }, 1000);
}

function formateazaTimpul(secunde) {
    let min = Math.floor(secunde / 60);
    let sec = secunde % 60;
    return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
}
function afișeazăÎntrebare() {
    // Actualizăm bara de progres
    const progressBar = document.getElementById("progress-bar");
    if(progressBar) {
        const procent = (indexCurent / întrebări.length) * 100;
        progressBar.style.width = procent + "%";
    }

    if (indexCurent >= întrebări.length) {
        sfârșitJoc();
        return;
    }

    const qData = întrebări[indexCurent];
    const questionEl = document.getElementById("question-text");
    const container = document.getElementById("options-container");

    if(questionEl && container) {
        questionEl.innerText = qData.q;
        container.innerHTML = "";

        qData.options.forEach((opt, i) => {
            const btn = document.createElement("button");
            btn.innerText = opt;
            btn.onclick = (e) => verifică(i, e.target);
            container.appendChild(btn);
        });
    }
}

function verifică(ales, butonApasat) {
    const toateButoanele = document.querySelectorAll("#options-container button");
    // Dezactivăm butoanele imediat
    toateButoanele.forEach(btn => btn.style.pointerEvents = "none");

    if (ales === întrebări[indexCurent].correct) {
        scor += 10;
        raspunsuriCorecte++;
        butonApasat.classList.add("btn-correct");
        
        const correctEl = document.getElementById("correct-counter");
        if(correctEl) correctEl.innerText = "Corecte: " + raspunsuriCorecte;
    } else {
        scor -= 5;
        butonApasat.classList.add("btn-wrong");
        // Evidențiem răspunsul corect
        toateButoanele[întrebări[indexCurent].correct].classList.add("btn-correct");
    }

    const scoreEl = document.getElementById("score-display");
    if(scoreEl) scoreEl.innerText = "SCOR: " + scor;

    setTimeout(() => {
        indexCurent++;
        afișeazăÎntrebare();
    }, 1000);
}

function sfârșitJoc() {
    clearInterval(intervalTimer);
    
    const gameZone = document.getElementById("game-zone");
    const resultZone = document.getElementById("result-zone");
    const finalScoreEl = document.getElementById("final-score");

    if(gameZone && resultZone && finalScoreEl) {
        gameZone.classList.add("hidden");
        resultZone.classList.remove("hidden");
        finalScoreEl.innerHTML = `
            Scor final: <strong>${scor}</strong> puncte<br>
            Răspunsuri corecte: <strong>${raspunsuriCorecte}</strong>/${întrebări.length}<br>
            Timp total: <strong>${formateazaTimpul(secundeTotale)}</strong>
        `;
    }
}

// Inițializare joc
window.onload = () => {
    pornesteCronometru();
    întrebări.sort(() => Math.random() - 0.5);
    afișeazăÎntrebare();
};