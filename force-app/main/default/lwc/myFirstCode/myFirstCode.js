import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
import { LightningElement,api } from 'lwc';

export default class MyFirstCode extends LightningElement {

    mytitle = "This is Second Card";
    @api getvalueFromParent ;
    @api showChild;

    connectedCallback(){
        console.log(this.showChild);
        console.log(this.getvalueFromParent);

    }
}
//     searchKey;
//     handleChange(event){
//     this.searchKey = event.target.value;

//     //Create Event
//     const serachEvent = new CustomEvent("getserachvalue",{detail:this.searchKey});
//     // Dispatches the event.
//     this.dispatchEvent(searchEvent);
// }


