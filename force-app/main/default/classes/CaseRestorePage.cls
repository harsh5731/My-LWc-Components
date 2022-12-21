public class CaseRestorePage {
      @AuraEnabled(cacheable=true) 
    public static List<CaseGameType__c> getCustomSettings(){
        return [Select Name, GameTypes__c from  CaseGameType__c];
         
    }
    

}