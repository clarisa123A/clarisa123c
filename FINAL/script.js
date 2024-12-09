import{operation}from`/class.js`

const n1=document.getElementById("n1");
const n2=document.getElementById("n2");
const opt=document.getElementById("opt");
const btncal=document.getElementById("btncal");
const Result=document.getElementById("Result");

btncal.addEventListener('click',()=>{
    const toSolve = new operation(n1.ariaValueMax,n2.value)
switch (opt.value){
    case'+':
    Result.textContent=`${toSolve.Addition}`;
    break;

    case'-':
    Result.textContent=`${toSolve.Substruction}`;
    break;

    case'*':
    Result.textContent=`${toSolve.Multiply}`;
    break;

    case'/':
    Result.textContent=`${toSolve.Divide}`;
    break;
}}
)