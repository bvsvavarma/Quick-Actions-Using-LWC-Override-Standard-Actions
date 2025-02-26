import { LightningElement, api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import { CloseActionScreenEvent } from "lightning/actions";
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class ScreenQuickAction extends LightningElement {
    @api recordId;
    @api objectApiName;

    fields = {
        accountName : NAME_FIELD,
        accountIndustry : INDUSTRY_FIELD
    };

    closeModal(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    successHandler(){
        this.showToast();
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message:
                'Record Saved successfully.',
            variant : "success",
        });
        this.dispatchEvent(event);
    }
}