import { LightningElement,wire,track,api } from 'lwc';
import getField from '@salesforce/apex/LWCAssign6.getContactFields'
import getContactsData from '@salesforce/apex/LWCAssign6.getAssoContact'
import deleteSelectedAccount from '@salesforce/apex/LWCAssign6.deleteSelectedAccount'

import { refreshApex } from '@salesforce/apex';

const actions = [
    { label: 'Edit', name: 'edit' },
    { label: 'Delete', name: 'delete' }
];

export default class CreateContact extends LightningElement {
@track columnsList =[];
@api recordId;
@track lstContacts = []
isNewCreate = false;
conRecordId = '';
sortBy=null;
sortDirection=null;

@track fields = [];

get getIsNewCreate(){
    return this.isNewCreate;
}


@wire(getField)
if(data){
    console.log('OUTPUT : ',data);
    if(data.data){
        let fieldArr=[];
        this.fields = data.data;
        console.log('OUTPUT : ',data.data);
        if(data.data.length > 0){
            data.data.map(item=>{
                fieldArr.push({
                    label: item,
                    fieldName : item,
                    sortable:true
                })
            }) ;
                        
            if(fieldArr.length > 0){
                fieldArr.push({
                    type: 'action',
                    typeAttributes: { rowActions: actions }
                });
                this.columnsList = fieldArr;
            }
        }else{
            this.columnsList = [
                { label: 'FirstName', fieldName: 'FirstName',sortable:true },
                { label: 'LastName', fieldName: 'LastName',sortable:true },
                { label: 'Phone', fieldName: 'phone', type: 'phone',sortable:true },
                {
                    type: 'action',
                    typeAttributes: { rowActions: actions }
                }
                
            ];
        }
    }
    else if(data.error){
        console.log('Error: ',data.error);
    }
}          

@wire(getContactsData,{accId:'$recordId'}) lstContacts;

handleClick(event){
    this.isNewCreate = true;
    this.conRecordId = '';
}

hideModalBox(){
    this.isNewCreate = false;
    
}

 handleRowAction(event) {
        const actionName = event.detail.action.name;
        const row = event.detail.row;
        switch (actionName) {
            case 'delete':
                this.deleteRow(row);
                break;
            case 'edit':
                this.editRecords(row);
                break;
            default:
        }
    }

   deleteRow(row) {
       let conId = row.Id
       console.log('Row Id',conId);
        deleteSelectedAccount({cId:conId})
        .then(result =>{
           return refreshApex(this.lstContacts);
        } )
        .catch(error => {
            console.log('Error-->',error);
        });
    }

editRecords(row){
    let conId = row.Id
    console.log('Row Id',conId);
    this.conRecordId = conId;
    this.isNewCreate = true;
}

handleSubmit(event){
    event.preventDefault();
    let  fields = event.detail.fields;
    fields = {...fields,...{'AccountId':this.recordId}} ; // modify a field
    this.template.querySelector('lightning-record-form').submit(fields);
}

handleSuccess(event){
    console.log('handleSuccess ',event);
    refreshApex(this.lstContacts);
    this.isNewCreate = false;   
}   

 doSorting(event) {
        this.sortBy = event.detail.fieldName;
        this.sortDirection = event.detail.sortDirection;
        this.sortData(this.sortBy, this.sortDirection);
    }

    sortData(fieldname, direction) {
        let parseData = JSON.parse(JSON.stringify(this.lstContacts.data));
        // Return the value stored in the field
        let keyValue = (a) => {
            return a[fieldname];
        };
        // cheking reverse direction
        let isReverse = direction === 'asc' ? 1: -1;
        // sorting data
        parseData.sort((x, y) => {
            x = keyValue(x) ? keyValue(x) : ''; // handling null values
            y = keyValue(y) ? keyValue(y) : '';
            // sorting values based on direction
            return isReverse * ((x > y) - (y > x));
        });
        this.lstContacts.data = parseData;
    }    

handleRefresh(){
    refreshApex(this.lstContacts);
}

}