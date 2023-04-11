import { LightningElement,api } from 'lwc';
import showContacts from '@salesforce/apex/LWCAssign6.fetchConRec';
export default class ParentLightning6 extends LightningElement {

@api contactId;
showParent=false;
@api conRecords = [];
handleChange(event){
    this.showParent=true;
    this.contactId = event.detail;
console.log('Contact Id',this.contactId);
this.localMethod();
}

localMethod(){
showContacts({cId:this.contactId}).then(result=>{
    this.conRecords = result;
    console.log('Data ',this.conRecords);
})
}

}