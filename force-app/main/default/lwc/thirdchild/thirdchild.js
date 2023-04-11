import { LightningElement,api } from 'lwc';


export default class ChildComponentLwc extends LightningElement {

    thirdchildData;

    handelChange(event){
        this.thirdchildData = event.target.value;
        console.log(this.thirdchildData);
    }

    sendData(){
         
        this.dispatchEvent(new CustomEvent("senddata", {detail:this.thirdchildData}));
        console.log("after dispatching the Data of third child");
    }




}