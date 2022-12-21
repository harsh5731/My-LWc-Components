public class undeleteRecords {
    public static void undeleteAccount(){
        List<Account> acc = [SELECT Id,Name FROM Account WHERE Name='Test'All Rows];
        undelete acc;
        System.debug('acc>>'+acc);
    }
}