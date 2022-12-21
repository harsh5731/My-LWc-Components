public class LwcTestClass {
  	@AuraEnabled(cacheable = True)
    public static void PutData(string a, string b){
        LwcTest__c lw = new LwcTest__c();
        lw.Name = a;
        lw.Password__c = b;   
        System.debug(a+b);
        upsert lw;
    } 
    @AuraEnabled(cacheable = True)
    public static List<LwcTest__c> retreiveData(){
        List<LwcTest__c> lwcList =[SELECT Name, Id, Password__c FROM LwcTest__c];
        System.debug('list>>>'+lwcList);
        return lwcList;
        
    }
   

}