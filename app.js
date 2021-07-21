const backColor= document.querySelector("#background-section");
const checky= document.querySelector("#click-me");
const nameChange= document.querySelector("#colorName");
const motivation= document.querySelector("#motiQuote");

let colorTray=["BLUE", "BROWN", "PURPLE", "YELLOW","rgb(95, 166, 224)", "WHEAT", "RED"];
let motiTray=["BEAUTIFUL", "BOLD", "BRIGHT", "THE BEST","SPECIAL", "INTELLIGIENT", "UNIQUE"];
let randomColor= colorTray[Math.floor(Math.random() * colorTray.length)];

backColor.style.backgroundColor=randomColor;
nameChange.textContent=randomColor;
checky.addEventListener("click", colorChange);
function colorChange(){
    let randomQuote= motiTray[Math.floor(Math.random() * motiTray.length)];
    let R= [Math.floor(Math.random() * 255)+1];
    let G= [Math.floor(Math.random() * 255)+1];
    let B= [Math.floor(Math.random() * 255)+1];
    const randomNumb =`rgb(${R}, ${G}, ${B})`;
    backColor.style.backgroundColor= randomNumb;
    console.log(backColor);
    nameChange.textContent=randomNumb;
    console.log(randomNumb)
    motivation.textContent=randomQuote;
    console.log(randomQuote)
}
