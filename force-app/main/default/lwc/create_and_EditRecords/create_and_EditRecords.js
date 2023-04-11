import { LightningElement,track,wire,api } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { createRecord, deleteRecord } from 'lightning/uiRecordApi';
import conObject from '@salesforce/schema/Contact';
import conFirstName from '@salesforce/schema/Contact.FirstName';
import conLastName from '@salesforce/schema/Contact.LastName';
import conBday from '@salesforce/schema/Contact.Birthdate';
import conEmail from '@salesforce/schema/Contact.Email';
import conDepartment from '@salesforce/schema/Contact.Department';
import fetchContact from '@salesforce/apex/ContactModal.fetchContact';
import autoFetchContact from '@salesforce/apex/ContactModal.autoFetchContact';
import conRecord from '@salesforce/apex/ContactModal.conRecord';
import updateConRec from '@salesforce/apex/ContactModal.updateConRec';
import deleteContact from '@salesforce/apex/ContactModal.deleteContact';

export default class ContactModal extends LightningElement {
    firstName = '';
    lastName = '';
    bday= '';
    emailId= '';
    departmentVal= '';
    conRecords;
   @api contactId;
 @track searchData= [];
    @track conName;
    @track customFormModal = false; 
   
    handleDelete(event){
        this.contactId =event.target.value;
        console.log(this.contactId);
        deleteContact({cId:this.contactId}).then(res=>{
            console.log('result->',res);

        }).catch(err=>{
            console.log('Error-->',err);
        });
    }

handleClick(event){
this.customFormModal = true;
    this.contactId = event.target.value;
conRecord({cId:this.contactId})
.then(result=>{
    result.forEach(currentItem => {
 this.firstName =currentItem.FirstName;
  this.lastName =currentItem.LastName;
  this.bday =currentItem.Birthdate;
  this.emailId =currentItem.Email;
  this.departmentVal =currentItem.Department;
    });
    })
.catch(error=>{
    console.log('Error->',error);});
}

updateRecord(){
updateConRec({cId:this.contactId,fName:this.firstName,lName:this.lastName,bDay:this.bday,emaill:this.emailId,dept:this.departmentVal})
.then(result=>{
    this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact record has been Updated',
                        variant: 'success',
                    }),
                );
console.log('Result->>',result);
})
.catch(error=>{
    console.log('Error->',error);});
}

 handleContactName(event){
        this.conName = event.detail.value;
        console.log('>> this.ContactName >>', this.conName);   
   fetchContact({contactName:this.conName})
    .then(result =>  { 
        console.log(result);
        this.searchData = result;  
          })
        }
    
        //@wire(autoFetchContact) conRecords;
        // localMethodgetdata({ error, data }) {
        //    if(data){ 
        //     console.log('Data->> ',data);
        //     this.searchData = data;
        //      }
        //  if(error){
        //     console.log('Error->> ',error);
        //  }
        // } 
    
    contactChangeVal(event) {
        console.log(event.target.label);
        console.log(event.target.value);
        if(event.target.label=='First Name'){
            this.firstName = event.target.value;
        }
        if(event.target.label=='Last Name'){
            this.lastName = event.target.value;
        }
        if(event.target.label=='Birth Date'){
            this.bday = event.target.value;
        }
        if(event.target.label=='Email'){
            this.emailId = event.target.value;
        }
        if(event.target.label=='Department'){
            this.departmentVal = event.target.value;
        }
    }

    insertContactAction(){
        console.log(this.selectedAccountId);
        const fields = {};
        fields[conFirstName.fieldApiName] = this.firstName;
        fields[conLastName.fieldApiName] = this.lastName;
        fields[conBday.fieldApiName] = this.bday;
        fields[conEmail.fieldApiName] = this.emailId;
        fields[conDepartment.fieldApiName] = this.departmentVal;
        const recordInput = { apiName: conObject.objectApiName, fields };
        createRecord(recordInput)
            .then(contactobj=> {
                this.contactId = contactobj.id;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Success',
                        message: 'Contact record has been created',
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error creating record',
                        message: error.body.message,
                        variant: 'error',
                    }),
                );
            });
    }
    
    customShowModalPopup() {            
        this.customFormModal = true;
    }
 
    customHideModalPopup() {    
        
        this.customFormModal = false;
    }

    connectedCallback(){
        autoFetchContact().then(result=>{
            console.log(result);
            this.searchData = result;

        }).catch(error=>{

        });
    }


}