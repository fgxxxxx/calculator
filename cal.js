function $(id){return document.getElementById(id);}
var str;
var result;
function display(str0)	//display to text
{
    str = document.getElementById("text");
    str.value = str.value + str0;
}
function equals()	//equal to
{
    str = document.getElementById("text");
    result = eval(str.value);
    str.value = result;
}
function back()		//back
{
    str = document.getElementById("text");
    str.value = str.value.substring(0,str.value.length-1);
}
function reset()	//clear
{
    str = document.getElementById("text");
    str.value = "";
}

function sqrt() {
    str = document.getElementById("text");
    if (str.value >= 0) {
        str.value = Math.sqrt(str.value);
    } else {
        str.value = "Erro";
    }
}
function square() {
    str = document.getElementById("text");
    str.value = Math.pow(str.value,2);
}
function sin() {
    str = document.getElementById("text");
    str.value = Math.sin(str.value*(Math.PI / 180));
}
function asin() {
    str = document.getElementById("text");
    str.value = Math.asin(str.value )/(Math.PI / 180);
}
function cos() {
    str = document.getElementById("text");
    str.value = Math.cos(str.value*(Math.PI / 180));
}
function acos() {
    str = document.getElementById("text");
    str.value = Math.acos(str.value )/(Math.PI / 180);
}
function tan() {
    str = document.getElementById("text");
    str.value = Math.tan(str.value*(Math.PI / 180));
}
function atan() {
    str = document.getElementById("text");
    str.value = Math.atan(str.value )/(Math.PI / 180);
}
