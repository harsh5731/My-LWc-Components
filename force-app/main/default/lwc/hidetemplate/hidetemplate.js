import { LightningElement,track } from 'lwc';

export default class ShowHide extends LightningElement {
    @track myvar = true;

    fun1(event){
        if(this.myvar == true){
            this.myvar = false;
        }
        else{
            this.myvar = true;

        } 

    }
    
}