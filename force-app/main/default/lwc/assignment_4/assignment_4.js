import { LightningElement,wire,track } from 'lwc';
import getContacts from '@salesforce/apex/LwcAssign4.getContacts';

const columns = [
    {label:'Contact Id' , fieldName:'Id'},
    {label:'First Name' , fieldName:'FirstName'},
    {label:'Contact Id' , fieldName:'LastName'},
];

export default class Assignment4 extends LightningElement {

     @track columns = columns;
     @track result =[];
   

    showCon = false;

    showData(event){ 
        console.log('method k andr');
        getContacts()
            .then(result =>  { 
                this.result=result;
                this.showCon = true;
           console.log(result);
             });
           }
   hideData(){
      this.showCon  = !this.showCon;
   }


 //  showContact = false;


    // @wire(getContacts)
    // wireLicalMethod({data,error}){
    //     if(data){
    //         this.result =data;
    //     }
    //     else if(error){
    //         console.log(error);
    //     }
    // }
}

   
