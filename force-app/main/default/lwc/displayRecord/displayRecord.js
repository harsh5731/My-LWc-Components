import { LightningElement,api} from 'lwc';
//import PutData from '@salesforce/apex/DisplayRecordPage.PutData';
import retreiveData from '@salesforce/apex/DisplayRecordPage.retreiveData';   
export default class DisplayRecord extends LightningElement {
    @api recordId;
    Record;

// @wire(retreiveData)
// wiredAccount({ error, data }) {
//     if (data) {
//         // this.Record.push(data);
//        // this.record = data;
//        // this.error = undefined;
//        console.log('data',data);
       
//     } else if (error) {
//         //this.error = error;
//         //this.record = undefined;
//         this.Result1=false;
//         console.log('error',error);
//     }
// }
Function1(event) {
    //this.Result = this.str*this.str1;
    retreiveData({a:this.recordId}).then(
        (result)=>{
          this.Record = result;
      console.log(result);
        }
          ).catch((error)=>{
      console.log(error);
          });
}



}