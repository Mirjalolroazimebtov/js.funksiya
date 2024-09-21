var ism = prompt("Ismingizni kiriting")
var hyil = +prompt("Hozirgi yilni kiriting")
var year = +prompt("Tug'ilgan yilingiz")

function misol(a,b) {
  return a - b;
}
console.log( `Ismingiz ${ism}: ${misol(hyil,year)} Yoshdasiz `)



let son = +prompt("Misollar sonini kiriting?");

function random() {
    let random = Math.round(Math.random() * 3);  
    let randomSon1 = Math.round(Math.random() * 20); 
    let randomSon2 = Math.round(Math.random() * 20);  
    
    let arr = ["+", "-", "*", "/"];
    let misol = `${randomSon1} ${arr[random]} ${randomSon2}`;
    
    let tjavob;
    if (arr[random] === "+") {
        tjavob = randomSon1 + randomSon2;
    } else if (arr[random] === "-") {
        tjavob = randomSon1 - randomSon2;
    } else if (arr[random] === "*") {
        tjavob = randomSon1 * randomSon2;
    } else if (arr[random] === "/") {
        tjavob = (randomSon2 !== 0) ? (randomSon1 / randomSon2).toFixed(2) : "Bo'lish mumkin emas";
    }
    return { misol, tjavob };
}
for (let i = 0; i < son; i++) {
    let { misol, tjavob } = random()
    if (tjavob === "Bo'lish mumkin emas") {
        console.log(`${misol} = ${tjavob}`)
        continue; 
    }
    let savol = +prompt(`${misol} = ?`)
    if (savol == tjavob) {  
        console.log(`Sizning javob to'g'ri - ${savol}`)
    } else {
        console.log(`Sizning javob noto'g'ri - ${savol}! To'g'ri javob - ${tjavob}!`)
    }
}




    
    
    
    
    
    
    
    
    
    
    













