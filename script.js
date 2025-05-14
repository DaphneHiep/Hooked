let Visteller = 0; 
let fishing = false;
let Visperklik = 1; 
let upgraded = false; 
let Beroep = "Visser"




const fishingImg = document.getElementById("fishing-img");
const waterimg = document.getElementById("waterimg")
const VistellerDisplay = document.getElementById("Visteller");

function begroeting(naam) {  
    console.log("Hallo " + naam + ". succes als " + Beroep + "!") 
}

begroeting("Berry")  
 

document.getElementById("Visknop").addEventListener("click", function () {
    Visteller += Visperklik;

    if (fishing) {
        fishingImg.src = upgraded ? "Media/Upgradednotfishing.png" : "Media/notfishing.png";
    } else {
        fishingImg.src = upgraded ? "Media/Upgradedfishing.png" : "Media/fish.png";
    }

    VistellerDisplay.innerHTML = `<img src="Media/Vis.png" alt="Vis">: ${Visteller}`;

    if (Visteller >= 50) {
        waterimg.src = "Media/Water1.png";
    } else {
        waterimg.src = "Media/water.png";
    }

    fishing = !fishing;
});


document.getElementById("upgrade-knop").addEventListener("click", function () {
    if (Visteller >= 50) {
        Visteller -= 50;
        Visperklik = 2;
        upgraded = true; 

        VistellerDisplay.textContent = `vissen: ${Visteller}`;
        this.disabled = true;
        this.textContent = "Gekocht";
    }



});
