@isTest
private class TestAccount {
    @TestSetup
    static void validateAccount(){
        
        Account acc = new Account(Name ='Testing', Description = 'Random Value', Industry = 'Communication');
        System.debug('Account desciption and Industry before inserting'+ acc.Description + acc.Industry);
        Insert acc;
    }
   @isTest
  static void updatingAccount(){
        
       // Account acc = [Select Id,Name From Account where Name = 'Testing' Limit 1];
       //acc.Description = 'This Updated';
       //acc.Industry = 'Chemicals';  
       //update acc;
       //System.debug('Account desciption and Industry after Trigger is fired'+ acc.Description + acc.Industry);
}

}