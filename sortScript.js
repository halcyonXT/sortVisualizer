let mainframeDisplay = document.getElementById("mainframe").innerHTML
let numOfNums = 100;
let arrayOfNums = [];
let userDefR = 0.5;
let userDefG = 1.2;
let userDefB = 1.2;
let height = 0;
let sleepTime = 50;
let breakFlag = false;

const generate = () => {
    breakFlag = true;
    arrayOfNums = [];
    document.getElementById("mainframe").innerHTML = ``;
    height = 580 / numOfNums;
    for (let i=1; i <= numOfNums; i++) {
        arrayOfNums.push(Math.ceil(Math.random() * 100));
    }
    for (let i=0; i <= arrayOfNums.length-1; i++) {
        console.log("entered loop");
        if (i == 0) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
            border-top-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        if (i == arrayOfNums.length-1) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
            border-bottom-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        document.getElementById("mainframe").innerHTML += 
        `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
        background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        "></div>`
    }
    console.log(arrayOfNums)
    breakFlag = false;
}
generate();

const closeDropdown = () => {
    document.getElementById("dd").style.display = "none";
    document.getElementById("notice").style.display = "none";
}

const displayDropdown = () => {
    document.getElementById("dd").style.display = "flex";
}

const updateNums = () => {
    document.getElementById("numItems").innerText = `${document.getElementById("inputNums").value}`
    numOfNums = document.getElementById("inputNums").value;
}

const updateBckg = () => {
    document.getElementById("mainframe").style.background = `rgb(${document.getElementById("R").value}
    ${document.getElementById("G").value}
    ${document.getElementById("B").value})`
}

const updateItemColor = () => {
    document.getElementById("notice").style.display = "block";
    userDefR = (document.getElementById("itemR").value / 100);
    userDefG = (document.getElementById("itemG").value / 100);
    userDefB = (document.getElementById("itemB").value / 100);
    console.log(`${userDefR}, ${userDefG}, ${userDefB}`)
}


const displayModule = (md1, md2, counter) => {
    document.getElementById("mainframe").innerHTML = ``;
    for (let i=0; i <= arrayOfNums.length-1; i++) {
        console.log("entered loop");
        if (i == counter) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:red;
            border-top-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        if (i == md1) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:yellow;
            border-top-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        if (i == md2) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:yellow;
            border-top-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        if (i == 0) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
            border-top-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        if (i == arrayOfNums.length-1) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
            border-bottom-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        document.getElementById("mainframe").innerHTML += 
        `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
        background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        "></div>`
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const executeSort = async () => {
    let finished = false
    let limit = 2;
    console.log(arrayOfNums)
    while (!finished) {
        if (breakFlag == true) {
            break;
        }
        for (let i=0; i <= arrayOfNums.length-limit; i++) {
            if (arrayOfNums[i] > arrayOfNums[i+1]) {
                let temp = arrayOfNums[i+1]
                arrayOfNums[i+1] = arrayOfNums[i]
                arrayOfNums[i] = temp;

                displayModule(i, i+1, null);
                continue;
            }
            await sleep(sleepTime);
            if (arrayOfNums.length > 50) {
                if (i%2==0) {
                    displayModule(null, null, i);
                } else {
                    continue;
                }
            } else {
                displayModule(null, null, i);
            }
        }
        limit++;
        for (let i=0; i<= arrayOfNums.length-1; i++) {
            if (i==arrayOfNums.length-1) {
                finished = true
            }
            if (arrayOfNums[i] > arrayOfNums[i+1]) break
        }
    }
    document.getElementById("mainframe").innerHTML = ``;
    for (let i=0; i <= arrayOfNums.length-1; i++) {
        console.log("entered loop");
        if (i == 0) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
            border-top-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        if (i == arrayOfNums.length-1) {
            document.getElementById("mainframe").innerHTML += 
            `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
            background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
            border-bottom-left-radius: 15px;
            border-top-right-radius:10px;
            border-bottom-right-radius:10px;"></div>`
            continue;
        }
        document.getElementById("mainframe").innerHTML += 
        `<div class="bars" style="width:${arrayOfNums[i]}%;height:${height}px;
        background-color:rgb(${arrayOfNums[i] * userDefR},${arrayOfNums[i] * userDefG},${arrayOfNums[i] * userDefB});
        border-top-right-radius:10px;
        border-bottom-right-radius:10px;
        "></div>`
    }
}

const updateSS = () => {
    sleepTime = 200 - document.getElementById("sortSp").value
}

document.getElementById("menuButton").addEventListener("click", displayDropdown, false);
document.getElementById("inputNums").addEventListener("change", updateNums, false);

//BELOW THREE LINES ARE FOR CUSTOM BCKRGB
document.getElementById("R").addEventListener("input", updateBckg, false);
document.getElementById("G").addEventListener("input", updateBckg, false);
document.getElementById("B").addEventListener("input", updateBckg, false);

//BELOW THREE LINES ARE FOR CUSTOM ITEM COLORS
document.getElementById("itemR").addEventListener("change", updateItemColor, false);
document.getElementById("itemG").addEventListener("change", updateItemColor, false);
document.getElementById("itemB").addEventListener("change", updateItemColor, false);
document.getElementById("sortSp").addEventListener("change", updateSS, false);