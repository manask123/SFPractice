import { LightningElement, api, wire } from 'lwc';
import { subscribe, unsubscribe, MessageContext } from 'lightning/messageService';
import PubsubChannel from '@salesforce/messageChannel/PubsubChannel__c';


export default class SubscriberComponent extends LightningElement {
  @api subVal = 'Kamarapu';
  fromPub = '';
  subscription = null;

  @wire(MessageContext) messageContext;

  connectedCallback() {
    this.handleSubscriber();
  }

  disconnectedCallback() {
    this.handleUnsubscribe();
  }


  handleSubscriber() {
    if (!this.subscription) {
        this.subscription = subscribe(this.messageContext, PubsubChannel, (message) => {
        this.fromPub = message.name;
      });
    }
  }

  handleUnsubscribe() {
    if (this.subscription) {
      unsubscribe(this.subscription);
      this.subscription = null;
    }
  }

}
