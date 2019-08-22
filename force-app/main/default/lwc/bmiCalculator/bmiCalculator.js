import { LightningElement, track } from 'lwc';
import {getBMI} from 'c/bmi';

export default class BmiCalculator extends LightningElement {
    cardTitle='BMI Calculator';
    weight;
    height;
    @track bmiResult;

    onWeightChange(event){
        this.weight = parseFloat(event.target.value);
    }
    onHeightChange(event){
        this.height = parseFloat(event.target.value);
    }
    
    calculateBMI(){
       /* try{
            this.bmiResult = this.weight/(this.height*this.height);
        }catch(error){
            this.bmiResult = undefined;
        }*/
        this.bmiResult = getBMI(this.weight, this.height);
    }

    get bmiValue(){
        if(this.bmiResult === undefined){
            return "";
        }
        return `Your BMI is: ${this.bmiResult}`;        
    }
}