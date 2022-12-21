public class ERRClass {
    public static void getException()
    {
       Account objAcc = new Account();
        
        try {
            insert objAcc;
        } 
        catch(DmlException e)
        {
            System.debug(e.getTypeName() +' --> The following exception has occurred: ' + e.getMessage());
        }
        
        try{
            Account acc; 
            acc.Name = 'Test Name';
        }
        catch(NullPointerException e) {
            System.debug(e.getTypeName() +' --> The following exception has occurred: ' + e.getMessage());
        }
        
        try
        {    List<String> bikeList = new List<String>();
         bikeList.add('Ninja H2R');
         String str1 = bikeList[0];
         String str2 = bikeList[1]; 
        }
        catch(ListException e)
        {
            System.debug(e.getTypeName() +' --> The following exception has occurred: '+ e.getMessage());
        }   
        
        try{
            Positions__c pos = [SELECT Id,Name FROM Positions__c WHERE Name='Salesforce Developer'];         
        }
        catch(QueryException e)
        {
            System.debug(e.getTypeName() +' --> The following exception has occurred: ' + e.getMessage());                 
        }
        
        try{
            Positions__c pos = [SELECT Id,Name FROM Positions__c WHERE Name='Salesforce Developer'];         
        }
        catch(Exception e)
        {
            System.debug(e.getTypeName() +' --> The following exception has occurred: ' + e.getMessage());                 
        }
        
    }          

}