import { LightningElement, api } from 'lwc';

export default class Child1Component extends LightningElement {
  @api c1v="kamarapu"
  @api fromParent = '';
}