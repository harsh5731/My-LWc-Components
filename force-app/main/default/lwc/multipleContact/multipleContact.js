import { LightningElement,wire,track } from 'lwc';
import fetchContact from '@salesforce/apex/LWCAssign6.fetchContact';
import sendData from '@salesforce/apex/LWCAssign6.sendEmail';
const column=[{
    label:'FirstName',
        fieldName:'FirstName'
    },
    {
        label:'LastName',
        fieldName:'LastName'
    },
    {
        label:'Email',
        fieldName:'Email',
        type:'email'
    },
    {
        label:'Phone',
        fieldName:'Phone',
        type:'phone'
    }]

export default class MultipleContact extends LightningElement {

    @track columns = column;
    recordId =[];    
    selectedRows = [];

    @wire(fetchContact) contactsRecords;
   

    selectedData(){
        this.recordId =  this.template.querySelector("lightning-datatable").getSelectedRows();
        console.log(this.recordId);
        console.log(this.selectedRows); 
        this.sendData(); 
        

    }
    sendData(){
        sendData({conList:this.recordId}).then(result=>{
            console.log(result);
            this.selectedRows = [];

        }).catch(error=>{
            console.log(error);
        });
    }

}