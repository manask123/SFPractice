import { LightningElement, api } from 'lwc';

export default class Child2Component extends LightningElement {
  @api c2v = "Kamarapu"

  c2InputVal = ''
  c1v = '';
  c2v = '';
  
  handleChange(event) {
    if(event.target.name == 'fname'){
      this.c1v = event.target.value;
    }
    else if(event.target.name == 'lname'){
      this.c2v = event.target.value;
    }

    const enteredValue = new CustomEvent('sendtoparent',{detail:{fname: this.c1v, lname: this.c2v}});
    this.dispatchEvent(enteredValue);
  }
}
