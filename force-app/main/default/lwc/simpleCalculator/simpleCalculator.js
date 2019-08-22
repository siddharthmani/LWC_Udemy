import { LightningElement, track } from 'lwc';

export default class SimpleCalculator extends LightningElement {
    @track currentResult;
    @track previousResults=[];
    @track showPreviousResults = false;
    firstNumber;
    secondNumber;

    numberCHangeHandler(event){
        const inputBoxEvent = event.target.name;
        if(inputBoxEvent === 'firstNumber'){
            this.firstNumber = event.target.value;
        }else if(inputBoxEvent === 'secondNumber'){
            this.secondNumber = event.target.value;
        }
    }

    addHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult='The value of '+firstN+' +'+secondN+' is '+(firstN+secondN);
        this.currentResult = `The result of ${firstN}+${secondN} is ${firstN+secondN}`;
        this.previousResults.push(this.currentResult);
    }

    subHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult='The value of '+firstN+' -'+secondN+' is '+(firstN-secondN);
        this.currentResult = `The result of ${firstN}-${secondN} is ${firstN-secondN}`;
        this.previousResults.push(this.currentResult);
    }

    multHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult='The value of '+firstN+' *'+secondN+' is '+(firstN*secondN);
        this.currentResult = `The result of ${firstN}*${secondN} is ${firstN*secondN}`;
        this.previousResults.push(this.currentResult);
    }

    divHandler(){
        const firstN = parseInt(this.firstNumber);
        const secondN = parseInt(this.secondNumber);

        //this.currentResult='The value of '+firstN+' /'+secondN+' is '+(firstN+/econdN);
        this.currentResult = `The result of ${firstN}/${secondN} is ${firstN/secondN}`;
        this.previousResults.push(this.currentResult);
    }

    showPreviousResultsFun(event){
        this.showPreviousResults = event.target.checked;
    }
}