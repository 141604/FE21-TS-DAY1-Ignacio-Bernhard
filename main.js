var text = "";
for (var i = 1; i < 11; i++) {
    for (var j = 1; j < 11; j++) {
        //<br/> to seperate content
        text = text + j + "X" + i + "=" + (i * j) + "<br/>";
    }
}
// Syntax for variables
// let + variableName + : + type + = 
// document.getElementById retourniert immer ein HTMLElement objekt und wird jetzt als HTMLParagraphElement interpretiert.
var paragraph = document.getElementById("exec1");
paragraph.innerHTML = text;
var obj = [{
        fName: "Frosch",
        lName: "Lurch"
    }];
window.onload = function () {
    setTimeout(function () {
        for (var i = 0; i < 10; i++) {
            obj.forEach(function (element) {
                console.log(element.fName + " " + element.lName);
            });
        }
    }, 5000);
};
