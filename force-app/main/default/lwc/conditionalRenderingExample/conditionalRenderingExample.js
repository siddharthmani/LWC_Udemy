import { LightningElement, track } from 'lwc';

export default class ConditionalRenderingExample extends LightningElement {
    @track displayDiv = false;
    @track cityList = ['Jaipur','Bangalore','Delhi','Hyderabad','Mumbai'];
    showDivHandler(event){
        this.displayDiv = event.target.checked;
    }
}