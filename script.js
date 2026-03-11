const întrebări = [
    { q: "„Ci voi veți primi o putere când se va coborî Duhul Sfânt peste voi.”", options: ["Petru", "Isus Hristos", "Ioan", "Iacov"], correct: 1 },
    { q: "„Acest Isus care S-a înălțat la cer din mijlocul vostru va veni în același fel...”", options: ["Îngerii", "Pavel", "Ștefan", "Luca"], correct: 0 },
    { q: "„Sunt plini de must!”", options: ["Pilat", "Marii preoți", "Unii care își băteau joc", "Soldații"], correct: 2 },
    { q: "„Voi turna Duhul Meu peste orice făptură”", options: ["Petru", "Pavel", "Barnaba", "Filip"], correct: 0 },
    { q: "„Pocăiți-vă și fiecare din voi să fie botezat în Numele lui Isus Hristos.”", options: ["Anania", "Matei", "Petru", "Andrei"], correct: 2 },
    { q: "„Argint și aur n-am dar ce am îți dau: în Numele lui Isus Hristos...”", options: ["Pavel", "Petru", "Ioan", "Ștefan"], correct: 1 },
    { q: "„Cu ce putere sau în numele cui ați făcut voi lucrul acesta?”", options: ["Sinedriul", "Irod", "Pilat", "Corneliu"], correct: 0 },
    { q: "„Dă putere robilor Tăi să vestească Cuvântul Tău cu toată îndrăzneala.”", options: ["Ucenicii", "Pavel și Sila", "Ștefan", "Filip"], correct: 0 },
    { q: "„Da, cu atâta.”", options: ["Safira", "Lidia", "Tabita", "Priscila"], correct: 0 },
    { q: "„Trebuie să ascultăm mai mult de Dumnezeu decât de oameni.”", options: ["Gamaliel", "Petru și apostolii", "Saul", "Vameșii"], correct: 1 },
    { q: "„Să nu vă pomeniți că luptați împotriva lui Dumnezeu.”", options: ["Gamaliel", "Caiafa", "Festus", "Agripa"], correct: 0 },
    { q: "„Doamne Isuse, primește duhul meu.”", options: ["Iacov", "Pavel", "Ștefan", "Petru"], correct: 2 },
    { q: "„Dați-mi și mie puterea aceasta.”", options: ["Simon Magul", "Elima", "Temnicerul", "Irod"], correct: 0 },
    { q: "„Înțelegi tu ce citești?”", options: ["Pavel", "Petru", "Filip", "Ioan"], correct: 2 },
    { q: "„Du-te și ajunge carul acesta.”", options: ["Duhul Sfânt", "Îngerul", "Anania", "Barnaba"], correct: 0 },
    { q: "„Cred că Isus Hristos este Fiul lui Dumnezeu.”", options: ["Corneliu", "Famenul etiopian", "Saul", "Lidia"], correct: 1 },
    { q: "„Cine ești tu, Doamne?”", options: ["Petru", "Saul", "Anania", "Irod"], correct: 1 },
    { q: "„Frate Saule, Domnul Isus care ți s-a arătat pe drum...”", options: ["Petru", "Barnaba", "Anania", "Sila"], correct: 2 },
    { q: "„Niciodată n-am mâncat ceva spurcat”", options: ["Pavel", "Petru", "Corneliu", "Iacov"], correct: 1 },
    { q: "„Scoală-te și eu sunt om”", options: ["Pavel", "Barnaba", "Petru", "Filip"], correct: 2 },
    { q: "„Rugăciunile și milosteniile tale s-au suit înaintea lui Dumnezeu.”", options: ["Îngerul", "Petru", "Pavel", "Isus"], correct: 0 },
    { q: "„Să ascultăm tot ce ți-a poruncit Domnul să ne spui.”", options: ["Sinedriul", "Corneliu", "Atenienii", "Efesenii"], correct: 1 },
    { q: "„Noi vom stărui necurmat în rugăciune”", options: ["Diaconii", "Femeile", "Apostolii", "Pavel"], correct: 2 },
    { q: "„Atunci oricine va chema Numele Domnului va fi mântuit.”", options: ["Petru", "Filip", "Anania", "Ștefan"], correct: 0 },
    { q: "„Doamne în vremea aceasta ai de gând să așezi din nou Împărăția lui Israel?”", options: ["Fariseii", "Ucenicii", "Irod", "Zeloții"], correct: 1 }
];

let indexCurent = 0;
let scorA = 0;
let scorB = 0;
let raspunsA = null;
let raspunsB = null;

function afișeazăÎntrebare() {
    if (indexCurent >= întrebări.length) {
        sfârșitJoc();
        return;
    }

    document.getElementById("current-q-num").innerText = indexCurent + 1;

    raspunsA = null;
    raspunsB = null;

    document.getElementById("box-a").classList.remove("voted-hidden");
    document.getElementById("box-b").classList.remove("voted-hidden");

    document.getElementById("question-text").innerText = întrebări[indexCurent].q;
    const container = document.getElementById("options-container");
    container.innerHTML = "";

    întrebări[indexCurent].options.forEach((opt, i) => {
        const div = document.createElement("div");
        div.className = "option-bar";
        div.id = "opt-" + i;
        div.innerHTML = `<strong>${i + 1}.</strong> ${opt}`;
        container.appendChild(div);
    });
}

window.addEventListener("keydown", (e) => {
    if (indexCurent >= întrebări.length || (raspunsA !== null && raspunsB !== null)) return;

    // Echipa A: 1, 2, 3, 4
    const tasteA = { "1": 0, "2": 1, "3": 2, "4": 3 };
    if (raspunsA === null && tasteA.hasOwnProperty(e.key)) {
        raspunsA = tasteA[e.key];
        document.getElementById("box-a").classList.add("voted-hidden");
    }

    // Echipa B: 7, 8, 9, 0
    const tasteB = { "7": 0, "8": 1, "9": 2, "0": 3 };
    if (raspunsB === null && tasteB.hasOwnProperty(e.key)) {
        raspunsB = tasteB[e.key];
        document.getElementById("box-b").classList.add("voted-hidden");
    }

    if (raspunsA !== null && raspunsB !== null) {
        valideazăRunda();
    }
});

function valideazăRunda() {
    const corect = întrebări[indexCurent].correct;
    
    if (raspunsA === corect) scorA += 10; else scorA -= 5;
    if (raspunsB === corect) scorB += 10; else scorB -= 5;

    // 1. Colorăm răspunsul corect cu Verde (fundalul se face verde)
    document.getElementById("opt-" + corect).classList.add("btn-correct");

    // 2. Punem bordurile de jucător folosind box-shadow (ca să nu dispară sub verde)
    let elA = document.getElementById("opt-" + raspunsA);
    let elB = document.getElementById("opt-" + raspunsB);

    if (raspunsA !== corect) elA.classList.add("btn-wrong");
    if (raspunsB !== corect) elB.classList.add("btn-wrong");

    // Aplicăm "bordura" groasă de 8px folosind box-shadow interior și exterior
    // Albastru pentru Echipa A, Roșu pentru Echipa B
    if (raspunsA === raspunsB) {
        // Dacă ambii au ales la fel, facem o bordură mixtă (negru/gri) foarte groasă
        elA.style.boxShadow = "0 0 0 8px #2d3436 inset, 0 0 0 8px #2d3436";
    } else {
        elA.style.boxShadow = "0 0 0 8px #0984e3 inset, 0 0 0 8px #0984e3";
        elB.style.boxShadow = "0 0 0 8px #d63031 inset, 0 0 0 8px #d63031";
    }

    document.getElementById("score-a").innerText = scorA;
    document.getElementById("score-b").innerText = scorB;

    setTimeout(() => {
        // Resetăm umbrele de bordură
        const bare = document.querySelectorAll(".option-bar");
        bare.forEach(b => b.style.boxShadow = "none");
        
        indexCurent++;
        
        // Dacă mai sunt întrebări, resetăm gri-ul, dacă nu, mergem la final
        if (indexCurent < întrebări.length) {
            document.getElementById("box-a").classList.remove("voted-hidden");
            document.getElementById("box-b").classList.remove("voted-hidden");
        }
        
        afișeazăÎntrebare();
    }, 3000);
}

function sfârșitJoc() {
    document.getElementById("game-zone").classList.add("hidden");
    document.getElementById("result-zone").classList.remove("hidden");
    
    // Eliminăm starea de gri pentru a vedea culorile echipelor la final
    const boxA = document.getElementById("box-a");
    const boxB = document.getElementById("box-b");
    
    boxA.classList.remove("voted-hidden");
    boxB.classList.remove("voted-hidden");

    let textFinal = "";

    if (scorA > scorB) {
        textFinal = "ECHIPA A A CÂȘTIGAT! 🏆";
        // Scoatem în evidență doar câștigătorul, cealaltă rămâne puțin mai ștearsă
        boxB.style.opacity = "0.3"; 
        boxA.style.transform = "scale(1.2)";
    } 
    else if (scorB > scorA) {
        textFinal = "ECHIPA B A CÂȘTIGAT! 🏆";
        boxA.style.opacity = "0.3";
        boxB.style.transform = "scale(1.2)";
    } 
    else {
        textFinal = "EGALITATE PERFECTĂ! 🤝";
        // Ambele rămân colorate și mari
        boxA.style.transform = "scale(1.1)";
        boxB.style.transform = "scale(1.1)";
    }
    
    document.getElementById("winner-text").innerText = textFinal;
}

afișeazăÎntrebare();