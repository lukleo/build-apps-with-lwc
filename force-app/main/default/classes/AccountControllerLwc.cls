/**
 * @description       :
 * @author            : Lucas Santos - Accenture
 * @group             :
 * @last modified on  : 06-25-2022
 * @last modified by  : Lucas Santos - Accenture
**/
public with sharing class AccountControllerLwc {
    @AuraEnabled(cacheable=true)
    public static List<Contact> queryRelatedContacts(Id accountId) {
        return [
            SELECT Name, Title, Email, Phone
            FROM Contact
            WHERE AccountId = :accountId
        ];
    }
}