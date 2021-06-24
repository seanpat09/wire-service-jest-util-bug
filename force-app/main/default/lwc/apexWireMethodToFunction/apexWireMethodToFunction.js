import { LightningElement, wire, api } from 'lwc';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import getAccountList from '@salesforce/apex/ContactController.getAccountList';

export default class ApexWireMethodToFunction extends LightningElement {
    _accounts;
    _contacts;
    error;

    @api
    get accounts() {
        return this._accounts;
    }

    @api
    get contacts() {
        return this._contacts;
    }

    @wire(getContactList)
    wiredContacts({ error, data }) {
        if (data) {
            this._contacts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this._contacts = undefined;
        }
    }

    @wire(getAccountList)
    getAccountList({ error, data }) {
        if (data) {
            this._accounts = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this._accounts = undefined;
        }
    }
}
