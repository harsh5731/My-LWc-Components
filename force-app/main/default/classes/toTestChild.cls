public class toTestChild {
    public static void toChildAccount()
    {
        List<Account> acctList = new List<Account>();
        acctList = [Select name,Id from Account];
        List<Account> acctListParent = new List<Account>();
        for(Integer i =0; i<acctList.size();i++)
        {
            acctListParent = [Select  name,Id from Account where parentId =: acctList[i].id];
        }
        List<Account> acctFrndAccount = new List<Account>();
        acctFrndAccount =[Select Name,Id from Account where parentId != null];
        System.debug('All Accounts--->'+acctList);
        System.debug('All Childs Accounts-->'+acctListParent);
        System.debug('All frnd Accounts--->'+acctFrndAccount);
    }

}