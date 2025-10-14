// Convert Gold to Plat --------------------------------------------

function easyNum(num) {
    if (num >= 1e12) return (num / 1e12).toFixed(1).replace(/\.0$/, '') + 'T gold';
    if (num >= 1e9)  return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B gold';
    if (num >= 1e6)  return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M gold';
    if (num >= 1e3)  return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K gold';
    return num.toString();
}

const goldInput = document.querySelector("#goldInput");
const easyGold = document.querySelector("#easyGold");
const platOutput = document.querySelector("#platOutput");
console.log(`[Found] ${goldInput} ${platOutput} ${easyGold}`);

function goldToPlat() {
    console.log("Typing happened");

    const goldValue = Number(goldInput.value);
    console.log(`Const goldValue Number = ${goldValue}`);

    easyGold.textContent = easyNum(goldValue);

    const platValue = goldValue / 10000000;
    console.log(`plat Value is ${platValue}`);

    if (!isNaN(platValue)) {
        platOutput.textContent = platValue.toLocaleString('en-US');
    } else {
        platOutput.textContent = "";
    }

    
}






goldInput.addEventListener("input", goldToPlat);