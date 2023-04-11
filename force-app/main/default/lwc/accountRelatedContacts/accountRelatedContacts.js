import { LightningElement,api,track } from 'lwc';
import accountRecord from '@salesforce/apex/ShowAccountRelatedContacts.getAccountList';

export default class AccConRecords extends LightningElement {
    accPickList=[];
    @api accId;
    @api showchild = false;
   
connectedCallback() {
   accountRecord()
        .then( (result)=>{
            let temp=[];
            result.forEach(temp => {
                console.log(temp);
                let obj = {
                    value: temp.Id,
                    label: temp.Name
                };
                temp.push(obj);
            });
        this.accPickList = temp; 
        console.log(this.accPickList); }
          )
        .catch( (error=>{console.log(error);})
        );
        
}
    
handleChange(event){
        this.accId = event.detail.value;
        console.log(  this.accId)
         if(this.accId != null || this.accId !=undefined){
            this.showchild=true;
            
            //call function from child
            this.template.querySelector('c-related-contact').Reloaddata();
         }

}



}