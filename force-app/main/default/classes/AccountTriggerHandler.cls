public with sharing class AccountTriggerHandler {


    public void beforeInsert(List<Account> ta){
        if(!ta.isEmpty()) {
            if(String.isEmpty(ta[0].Phone)) {
                ta[0].Phone.addError( 'You cannot insert account with phone field empty');
            }
        }
    }

    public void afterUpdate(List<Account> oldA, List<Account> newA) {
        if(!oldA.isEmpty() && !newA.isEmpty()) {
            if(oldA[0].Phone != newA[0].Phone) {
                List<Contact> contacts = [SELECT Id, Phone FROM Contact WHERE AccountId = :newA[0].id];

                if(!contacts.isEmpty()){
                    List<Contact> contactList = new List<Contact>();

                    for(Contact co: contacts) {
                        co.Phone = newA[0].Phone;
                        contactList.Add(co);
                    }
                    update contactList;
                }
            }
        }
    }

    public void afterInsert(List<Account> newA){
        if(!newA.isEmpty()) {
            
            List<Contact> contacts = [SELECT Id, Phone FROM Contact WHERE AccountId = :newA[0].id];

            if(!contacts.isEmpty()){
                List<Contact> contactList = new List<Contact>();

                for(Contact co: contacts) {
                    co.Phone = newA[0].Phone;
                    contactList.Add(co);
                }
                update contactList;
            }
            
        }
    }

}