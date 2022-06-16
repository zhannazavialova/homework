
knopka = document.querySelector("button");
kvadrat = document.getElementById("kvadrat");
knopkaSize = document.getElementById("knopkaSize");
color = document.getElementById("color");
knopkaFigure = document.getElementById("knopkaFigure");



knopka.onclick = function() {
if (kvadrat.style.background == "" || kvadrat.style.background == "red"){ 
    kvadrat.style.background = "green";
} else { kvadrat.style.background = "red"; }

}
knopkaSize.onclick = function() {
    kvadrat.style.margin = "0 0 0 100px";
    kvadrat.style.height = "100px";
    kvadrat.style.width = "100px";
}
color.onclick = function() {
    kvadrat.style.margin = "100px 0 0 0";
    if (kvadrat.style.background == "" || kvadrat.style.background == "red" || kvadrat.style.background == "green" || kvadrat.style.background == "yellow") {
        kvadrat.style.background = "blue";
    }
    else { kvadrat.style.background = "yellow"; }
}

knopkaFigure.onclick = function () {
    if (kvadrat.style.background == "yellow") {
        kvadrat.style.borderRadius = "50%";
    }
    else {
        kvadrat.style.background == "blue";
        kvadrat.style.borderRadius = "0";
    }
}
