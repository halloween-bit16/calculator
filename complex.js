let n1a=document.getElementById("num1a");
let n1b=document.getElementById("num1b");
let n2a=document.getElementById("num2a");
let n2b=document.getElementById("num2b");
let answer=document.getElementById("answ");

function add(){
    let vn1a=parseFloat(n1a.value);
    let vn1b=parseFloat(n1b.value);
    let vn2a=parseFloat(n2a.value);
    let vn2b=parseFloat(n2b.value);
    answer.textContent = (vn1a+vn2a)+" + "+(vn1b+vn2b)+"i";
}

function subtract(){
    let vn1a=parseFloat(n1a.value);
    let vn1b=parseFloat(n1b.value);
    let vn2a=parseFloat(n2a.value);
    let vn2b=parseFloat(n2b.value);
     if (vn1b > vn2b)
        answer.textContent = (vn1a-vn2a)+" + "+(vn1b-vn2b)+"i";
    else
        answer.textContent = (vn1a-vn2a)+" - "+(vn2b-vn1b)+"i";
}

function multiply(){
    let vn1a=parseFloat(n1a.value);
    let vn1b=parseFloat(n1b.value);
    let vn2a=parseFloat(n2a.value);
    let vn2b=parseFloat(n2b.value);
    answer.textContent = (vn1a*vn2a - vn1b*vn2b)+" + "+(vn1a*vn2b+vn1b*vn2a)+"i";
}

function divide(){
    let vn1a=parseFloat(n1a.value);
    let vn1b=parseFloat(n1b.value);
    let vn2a=parseFloat(n2a.value);
    let vn2b=parseFloat(n2b.value);
    if (vn2a*vn2a + vn2b*vn2b == 0){
        answer.textContent = "cannot divide by zero";}
    else{
     answer.textContent = ((vn1a*vn1a+vn2a*vn2b)/(vn2a*vn2a + vn2b*vn2b))+" + "+((vn1b*vn2a-vn1a*vn2b)/(vn2a*vn2a + vn2b*vn2b))+"i";}
}
