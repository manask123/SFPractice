trigger pract_test_1 on Account (before insert) {
  if(trigger.isBefore && trigger.isInsert) {
    AccountTriggerHandler ath = new AccountTriggerHandler();
    ath.beforeInsert(Trigger.new);

    // if(!trigger.new.isEmpty()) {
    //   for (Account acc : trigger.new) {
    //     if (acc.Phone == null)
    //     {
    //       // To show error on Phone field
    //       acc.Phone.addError( 'You cannot insert account with phone field empty');
    //       // To show general error
    //       acc.addError('You cannot insert account with phone field empty');
    //     }
    //   }
    // }
  }
}