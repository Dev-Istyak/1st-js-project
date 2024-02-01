const increasebtn =document.getElementById("increasebtn")
const resetbtn=document.getElementById("resetbtn");
const decreasebtn=document.getElementById("decreasebtn");
const numberlabel=document.getElementById("numberlabel");
let count=0;
increasebtn.onclick=function(){
    count++;
    numberlabel.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    numberlabel.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    numberlabel.textContent=count;
}

let x;
x=2;
console.log(x);