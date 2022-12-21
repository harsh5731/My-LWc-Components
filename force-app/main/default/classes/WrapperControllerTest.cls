@isTest
public class WrapperControllerTest {
        @isTest
    public static void testWrap(){
        List<Account> accList=new List<Account>();
        for(integer i=1;i<=5;i++){
            Account acc= new Account();
            acc.Name='Test '+i;
            accList.add(acc);
        }
        Database.insert(accList);
   wrapperController.getWrapperClassList();
   
    }

}