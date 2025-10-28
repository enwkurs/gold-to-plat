// Convert Gold to Plat --------------------------------------------


// num = placeholder for whatever number value will be received by the script
// parseFloat() turns number-like text into a real number you can use in calculations.
// function easyNum(num) {
//     num = parseFloat(num.toString().replace(/,/g, ""));
//     if (num >= 1e12) return (num / 1e12).toFixed(1).replace(/\.0$/, '') + 'T gold';
//     if (num >= 1e9)  return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B gold';
//     if (num >= 1e6)  return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M gold';
//     if (num >= (1e3))  return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K gold';
//     return num.toString();
// }
// To fix this I think I need to maybe tell the num >= part of it to look for groups of \d{3} instead of a number value
// BUT HOW?
// I LIED - 

/*
REMEMBER:
/ ... / = Regular Expression or regex
*/

// Get HTML elements
const goldInput = document.querySelector("#goldInput");
const easyGold = document.querySelector("#easyGold");
const platOutput = document.querySelector("#platOutput");
console.log(`[Found] ${goldInput} ${platOutput} ${easyGold}`);

// Tell elements how to function
function goldToPlat() {
    console.log("Typing happened");

    // Format number in the input box to be more readable
    goldInput.oninput = function() {
        let goldCommas = goldInput.value.replace(/\D/g, ''); // Search the input value for \D ( non digits ) in the whole thing ( g ) and replace them with ( '' ) aka delete
        if (goldCommas.length > 3) {
            goldCommas = goldCommas.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
        goldInput.value = goldCommas;
    };

    // num = placeholder for whatever number value will be received by the script
    // parseFloat() turns number-like text into a real number you can use in calculations.
    let easyNum = function(num) {
        num = parseFloat(num.toString().replace(/,/g, ""));
        if (isNaN(num)) return "";
        if (num >= 1e12) return (num / 1e12).toFixed(1).replace(/\.0$/, '') + 'T gold';
        if (num >= 1e9)  return (num / 1e9).toFixed(1).replace(/\.0$/, '') + 'B gold';
        if (num >= 1e6)  return (num / 1e6).toFixed(1).replace(/\.0$/, '') + 'M gold';
        if (num >= 1e3)  return (num / 1e3).toFixed(1).replace(/\.0$/, '') + 'K gold';
        return num.toString();
    }

    easyGold.textContent = easyNum(goldInput.value); // GIANT BRAIN FIGURED OUT THE RIGHT VALUE TO POINT TO.
    // Point to goldValue.input to have it function with the raw input number before formatting happens with commas

    const goldValue = Number(goldInput.value.replace(/,/g, "")); // Have to remove commas here
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