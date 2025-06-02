let Visteller = 0;
let fishing = false;
let Visperklik = 1;
let upgraded = false;
let Mapupgrader = false;

const fishingImg = document.getElementById("fishing-img");
const waterimg = document.getElementById("waterimg");
const VistellerDisplay = document.getElementById("Visteller");


// De afbeelding van de vishengel veranderd bij elke klik. van niet vissen naar wel vissen.
// De audio is mijn eigen onderzoek, de bron hiervan: https://noaheakin.medium.com/adding-sound-to-your-js-web-app-f6a0ca728984

document.getElementById("Visknop").addEventListener("click", function () {
    let visgeluid = new Audio("Media/Visgeluid.mp3");
    visgeluid.volume = 0.5;
    visgeluid.play();

    // Math.random is om de kans te verkleinen om een vis te vangen en ik doe hem .5 want dan is er 50% kans op het vangen van een vis.
    if (Math.random() < 0.5) {
        Visteller += Visperklik;
        VistellerDisplay.innerHTML = "<img src='Media/Vis.png' alt='Vis'>: " + Visteller;
    }

    if (fishing) {
        if (upgraded === true) {
            fishingImg.src = "Media/Upgradednotfishing.png";
        } else {
            fishingImg.src = "Media/notfishing.png";
        }
    } else {
        if (upgraded === true) {
            fishingImg.src = "Media/Upgradedfishing.png";
        } else {
            fishingImg.src = "Media/fish.png";
        }
    }


    if (Mapupgrader === false) {
        if (Visteller >= 30) {
            waterimg.src = "Media/Water1.png";
        } else {
            waterimg.src = "Media/water.png";
        }
    }


    if (fishing == true) {
        fishing = false;
    } else {
        fishing = true;
    }
});


// Autofarm die er al is van 1 vis per 10 seconden. Deze word dan hoger als je de upgrade koopt.
function AutoVis() {
    Visteller = Visteller + 1;

    VistellerDisplay.innerHTML = "<img src='Media/Vis.png'>: " + Visteller;

    let bubbelsGeluid = new Audio("Media/Bubbles.mp3");
    bubbelsGeluid.volume = 0.5;
    bubbelsGeluid.play();
}

setInterval(AutoVis, 10000);



// Eerste upgrade: 2 vissen per klik, kost 30
document.getElementById("upgrade-knop").addEventListener("click", function () {
    const knop = document.getElementById("upgrade-knop");

    const upgradegeluid = new Audio("Media/Upgradesound.mp3");
    upgradegeluid.volume = 0.5;
    upgradegeluid.play();

    if (Visteller >= 30) {
        Visteller -= 30;
        Visperklik = 2;
        upgraded = true;

        VistellerDisplay.innerHTML = "<img src='Media/Vis.png' alt='Vis'>: " + Visteller;
        knop.textContent = "Gekocht";
    }
});

// Tweede upgrade: 5 vissen per klik, kost 50
document.getElementById("upgrade-knop-2").addEventListener("click", function () {
    const knop2 = document.getElementById("upgrade-knop-2");

    const upgradegeluid = new Audio("Media/Upgradesound.mp3");
    upgradegeluid.volume = 0.5;
    upgradegeluid.play();

    if (Visteller >= 50) {
        Visteller -= 50;
        Visperklik = 5;
        upgraded = true;

        VistellerDisplay.innerHTML = "<img src='Media/Vis.png' alt='Vis'>: " + Visteller;
        knop2.textContent = "Gekocht";
    }
});

// Autofarming upgrade: kost 10
document.getElementById("Autofarming").addEventListener("click", function () {
    const autofarmKnop = document.getElementById("Autofarming");

    if (Visteller >= 100) {
        Visteller -= 100;
        upgraded = true;

        VistellerDisplay.innerHTML = "<img src='Media/Vis.png' alt='Vis'>: " + Visteller;
        autofarmKnop.textContent = "Gekocht";

        // Start vis automatisch toevoegen elke 0.5 seconde
        setInterval(() => {
            Visteller += 1;
            VistellerDisplay.innerHTML = "<img src='Media/Vis.png'>: " + Visteller;
        }, 500);
    }
});

//Nieuwe map hieronder:
document.getElementById("map").addEventListener("click", function () {
    const mapKnop = document.getElementById("map");

    if (Mapupgrader == false) {
        if (Visteller >= 200) {
            const upgradegeluid = new Audio("Media/Upgradesound.mp3");
            upgradegeluid.volume = 0.5;
            upgradegeluid.play();

            Visteller -= 200;
            VistellerDisplay.innerHTML = "<img src='Media/Vis.png' alt='Vis'>: " + Visteller;

            waterimg.src = "Media/Zeewaters.png";
            document.body.style.backgroundColor = "#FFD579";
            Mapupgrader = true;

            mapKnop.textContent = "Gekocht";
            mapKnop.disabled = true;

            Visperklik = 100
        }
    }
});