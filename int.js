let n1=document.getElementById("num1");
let n2=document.getElementById("num2");
let answer=document.getElementById("answ");

function add(){
    let vn1=parseFloat(n1.value);
    let vn2=parseFloat(n2.value);
    answer.textContent = vn1+vn2;
}

function subtract(){
    let vn1=parseFloat(n1.value);
    let vn2=parseFloat(n2.value);
        answer.textContent = vn1-vn2;
}

function multiply(){
    let vn1=parseFloat(n1.value);
    let vn2=parseFloat(n2.value);
    answer.textContent = vn1*vn2;
}

function divide(){
    let vn1=parseFloat(n1.value);
    let vn2=parseFloat(n2.value);
    if (vn2 == 0){
        answer.textContent = "cannot divide by zero";}
    else{
     answer.textContent = vn1/vn2;}
}
