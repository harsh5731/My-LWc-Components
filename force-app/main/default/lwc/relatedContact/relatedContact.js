import{LightningElement,api,wire,track}from'lwc';
import contactRecord from'@salesforce/apex/ShowAccountRelatedContacts.getContacts';

const column=[{
label:'FirstName',
    fieldName:'FirstName'
},
{
    label:'LastName',
    fieldName:'LastName'
},
{
    label:'Email',
    fieldName:'Email',
    type:'email'
},
{
    label:'Phone',
    fieldName:'Phone',
    type:'phone'
}]

export default class ChildAccCon extends LightningElement{
    @api idfromparent;
    @track contacts;
    @track columns = column;
    @api testdata;
    @api showTable;
connectedCallback() {
    contactRecord({accId:this.idfromparent})
        .then((result)=>{
         console.log(this.idfromparent);
        this.contacts=result;
        console.log(result);
      
       // this.dispatchEvent(new CustomEvent('showtable', this.testdata));
        })
        .catch((error=>{console.log(error);})
        );
}
@api
Reloaddata(){
    contactRecord({accId:this.idfromparent})
    .then((result)=>{
     console.log(this.idfromparent);
    this.contacts=result;
    console.log(result);
    this.testdata=true;
   // this.dispatchEvent(new CustomEvent('showtable', this.testdata));
    })
    .catch((error=>{console.log(error);})
    );
}

// @wire(contactRecord, {rId:'$idFromParent'})
// wiredData({error, data}) {
//     console.log(this.idfromparent);
//   if(data) {
//     console.log('Data', data);
//   } else if(error) {
//      console.error('Error:', error);
//   }
// }

}

