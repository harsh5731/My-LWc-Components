// 

import { LightningElement,wire,track,api } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import Status from '@salesforce/schema/Positions__c.Status__c';
import Id from '@salesforce/user/Id';

export default class Assignment5Q3 extends LightningElement {

    @track picklistValues;
    @api recordId;
    @api objectApiName;

    userId = Id;


    @wire(getPicklistValues,
        {
            recordTypeId: '012000000000000AAA',
            fieldApiName: Status
        }
    )
    wireStatusValues({data,error}){
        if(data){
            console.log('data>>>',JSON.stringify(data));
            this.picklistValues = data.values;
        }
        else if(error){
            console.log('error>>>',error);
        }
    }
}