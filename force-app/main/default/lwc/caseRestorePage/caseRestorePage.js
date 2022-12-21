import { LightningElement,wire,track } from 'lwc';
import getCustomSetting from '@salesforce/apex/caseRestorePage.getCustomSettings';
export default class GameParentComponent extends LightningElement {
    recordTypePicklistOptions = []

    @track recordTypePicklistOptionsTr;

    @wire(getCustomSetting)
    getCustomSettings ({ error, data }) {
          var a=[];
        if (data) {
           
            console.log('data', data);
           
          data.forEach(e => {
              
                var obj = {label: e.Name, value: e.GameTypes__c};
            a.push(obj);
          });
               
                
            
                console.log( a);
            this.recordTypePicklistOptionsTr=a;
            // this.record = data;
            // this.error = undefined;
        } else if (error) {
            //this.error = error;
            //this.record = undefined;
            this.Result1 = false;
            console.log('error', error);
        }
    }

   connectedCallback() {
       console.log('inside conn');
       //this.recordTypePicklistOptionsTr = this.recordTypePicklistOptions;
       console.log('this is log',this.recordTypePicklistOptionsTr);
    //    getCustomSetting().then(result =>{
    //        this.contacts = result;
    //        console.log(this.contacts)
    //        }).catch(error=>{
    //            console.log(error)
    //        });
   } 

   changeHandler(event){
       console.log('selected value', event.detail.value);
   }
   handleReset(){
    this.template.querySelector('form').reset();
   }
}












// import { LightningElement, track, wire } from 'lwc';
// import getCustomSettings from '@salesforce/apex/CaseRestorePage.getCustomSettings';

// export default class CaseRestorePage extends LightningElement {

//     @track a;
//     @track recordTypePicklistOptions ;
//     @track error;


//     //@wire(getCustomSettings)
//     // getCustomSettings ({ error, data }) {
//     //     if (data) {
//     //         console.log('data', data);
//     //         this.a = data;
//     //         for(var i = 0; i < data.length; i++){
//     //             console.log(data[i]);
//     //             console.log(data[i].Id);
//     //             console.log(data[i].GameTypes__c);
//     //             var obj = {};
//     //             obj.value = data[i].Name;
//     //             obj.label = data[i].GameTypes__c;
//     //             this.recordTypePicklistOptions.push(obj);
//     //             console.log( this.recordTypePicklistOptions);
//     //         }
//     //         // this.record = data;
//     //         // this.error = undefined;
//     //     } else if (error) {
//     //         //this.error = error;
//     //         //this.record = undefined;
//     //         this.Result1 = false;
//     //         console.log('error', error);
//     //     }
//     // }

//     handleLoad() {
//         getCustomSettings()
//             .then(result => {
//                 console.log(result);
//                 var a=[];
//                 result.forEach(element => {
//                     var obj = {
//                         label : element.GameTypes__c,
//                         value : element.Name
//                     };
                   
//                     a.push(obj);
                    
//                 });

//                 console.log(a);
//                 this.recordTypePicklistOptions=a;
//                 console.log('Data',toString(this.recordTypePicklistOptions));
//             })
//             .catch(error => {
//                 console.log('error', error);
//             });
//     }



//     connectedCallback(){
//         this.handleLoad();
        
//     }
// }