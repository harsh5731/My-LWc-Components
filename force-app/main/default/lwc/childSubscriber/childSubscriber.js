import { LightningElement, wire } from 'lwc';
import { CurrentPageRefrence } from 'lightning/navigation';
import { registerListener } from 'c/pubsub';

export default class ChildSubscriber extends LightningElement {

    @wire(CurrentPageRefrence) pageRef;
    viewMessage = '';

    // @wire(CurrentPageRefrence)
    // wiredPageRef(pageRef) {
    //     console.log(this.showData);
    //     this.pageRef = pageRef;
    //     if (this.pageRef) registerListener("parentPublisher", this.showData, this);
    // }

    connectedCallback() {
        console.log('the data is->', this.showData);
        registerListener("parentPublisher", this.showData, this);
    }

    showData(data) {
        this.viewMessage = data;

    }



}