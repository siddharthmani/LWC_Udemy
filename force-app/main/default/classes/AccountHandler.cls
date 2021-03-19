public with sharing class AccountHandler {
    /*@AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){
        return [SELECT Id, NAME, Phone, Website FROM Account LIMIT 10];
    }*/
    //Adding Comments
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(Integer numberOfRecords){
        return [SELECT Id, NAME, Phone, Website FROM Account LIMIT : numberOfRecords];
    }
}
