import { LightningElement,wire,track } from 'lwc';
import getWrapperClassList from '@salesforce/apex/WrapperTask.getWrapperClassList';
import { NavigationMixin } from 'lightning/navigation';
import UserPreferencesLightningExperiencePreferred from '@salesforce/schema/User.UserPreferencesLightningExperiencePreferred';

export default class WrapperClassComponent extends NavigationMixin(LightningElement) {

    @track appList;
    appStatus;
    @track appsList = [];

    @track recordSelected;

    // get getNames(){
    //     return this.appsList && this.appsList.length > 0 && this.appsList.map(item=>{return item.Name}).join(',');
    // }

    connectedCallback() {
        getWrapperClassList()
            .then(result => {
                console.log('data ', result);

                const updatedResult = result.map(element => {
                    const updatedApp = element.App.map(item => ({
                        ...item,
                        isClass: (item.Status__c == 'Working' ? 'yellow-cls' : item.Status__c == 'Completed' ? 'green-cls' : item.Status__c == 'Rejected' ? 'red-cls' : item.Status__c == 'IN Progress' ? 'blue-cls' : '')
                    }));

                    return { ...element, App: updatedApp };
                });

                console.log('updated---', updatedResult);

                this.appList = updatedResult;
            })
            .catch(error => {
                console.error(error);
            });
    }

    navigateToViewAccountPage(event) {
        this.recordSelected = event.target.dataset.id;
        console.log('clicked Id>>>', this.recordSelected);
        // console.log('clicked app>>>',event.target.value);
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.recordSelected,
                objectApiName: 'Application__c',
                actionName: 'view'
            },
        });
    }
}