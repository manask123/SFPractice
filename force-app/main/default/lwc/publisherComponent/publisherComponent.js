import { publish, MessageContext } from 'lightning/messageService';
import { LightningElement, api, wire } from 'lwc';
import PubsubChannel from '@salesforce/messageChannel/PubsubChannel__c';

export default class PublisherComponent extends LightningElement {
  @api pubVal = 'Manas';
  name = '';

  @wire (MessageContext) messageContext;

  handleChange(event) {
    this.name = event.target.value;
    
    let payload = {name: this.name};
    publish(this.messageContext, PubsubChannel, payload);
  }
}