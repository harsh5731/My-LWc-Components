import { LightningElement,track,api } from 'lwc';

export default class PracticeLwc extends LightningElement {
//     @track searchValue;

//     handleSearchValue(event){
//         this.searchValue = event.detail;
// }    
    @track str ;
    @track str2;
    @api str3= '';
    @api show = false;


    handleChanheNum1(e){
        this.str=e.target.value;
        console.log(this.str);
    }
    handleChanheNum2(e){
        this.str2=e.target.value; 
        console.log(this.str2);
    }

    Function1(e){

        this.str3=this.str+this.str2;
        console.log(this.str3);
        this.show = !this.show;
        console.log(this.show);

    }

}