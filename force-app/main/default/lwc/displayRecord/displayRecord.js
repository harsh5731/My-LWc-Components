import { LightningElement, track,api} from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import sendString from '@salesforce/apex/TicketClass.sendString';

export default class TicketComp extends LightningElement {

    @api recordId;  
    enableButton = true;
    @track textValue = '';
    isLoaded = false;

    get getEnableButton() {
        return !(this.textValue && this.textValue.length);
    }

    handleChange(event) {
        this.textValue = event.target.value;
        console.log('rich text ki value-->', this.textValue);
        // if (this.textValue != null) {
        //     this.enableButton = false;
        // }
    }

    sendString(){
        console.log('record ki id',this.recordId);
        sendString({htmlBody: this.textValue, rId:this.recordId}).then(result=>{
            console.log(result);
            this.isLoaded = false;
        }).catch();
    }
     
     handleClick(event){
        this.isLoaded = true;
        this.sendString();

        console.log('rich text ki value-->', this.textValue);
     }


}





// import { LightningElement,api} from 'lwc';
// //import PutData from '@salesforce/apex/DisplayRecordPage.PutData';
// import retreiveData from '@salesforce/apex/DisplayRecordPage.retreiveData';   
// export default class DisplayRecord extends LightningElement {
//     @api recordId;
//     Record;

// // @wire(retreiveData)S
// // wiredAccount({ error, data }) {
// //     if (data) {
// //         // this.Record.push(data);
// //        // this.record = data;
// //        // this.error = undefined;
// //        console.log('data',data);
       
// //     } else if (error) {  
// //         //this.error = error;
// //         //this.record = undefined;
// //         this.Result1=false;
// //         console.log('error',error);
// //     }
// // }
// Function1(event) {
//     //this.Result = this.str*this.str1;
//     retreiveData({a:this.recordId}).then(
//         (result)=>{
//           this.Record = result;
//       console.log(result);
//         }
//           ).catch((error)=>{
//       console.log(error);
//           });
// }



// }