public with sharing class AccountController {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList(){
        try {
            return [SELECT Id,Name,Active__c FROM Account WHERE Active__c = 'Yes'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
  }