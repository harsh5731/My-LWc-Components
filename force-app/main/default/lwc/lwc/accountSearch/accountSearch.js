import { LightningElement, track, wire } from 'lwc';

import getAccounts from '@salesforce/apex/accountSearch.getAccounts';

import { NavigationMixin } from "lightning/navigation";

export default class AccountSearch extends LightningElement {

    @track findProds;
    @track records = [];
    @track accountId;
    @track openRedordPage = false;


    @wire(getAccounts)
    wiredAccs({ data, error }) {
        if (data) {
            this.records = data;
            this.initialRecords = data;
            console.log(this.records);
        }
        else {
            this.error = error;
        }

    }

    handleChange(event) {
        const searchKey = event.target.value.toLowerCase();
        console.log(searchKey);
        if (searchKey) {
            this.records = this.initialRecords;
            if (this.records) {
                let recs = [];
                for (let rec of this.records) {
                    let valuesArray = Object.values(rec);
                    console.log('object.values::', Object.values(rec));

                    for (let val of valuesArray) {

                        if (val) {

                            if (val.toLowerCase().includes(searchKey)) {

                                recs.push(rec);

                                break;

                            }

                        }

                    }

                }

                console.log('recs are', JSON.stringify(recs));

                this.records = recs;

            }

        }

        else {

            this.records = this.initialRecords;

        }

    }

    handleEdit(event) {

        this.accountId = event.target.dataset.id;

        console.log('selected Account:', this.accountId);

        const config = {

            type: "standard__recordPage",

            attributes: {

                recordId: this.accountId,

                objectApiName: "Account",

                actionName: "edit"

            }

        };

        this[NavigationMixin.Navigate](config);

    }

    showModal(event) {

        this.accountId = event.target.dataset.id;

        this.openRedordPage = true;

        // this.accountId = event.target.dataset.id; 

        // console.log('selected Account:', this.accountId); 

        // const config = { 

        // type: "standard__recordPage", 

        // attributes: { 

        // recordId: this.accountId, 

        // objectApiName: "Account", 

        // actionName: "view" 

        // } 

        // }; 

        // this[NavigationMixin.Navigate](config); 

    }

    closeModal() {

        this.openRedordPage = false;

    }

}