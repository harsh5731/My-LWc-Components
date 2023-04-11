import { LightningElement,track,wire} from 'lwc';

import {CurrentPageReference} from 'lightning/navigation';

import {fireEvent} from 'c/pubsub';

export default class ParentPublisher extends LightningElement {

    @track pageRef;
    data ;
    @wire(CurrentPageReference)pageRef;
    
    
    handleChange(event){
        console.log('this is page ref',this.pageRef);
        this.data = event.target.value;
        console.log('the data is -->',this.data);

        fireEvent(this.pageRef,"parentPublisher",this.data);

    }

}