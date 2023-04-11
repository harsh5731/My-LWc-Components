import { LightningElement, track } from 'lwc';
import sendData from '@salesforce/apex/SendData.sendData';
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

    export default class ValidationInput extends LightningElement {

        @track accName;
        @track accEmail;
        @track accPhone;

        handleChange(event) {
            const regPhone = /^\d*[.]?\d*$/
            if (event.target.name == 'Name') {
                this.accName = event.target.value;
                console.log('Name-->', this.accName);
            }
            else if (event.target.name == 'Email') {
                this.accEmail = event.target.value
                console.log('Email-->', this.accEmail);
            }
            else if (event.target.name == 'Phone') {
                if(event.target.value.match(regPhone)){
                    
                    this.accPhone = event.target.value;
                }else{
                    event.target.value = this.accPhone;
                }   
                console.log('Phone-->', this.accPhone);
            }
        }

        submitData() {
            let validation = this.isInputValid();
            console.log('submit validation --> ',validation);
            sendData({name: this.accName, phone: this.accPhone , email: this.accEmail}).then(res=>{
                console.log('error',res);
                this.showNotification('Alert!',res,'warning');
            }).catch(err=>{
                console.log('error',err)
                this.showNotification('Error!',err,'error');
            })
        }

        isInputValid() {
            let isValid = true;
            console.log('is input k andr');
            const regName = /^[a-zA-Z ]{2,10}$/;
            //const regName = /^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)/;
            const regPhone = /^\d*[.]?\d*$/
            // const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\. [a-zA-Z]{2,6}$/;
            const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
            let inputFields = this.template.querySelectorAll('.validate');
            inputFields.forEach(inputField => {
            //   if(!inputField.checkValidity()) {
                    if(inputField.value!= '' && inputField.name == 'Name'){
                            if(inputField.value.match(regName)){
                                console.log('Name regex working fine');
                                inputField.setCustomValidity('');                            
                            }else {
                                console.log('Name regex error');
                                inputField.setCustomValidity("Name Size Exceed");
                            }
                        }
                    else if(inputField.value!= '' && inputField.name == 'Email') {
                            if(inputField.value.match(regEmail)){
                                inputField.setCustomValidity('');
                                console.log('email regex working fine');
                            }else{
                                console.log('email regex error');
                                inputField.setCustomValidity("Please write valid mail address");
                            } 
                        }else if(inputField.value!= '' && inputField.name == 'Phone') {
                            if(inputField.value.match(regPhone)){
                                inputField.setCustomValidity('');
                                console.log('phone regex working fine');
                            }else {
                                console.log('Phone regex error');
                                inputField.setCustomValidity("Phone Shoud Be of 10 Digits");
                            }
                        }
                    inputField.reportValidity(); 
                    isValid = false;
            }); 
            
            return isValid;
        }

        showNotification(title,msg,vr) {
            const evt = new ShowToastEvent({
                title: title,
                message: msg,
                variant: vr,
            });
            this.dispatchEvent(evt);
        }
 }
    
// import { LightningElement,track,api } from 'lwc';
// import NAME_FIELD from '@salesforce/schema/Account.Name';
// import Phone_FIELD from '@salesforce/schema/Account.Phone';
// import Rating from '@salesforce/schema/Account.Rating';

// export default class ParentComponenet extends LightningElement {

//     nameField = NAME_FIELD;
//     phoneField = Phone_FIELD;
//     rating = Rating

//     showdata = false;

//     // Flexipage provides recordId and objectApiName
//     @api recordId;
//     @api objectApiName;


//     fun1(){
//         this.showdata = !this.showdata;
//     }

//     // @api Data;

//     // showChidData(event) {
//     //     console.log(event.detail);
//     //     this.Data = event.detail;
//     //     console.log(this.Data);
//     //     let cmp = this.template.querySelector('c-child-component-lwc');
//     //     if(cmp){
//     //         cmp.childfunction(this.Data);
//     //     }
//     // }



// }