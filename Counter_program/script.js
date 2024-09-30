let count = 0;
function increase(){
    count++;
    document.getElementById("myH1").textContent = count;
}
function reset(){
    count = 0;
    document.getElementById("myH1").textContent = count;
}
function decrease(){
    count--;
    document.getElementById("myH1").textContent = count;
}