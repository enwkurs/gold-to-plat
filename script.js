// Convert Gold to Plat --------------------------------------------

const goldInput = document.querySelector("#goldInput");
const platOutput = document.querySelector("#platOutput");
console.log(`[Found] ${goldInput} ${platOutput}`);

function goldToPlat() {
    console.log("Typing happened");

    const goldValue = Number(goldInput.value);
    console.log(`Const goldValue Number = ${goldValue}`);

    const platValue = goldValue / 10000000;
    console.log(`plat Value is ${platValue}`);

    if (!isNaN(platValue)) {
        platOutput.textContent = platValue.toLocaleString('en-US');
    } else {
        platOutput.textContent = "";
    }
}






goldInput.addEventListener("input", goldToPlat);