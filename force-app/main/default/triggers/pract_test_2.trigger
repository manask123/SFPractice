trigger pract_test_2 on Account (after insert, after update) {
  if(Trigger.isUpdate && Trigger.isAfter) {
    AccountTriggerHandler ath = new AccountTriggerHandler();
    ath.afterUpdate(Trigger.old, Trigger.new);
  } else if(Trigger.isInsert && Trigger.isAfter) {
    AccountTriggerHandler ath = new AccountTriggerHandler();
    ath.afterInsert(Trigger.new);
  }
}