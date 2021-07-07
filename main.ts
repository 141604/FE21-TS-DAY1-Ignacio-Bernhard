
let text: string = "";

for(let i = 1; i<11; i++){
    for(let j = 1; j<11; j++){
        //<br/> to seperate content
        text= text + j + "X" + i + "=" +(i*j)+"<br/>";
    }
}
// Syntax for variables
// let + variableName + : + type + = 

// document.getElementById retourniert immer ein HTMLElement objekt und wird jetzt als HTMLParagraphElement interpretiert.
let paragraph : HTMLParagraphElement= document.getElementById("exec1") as HTMLParagraphElement;
paragraph.innerHTML = text;

// obj ist ein assoziates Array mit fName und lName und beinhaltet nur ein Element. 
let obj : Array <{
    fName : string,
    lName : string
}> = [{
    fName: "Frosch",
    lName: "Lurch"

}]

// onload wird gefeuert, wenn die Seite geladen ist. Danach wird eine anonyme Funktion gerufen, die einen Tiemout auf eine andere Funktion setzt.
// Danach wird 10 Mal iteriert und das einzige Element ausgegeben.
window.onload = function(){
        setTimeout(function(){
            for(let i = 0; i<10; i++){
                obj.forEach(element =>{
                    console.log(element.fName+" "+element.lName);
                });
            }
        }, 5000);
}
