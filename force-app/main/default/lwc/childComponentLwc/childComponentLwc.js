import { LightningElement,api } from 'lwc';


export default class ChildComponentLwc extends LightningElement {

    thirdchilddata;
    string = "This String from child";


    // fun1(e){
    //     console.log(e.target.value);
    //     this.childData = e.target.value;
    // }

    showChildData(event){
        this.thirdchilddata = event.detail;
        console.log(this.thirdchilddata);
        this.fun2();

    }
    


    fun2(event){

        this.dispatchEvent(new CustomEvent("getdata",
        {detail: this.thirdchilddata}));
        console.log('after dispatch first child');
    }

    @api
    childfunction(str){
        
        console.log("this is child ->"+ str);
        
        
    }


    
}