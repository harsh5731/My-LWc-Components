import { LightningElement,wire,track} from 'lwc';
import getCustomSetting from '@salesforce/apex/CaseGame.getCustomSettings';
import getCases from '@salesforce/apex/CaseGame.showCase';
const columns = [
    { label: 'Case Number', fieldName: 'CaseNumber' },
    { label: 'Status', fieldName: 'Status'},
    { label: 'Priority', fieldName: 'Priority'},
    { label: 'Case Origin', fieldName: 'Origin'},
    {label: 'Case Subject', fieldName: 'Subject'},
    { label: 'Description', fieldName: 'Description'},
    { label: 'Id', fieldName: 'Id'},
];

export default class GameParentComponent extends LightningElement {




    recordTypePicklistOptions = []
    @track dataTable = [];

    @track recordTypePicklistOptions;
    @track gameValue;
    @track userId;
    @track fromDate;
    @track tillDate;
    @track columns = columns;

    @wire(getCustomSetting)
    getCustomSettings({ error, data }) {
          var a=[];
        if (data) { 
            console.log('data', data);
          data.forEach(element => {
                var obj = {
            label: element.Name, 
            value: element.Name};
            a.push(obj);
          });
               console.log(a);
            this.recordTypePicklistOptions=a;
        } else if (error) {
           /// this.Result1 = false;
            console.log('error', error);
        }
    }

  connectedCallback() {
 console.log('Connected Call Back');
       console.log('this is log',this.recordTypePicklistOptions); }

   changeHandler(event){
       console.log('selected value', event.detail.value);
       this.gameValue=event.detail.value;  
   }

   startDateHandler(event){
    this.fromDate = event.detail.value;
    console.log('Start Date>>>',this.fromDate);
   }

   endDateHandler(event){
    this.tillDate = event.detail.value;
    console.log('End Date>>>',this.tillDate);
   }

   userIdHandler(event){ 
       this.userId = event.detail.value;
    //console.log('User Id>>>',this.userId);
    }

//     changeHandler(event){
//         console.log(event.target.value);
//         console.log('name >> ',event.target.name);
//        console.log('selected value', event.detail.value);
//             if(event.target.name == 'progress') {
//                 this.gameValue = event.detail.value;
//             }else if(event.target.name == 'userId'){
//                 this.userId = event.target.value;
//                // console.log('user id->> ',this.userId);
//             }else if(event.target.name == 'fromDate'){
//                 this.fromDate = event.target.value;
//               //  console.log(this.fromDate);
//             }else if(event.target.name == 'tillDate'){
//                 this.tillDate = event.target.value;
//             }    
//    }

   handleClick(){
       console.log('User Id ',this.userId);
       getCases({userid:this.userId, gameType:this.gameValue, fromDate:this.fromDate, tillDate:this.tillDate})
    .then(result => {
        this.dataTable =result;
        console.log('result>>>',result);     
    }) 
    .catch(error => {
        console.log('error->> ',error);
    });

}
   
   handleReset(){
    this.template.querySelector('form').reset();
   }
}