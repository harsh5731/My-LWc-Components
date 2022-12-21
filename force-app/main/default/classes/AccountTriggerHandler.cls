public class AccountTriggerHandler {
   /* public static void insertEmail(Map<Id,Account> accMap)
    {
        List<Contact> conList = new List<Contact>();    
        for(Account objAcc : accMap.values())
        {
            Contact objCon = new Contact(); 
            objcon.Lastname = objAcc.Name;                     
            objCon.AccountId = objAcc.Id;
            if(objAcc.Industry.equals('Agriculture')){ 
                objCon.Email='test1233@gmail.com';
            }
            conList.add(objCon);
        } 
        if(conList.size()>0)
            insert conList;   
    }*/
	/*public static void updateAccountWebsite(Map<Id,Account> newAcc,Map<Id,Account> oldAcc){
        for(Account objAcc : newAcc.values()){
          /*  if(oldAcc!=null && oldAcc.get(objAcc.Id)!=null && objAcc.rating!= oldAcc.get(objAcc.Id).rating) {
                objAcc.Website ='test';
                
            }*/
           /* if(oldAcc!=null && oldAcc.get(objAcc.Id)!= null && objAcc.type == 'other')
               //oldAcc.get(objAcc.Id).type.equals('Prospect'))
               {
                objAcc.Industry = 'Bussiness';
            }
            
}
        }
    }
}*/
           
            
            Public static void CreateRelatedOpp(List<Account>newList){
                
                List<Opportunity> oppToBeInserted = new List<opportunity>();
                
                For(Account acc : newList){
                    Opportunity opp = new Opportunity();
                    opp.Name = acc.Name;
                    opp.AccountId = acc.Id;
                    opp.StageName = 'Prospecting';
                    opp.CloseDate = System.today();
                    oppTOBeInserted.add(opp);
                }
                if(!oppToBeInserted.isEmpty()){
                    insert oppToBeInserted;
                }
            }
}