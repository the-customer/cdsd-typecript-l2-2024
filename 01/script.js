const n1 = document.getElementById("n1");
const n2 = document.getElementById("n2");

const btn = document.querySelector("button");

btn.addEventListener("click",function(){
    console.log(+n1.value + n2.value)
});