public with sharing class GetAccountList {
    @AuraEnabled(cacheable=true)
    public static List<Account> accList(Integer iv1,Integer iv2){
        try {
            Integer iv3=iv1+iv2;
            System.debug('-------'+iv3);
            return [SELECT Id,Name FROM Account limit :iv3];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}