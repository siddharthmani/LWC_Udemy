import { LightningElement, track, api } from 'lwc';

export default class PublicMethodChild extends LightningElement {
    @track value = ['Red'];

    /*get options() {
        return [
            { label: 'Red Marker', value: 'Red' },
            { label: 'Blue Marker', value: 'Blue' },
            { label: 'Green Marker', value: 'Green' },
            { label: 'Black Marker', value: 'Black' },
        ];
    }*/
    options=
        [
            { label: 'Red Marker', value: 'Red' },
            { label: 'Blue Marker', value: 'Blue' },
            { label: 'Green Marker', value: 'Green' },
            { label: 'Black Marker', value: 'Black' },
        ];

    @api
    selectCheckbox(checkBoxVal){
        const selectedCheckBox = this.options.find( checkbox =>{
            return checkBoxVal === checkbox.value;
        })
        if(selectedCheckBox){
            this.value = selectedCheckBox.value;
            return "Successfully checked";
        }
            return "No checkbox found";
    }
}