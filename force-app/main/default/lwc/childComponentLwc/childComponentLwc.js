import { LightningElement,api } from 'lwc';


export default class ChildComponentLwc extends LightningElement {
    
   // @api getValueFormParent;
    @api mydata;

    


    // fun2(){
    //     this.dispatchEvent(new CustomEvent("nameevent", {detail : {name:"John", age:31, city:"New York"}}));
    // }


    
}