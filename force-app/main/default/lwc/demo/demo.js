import { LightningElement, track } from 'lwc';

export default class ParentComponentwithChildNestingIteration extends LightningElement {
    //myData;
    //error;
    str;
     i = 0;
    @track a = [];
    personObject = {
        Name:"John doe",
        Age:55
    }


    fun1(event){
        console.log("Button is Pressed");
        let k=1;
        this.a.push(k);
        console.log(this.a);
    }
    
}

















// import { LightningElement, track, api, wire } from 'lwc';
// import PutData from '@salesforce/apex/LwcTestClass.PutData';
// import retreiveData from '@salesforce/apex/LwcTestClass.retreiveData';
// export default class Demo extends LightningElement {
//   @track str = 'harsh';
//   @track str1 = 'harsh';
//   @track Result ;
//   @track Result1=true ;

//   value = "This value is Form Parent";


//   @track str3 = 'akhilesh';


// @api str2 = 'Demo';

// fun1(event){
//     // console.log("Button is Pressed");
//     this.str = event.target.value ;
//     console.log(this.str);
// }
// fun2(event){
//     this.str1 = event.target.value;
//     console.log(this.str1);
// }
// @wire(retreiveData)
// wiredAccount({ error, data }) {
//     if (data) {
//         this.Result = data;
//        // this.record = data;
//        // this.error = undefined;
//        console.log('data',data);
//     } else if (error) {
//         //this.error = error;
//         //this.record = undefined;
//         this.Result1=false;
//         console.log('error',error);
//     }
// }

// fun1(event)
// {
//     console.log("Button Pressed"+event.detail.name);
// }
// Function1(event) {
//     //this.Result = this.str*this.str1;
//     PutData({a:this.str, b:this.str1}).then(
//         (result)=>{
//       console.log(result);
//         }
//           ).catch((error)=>{
//       console.log(error);
//           });
// }

// Function2(event){
//         //this.Result = this.str*this.str1;
//         retreiveData({a:this.str}).then((result)=>{
//             console.log('Result>>',result[0].Name);        
//         }).catch((error)=>{
//             console.log(error);
//         });
//     // console.log(this.Result);
    
// }
// Sum(event) {
//     this.Result = parseInt(this.str) + parseInt(this.str1);
//     console.log(this.Result);
    
// }
// Sub(event) {
//     this.Result = this.str-this.str1;
//     console.log("Sub->"+this.Result);
    
// }

// handleOnChange(event) {
//     const keyword = event.target.value;
//     if (keyword != null && keyword.length >0) {
//         findAccList({ keyword })
//             .then((result) => {
//                 this.myData = result;
//                 this.error = undefined;
//             })
//             .catch((error) => {
//                 this.error = error;
//                 this.myData = undefined;
//             });
//     }
//     else{
//         this.myData = undefined;
//     }

// }