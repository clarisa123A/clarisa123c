document.addEventListener("keyup",e=>{})
const x=Number(document.getElementById("num1").value);
const y=Number(document.getElementById("num2").value);
const opt =e.key .tolLowercase();
switch(operators){
    case "q":
        const sum= number1+ number2;
        alert('the answer is' +sum);
        break;
        
        case "w":
            const D= number1-number2;
            alert('the answer is' +D);
            break;

            case "e":
                const M= number1*number2;
                alert('the answer is' *M);
                break;

                case "r":
                    const G= number1/number2;
                    alert('the answer is' +G);
                    break;
                    
                    default:
                        break;
}