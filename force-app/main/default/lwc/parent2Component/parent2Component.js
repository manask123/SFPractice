import { LightningElement, api } from 'lwc';

export default class Parent2Component extends LightningElement {
  @api p2v = "Manas";

  fromChildFName = '';  //giving error if it is @api
  fromChildLName = '';  //giving error if it is @api
  
  handleFromChild(event) {
    this.fromChildFName = event.detail.fname;
    this.fromChildLName = event.detail.lname;
  }
}