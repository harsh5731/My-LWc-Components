import { LightningElement,track } from 'lwc';

import sendValues from '@salesforce/apex/CustomSettings.updateField';
import CustomLabel from '@salesforce/label/c.TaskHarshLable';

export default class CustomSettings extends LightningElement {

    @track isTriggerChecked = false;
    @track isEmailChecked = false;

    
    label = CustomLabel;    
    

    fun1(){
        console.log(this.label);
    }
    checkbox1Value(e){

        console.log("Button 1 is checked");
        this.isTriggerChecked = !this.isTriggerChecked;
        console.log(this.isTriggerChecked);

    }
    checkbox2Value(e){
        console.log("Button 2 is checked");
        this.isEmailChecked = !this.isEmailChecked;
        console.log(this.isEmailChecked);


    }

    sendValues(){
        console.log("Button is Clicked");
        sendValues({a:this.isTriggerChecked, b:this.isEmailChecked}).
        then(result=>{
            console.log("Success==>"+result);

        }).catch(error=>{
            console.log("Error=>"+error);
        });

    }
}