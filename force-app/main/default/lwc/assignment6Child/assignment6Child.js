import { LightningElement,wire,api } from 'lwc';
import showContacts from '@salesforce/apex/LWCAssign6.fetchContact';
export default class LightningAssignment6 extends LightningElement {

@wire(showContacts) conRecords;
@api conRecId;

handleChange(event){
    this.conRecId = event.target.dataset.id;
console.log('table ka data ',this.conRecId);
// const selectedEvent = new CustomEvent("progressvaluechange", {
//       detail: this.conRecId });
this.dispatchEvent(new CustomEvent("cusevent",{detail:this.conRecId}));
//ths.dispatchEvent(selectedEvent);
console.log('after dispatch');
}

}