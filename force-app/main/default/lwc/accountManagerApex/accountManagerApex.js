//import { LightningElement, wire } from 'lwc';
import { LightningElement, track } from 'lwc';
import getAllAccounts from '@salesforce/apex/AccountHandler.getAccount';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

export default class AccountManagerApex extends LightningElement {
    //@wire(getAllAccounts)
    //accounts;
    @track numberOfRecords;
    @track accounts;

    get responseReceived(){
        if(this.accounts){
            return true;
        }
        return false;
    }

    numberChangedHandler(event){
        this.numberOfRecords = event.target.value;
    }

    getAccounts(){
        getAllAccounts({numberOfRecords:this.numberOfRecords}).then(response =>{
            this.accounts = response;
            const toastEvent = new ShowToastEvent({
                title: 'Accounts Loaded',
                message : this.numberOfRecords + ' Accounts fetched from server',
                variant : 'success'
            });
            this.dispatchEvent(toastEvent);
        }).catch(error =>{
            console.error('Error in getting the accounts', error.body.message);
            const toastEvent = new ShowToastEvent({
                title: 'ERROR',
                message : error.body.message,
                variant : 'error'
            });
            this.dispatchEvent(toastEvent);
        })
    }
}