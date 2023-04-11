import { LightningElement, wire } from 'lwc';
import getAccounts from '@salesforce/apex/LWCclass.getDuplicateAccount';

export default class AccountPicker extends LightningElement {
    groupedData;
    duplicateAccounts = [];

    @wire(getAccounts)
    wiredGetAccounts({ error, data }) {
        if (data) {
            this.groupedData = this.groupData(data);
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

    handleDuplicateAccountChange(event, accountName) {
        const value = event.target.value;
        const     accountIndex = this.duplicateAccounts.findIndex(x => x.name === accountName);
        if (value) {
            const account = { name: accountName, value: value };
            if (accountIndex === -1) {
                this.duplicateAccounts.push(account);
            } else {
                this.duplicateAccounts[accountIndex] = account;
            }
        } else {
            if (accountIndex !== -1) {
                this.duplicateAccounts.splice(accountIndex, 1);
            }
        }
        this.groupedData.forEach(group => {
            if (group.Name === accountName) {
                group.options = this.getDuplicateAccountOptions(group);
                this.updateDuplicateAccountOptions(group);
            } else {
                const accountIndex = this.duplicateAccounts.findIndex(x => x.name === group.Name);
                if (accountIndex !== -1) {
                    const options = this.duplicateAccounts[accountIndex].options;
                    group.options = options;
                    this.updateDuplicateAccountOptions(group);
                }
            }
        });
    }
    
}