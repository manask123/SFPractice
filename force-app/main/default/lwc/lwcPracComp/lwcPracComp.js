import { LightningElement, api, track, wire } from 'lwc';
import { getFieldValue, getRecord } from 'lightning/uiRecordApi';
import LEADNAME from '@salesforce/schema/Lead.Name';
import LEADPHONE from '@salesforce/schema/Lead.Phone';

export default class LwcPracComp extends LightningElement {
  firstName = 'Manas';
  lastName = 'K';
  counter = 0;

  @api recordId;
  //@api Name;

  @track trTest = {'v1':0,'v2':0};
  @track leadRec;

  get counterVal() {
    return this.counter;
  }

  set counterVal(action) {
    if(action === 'plus') {
      this.counter++;
    } else if(action === 'minus') {
      this.counter--;
    }
  }

  // @wire (getRecord, { recordId: "$recordId", fields: [LEADNAME,LEADPHONE]})
  // leadRec;

  @wire(getRecord, {recordId:'$recordId', fields: [LEADNAME,LEADPHONE]})
  wireLead({data, error}) {
    if(data) {
      this.leadRec = data;
    }
    else {
      this.leadRec = undefined;
    }
  }

  get recordName() {
    if(this.leadRec) {
      return getFieldValue(this.leadRec.data,LEADNAME);
      //return this.leadRec.fields.LEADNAME.value;
    }
    return '';
  }

  get recordPhone() {
    if(this.leadRec && this.leadRec.data) {
      return getFieldValue(this.leadRec.data, LEADPHONE);
    }
    return '';
  }

  handlePlus() {
    this.counterVal = 'plus';
    this.trTest.v1 = this.counterVal;
  }

  handleMin() {
    this.counterVal = 'minus';
    this.trTest.v2 = this.counterVal;
  }
}