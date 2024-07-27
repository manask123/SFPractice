public with sharing abstract class pracla1 {
    

    //protected void promed() {}

    public void pramed() {
        Account[] aclist = [select id, name from account WITH SECURITY_ENFORCED limit 5];
        
        for(account a: aclist) {
            system.debug('Id: '+ a.id +', Name: '+ a.name);
        }
    }
}