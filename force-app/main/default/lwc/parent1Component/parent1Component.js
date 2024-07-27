import { LightningElement, api } from 'lwc';

export default class Parent1Component extends LightningElement {
  @api p1v = 'Manas';
  p1InputVal = '';  //giving error if it is @api

  handleChange(event) {
    this.p1InputVal = event.target.value;
  }
}