import { LightningElement,track,wire } from 'lwc';
import retreiveData from '@salesforce/apex/LwcTestClass.retreiveData';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Assignment_1 extends LightningElement {
  @track Result ;
  @track myVar=true ;
  @track label = "Names";
  @track next = "one";
  @track tabs=[{label:'tab1',value:'tab1'},{label:'tab2',value:'tab2'},{label:'tab3',value:'tab3'},{label:'tab4',value:'tab4'}];
  @track value = 'select';
  _selected = [];
  
  
  isSelectedNoIcon = false;



@wire(retreiveData)
wiredAccount({ error, data }) {
    if (data) {
        this.Result = data;
       // this.record = data;
       // this.error = undefined;
       console.log('data',data);
    } else if (error) {
        //this.error = error;
        //this.record = undefined;
        this.myVar=false;
        console.log('error',error);
    }
}

//    showSuccessToast() {
       
//     }



noIconHandleClick(event){
    this.myVar = !this.myVar;
    this.isSelectedNoIcon = !this.isSelectedNoIcon;
    this.label = "Passwords";
    const evt = new ShowToastEvent({
        title: 'Toast Success',
        message: 'Opearion sucessful',
        variant: 'success',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
    
     
}

fun2(event){

    console.log(event.target.value);
    // if(this.next == "one" ){
    //     this.next = "two";
    // }
    // else if(this.next == "two"){
    //     this.next = "three";
    // }
    // else if(this.next == "three"){
    //     this.next = "one";
    // }
}
// get selected() {
//     return this._selected.length ? this._selected:"none";
// }
fun1(event){
    console.log(this._selected);
    
}

handleChange(event) {
    this.value = event.detail.value;
     this._selected =    this.value.toString();
}


}
// fun1(event){
//     if(this.myvar == true){
//         this.myvar = false;
//     }
//     else{
//         this.myvar = true;

//     } 

//