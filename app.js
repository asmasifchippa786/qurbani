// Day 1 of Quurfani 

var Day1 = new Date ("june 28, 2023 00:0:0").getTime();
var Z = setInterval(function() {
var today = new Date().getTime();
var distance = Day1-today;
var days = Math.floor(distance / (1000*60*60*24));
var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
var seconds = Math.floor((distance % (1000*60)) / 1000);

document.getElementById("demo").innerHTML = "  Remaining Time For The First Day Of Eid  " + days + "  Days  " + hours + "  Hours  " + minutes + "  Minutes  " + seconds + "  Seconds  ";

if (distance < 0 ){
    clearInterval (Z);
    document.getElementById("demo").innerHTML = "  EID-UL-AZHA-MUBARAK  "    
}



},1000);


var Day2 = new Date ("june 29, 2023 00:0:0").getTime();
var Y = setInterval(function() {
var today2 = new Date().getTime();
var distance2 = Day2-today2;
var days2 = Math.floor(distance2 / (1000*60*60*24));
var hours2 = Math.floor((distance2 % (1000*60*60*24)) / (1000*60*60));
var minutes2 = Math.floor((distance2 % (1000*60*60)) / (1000*60));
var seconds2 = Math.floor((distance2 % (1000*60)) / 1000);

document.getElementById("demo2").innerHTML = "  Remaining Time For The First Day Of Eid  " + days2 + "  Days  " + hours2 + "  Hours  " + minutes2 + "  Minutes  " + seconds2 + "  Seconds  ";

if (distance2 < 0 ){
    clearInterval (Y)
    document.getElementById("demo2").innerHTML = "  EID-UL-AZHA-MUBARAK  "    
}



},1000);


var Day3 = new Date ("june 30, 2023 00:0:0").getTime();
var X = setInterval(function() {
var today3 = new Date().getTime();
var distance3 = Day3-today3;
var days3 = Math.floor(distance3 / (1000*60*60*24));
var hours3 = Math.floor((distance3 % (1000*60*60*24)) / (1000*60*60));
var minutes3 = Math.floor((distance3 % (1000*60*60)) / (1000*60));
var seconds3 = Math.floor((distance3 % (1000*60)) / 1000);

document.getElementById("demo3").innerHTML = "  Remaining Time For The First Day Of Eid  " + days3 + "  Days  " + hours3 + "  Hours  " + minutes3 + "  Minutes  " + seconds3 + "  Seconds  ";

if (distance3 < 0 ){
    clearInterval (X)
    document.getElementById("demo3").innerHTML = "  EID-UL-AZHA-MUBARAK  "    
}



},1000);