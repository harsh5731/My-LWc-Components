import { LightningElement ,track} from 'lwc';

export default class Assignment7 extends LightningElement {
   @track inputVal;
   @track showHide = false;

   handlechange(event){
       this.inputVal = event.target.value;
       console.log(event.target.value);

   }
   handleCheck(event){
       this.showHide = !this.showHide;
   }
}
