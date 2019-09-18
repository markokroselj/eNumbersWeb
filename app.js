const output = document.querySelector('.output-label');
const btnRun = document.getElementById('run');
const btnCopy = document.getElementById('copy');
const btnSort = document.getElementById('sort');
const btnPrint = document.getElementById('print');

btnRun.addEventListener('click', ()=>{
    output.value = numbers();
    console.log("jeja");
});
btnCopy.addEventListener('click', ()=>{
    copy();
});
btnSort.addEventListener('click', ()=>{
     output.value = sortNums();
})
btnPrint.addEventListener('click', ()=>{
    printNums();
})
var prviKrogNums = [];
var drugiKrogNums = [];


function numbers(){
    var prviKrog = [];
    var drugiKrog = [];
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }
    //prvi krog
    // save numbers from 1 to 50 in array prviKrogNums
    for (let i = 1; i <= 50; i++) {
        prviKrogNums.push(i);
        
    }
shuffle(prviKrogNums);
//drugi krog
// save numbers from 1 to 10 in array prviKrogNums
for (let i = 1; i <= 10; i++) {
    drugiKrogNums.push(i);
    
}
shuffle(drugiKrogNums);



for(let i = 0; i < 5; i++){
    prviKrog.push(prviKrogNums[i]);
}
for(let i = 0; i < 2; i++){
    drugiKrog.push(drugiKrogNums[i]);
}
var numbersOutput = "";

let fnums = "",snums = "";

for(let i = 0; i < 5; i++){
    fnums = fnums + " "  + prviKrog[i];
}
for(let i = 0; i < 2; i++){
    snums = snums + " " + drugiKrog[i];
}
numbersOutput =  fnums + " " + snums;
return numbersOutput;
}

function copy(){
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied the text: " + output.value);
}
function sortNums(){
  let  outputNums = prviKrog.sort() + " " + drugiKrog.sort();
  return outputNums;

}
function printNums(){
    let x = prompt("Type numbers of combinations");
    var printOutput = document.createElement("div");
    document.body.appendChild(printOutput);
    printOutput.classList.add('printoutput');
    for(let i = 0; i < x; i++){
        printOutput.innerHTML = printOutput.innerHTML + "<br>" + numbers();
    }
    window.print();
}