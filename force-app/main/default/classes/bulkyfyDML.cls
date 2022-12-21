public class bulkyfyDML {
    public static void BulkyMethod(){
  
        List<Account> accList = new List<Account>();
        for(Integer i=0; i<200;i++){
            Account ac = new Account();
            ac.Name = 'Test';
            accList.add(ac);
        }
        database.insert(accList);
        system.debug(accList);
    }
}