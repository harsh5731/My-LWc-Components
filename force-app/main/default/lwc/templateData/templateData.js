import { LightningElement,track } from 'lwc';

export default class TemplateData extends LightningElement {
    @track myvar = true;

    ChangeComponet(event){
        console.log('Working');
        this.myvar = !this.myvar;
    }
}