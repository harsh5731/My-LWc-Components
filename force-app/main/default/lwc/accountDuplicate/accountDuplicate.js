import { LightningElement, track, wire } from 'lwc';

import getAccountList from '@salesforce/apex/accountDuplicate.getDuplicateAccount';
import getUniqueAccounts from '@salesforce/apex/accountDuplicate.getUniqueAccounts';


const column = [
    { label: 'Account Name', fieldName: 'Name', type: 'text' },
];

export default class AccountDuplicate extends LightningElement {

    @track showModal = false;
    columns = column;
    @track showdatatable = false;
    groupedData;
    duplicateAccounts = [];
    @track showAccounts = [];
    @track uniqueAccounts = [];
    @track accounts = [];
    @track selectedAccountId;
   
   
    @wire(getUniqueAccounts)
    wiredUniqueAccounts({ error, data }) {
        if (data) {
            this.uniqueAccounts = data;
            console.log('This is unique Accounts-->',this.uniqueAccounts);
        } else if (error) {
            console.error(error);
        }
    }


    @wire(getAccountList)
    wiredGetAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
            console.log('Account List-->', this.accounts);
            this.accounts = this.accounts.map(account => ({
                ...account,
                IsDuplicate: false
            }));
            this.groupedData = this.groupData(data);
            console.log("Grouped Data-->", this.groupedData);
            this.duplicateAccounts = this.accounts.map(account => ({ ...account }));
        } else if (error) {
            console.error(error);
        }
    }

    groupData(data) {
        const groups = {};
        data.forEach(row => {
            const groupName = row.Name;
            groups[groupName] = groups[groupName] || [];
            groups[groupName].push(row);
        });
        return Object.keys(groups).map(groupName => {
            const group = groups[groupName];
            return {
                Id: group[0].Id,
                Name: groupName,
                options: this.getDuplicateAccountOptions(group)
            };
        });
    }

    getDuplicateAccountOptions(group) {
        const options = [{ label: 'None', value: '' }];
        group.forEach(row => {
            if (row.Id !== undefined) {
                options.push({ label: row.Name, value: row.Id });
            }
        });
        return options;
    }

    updateDuplicateAccountOptions(row) {
        const accountIndex = this.duplicateAccounts.findIndex(x => x.name === row.Name);
        const options = this.duplicateAccounts[accountIndex].options;
        const combobox = this.template.querySelector(`[data-id="${row.Id}"]`);
        combobox.options = options;
    }

    handleClick() {
        console.log("button is Clicked");
        this.showModal = true;
        //  console.log('op 1',this.accList);
        console.log('op 2', this.accountNames);

    }

    hideModalBox() {
        this.showModal = false;
        this.duplicateArrayIds = [];
        this.duplicateArray = [];
    }

    handleSave() {
        this.showModal = false;
        this.showdatatable = true;
    }


    handleDuplicateAccountChange(event) {
            // Get the row Id from the data-id attribute on the combobox element
            const rowId = event.target.dataset.id;
            console.log('this is the rowId-->', rowId);
          
            const selectedValue = event.target.value;
            console.log('this is selected Value-->', selectedValue);
          
            const accountIndex = this.accounts.findIndex(x => x.Id === rowId);
            console.log('this is account index-->', accountIndex);
          
            this.accounts[accountIndex].IsDuplicate = selectedValue;
            console.log('this is accounts after change-->', this.accounts);
          
            // Create a new array to store the updated unique accounts
            const updatedAccounts = [];                                                                                                                                                                                                                                                                                                                   
            // Loop through each account in the uniqueAccounts array
            for (let uniqueAccount of this.uniqueAccounts) {
              // Check if the Name of the current uniqueAccount matches the Name of the selected account
              if (uniqueAccount.Name === this.accounts[accountIndex].Name) {
                // If there's a match, push the selected account into the updatedAccounts array
                updatedAccounts.push(this.accounts[accountIndex]);
                console.log('Replaced Account:', this.accounts[accountIndex]);
              } else {
                // If there's no match, push the uniqueAccount into the updatedAccounts array
                updatedAccounts.push(uniqueAccount);
              }
            }
          
            // Update the this.uniqueAccounts array to the updatedAccounts array
            this.uniqueAccounts = updatedAccounts;
            console.log('This is updated Accounts-->', this.uniqueAccounts);

    }
}
        