import { LightningElement, wire } from 'lwc';
import GetAccountLists from '@salesforce/apex/GetAccountList.accList';


export default class WireApex extends LightningElement {
    @wire (GetAccountLists,{iv1:1,iv2:2}) accounts;
}