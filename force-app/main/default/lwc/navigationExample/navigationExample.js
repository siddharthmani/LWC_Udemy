import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigationExample extends NavigationMixin(LightningElement) {

    openSFDCFacts(){
        this[NavigationMixin.Navigate]({
            type : 'standard__webPage',
            attributes: {
                url : 'https://sfdcfacts.com'
            }
        });
    }

    openAccountHome(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'home'
            }
        });
    }

    createNewContact(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'new'
            }
        });
    }

    openOppListView(){
        this[NavigationMixin.Navigate]({
            type : 'standard__objectPage',
            attributes: {
                objectApiName: 'Opportunity',
                actionName: 'list'
            }
        });
    }

    openCaseRecord(){
        this[NavigationMixin.Navigate]({
            type : 'standard__recordPage',
            attributes: {
                recordId: "5002v00002QuYgSAAV",
                objectApiName: 'Case', // objectApiName is optional
                actionName: 'view'
            }
        });
    }

    openMeetingRoom(){
        this[NavigationMixin.Navigate]({
            type : 'standard__navItemPage',
            attributes: {
                apiName: 'LDS_using_LWC'
            }
        });
    }

    previewFile(){
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'filePreview'
            },
            state : {
                recordIds: '0692v000005jYEkAAM,0692v000005jYEaAAM',
                selectedRecordId:'0692v000005jYEaAAM'
            }
        });
    }

}