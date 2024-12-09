export class operation{
    constructor(n1,n2){
        this.n1=Number(n1);
        this.n2=Number(n2);
    }
    Addition(){
        return this.n1+this.n2;
    }
    Substruct(){
        return this.n1-this.n2;
    }
    Multiplication(){
        return this.n1*this.n2;
    }
    Divide(){
        return this.n1/this.n2;
    }
}