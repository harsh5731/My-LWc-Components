public class DataTypeDemo {
    Boolean b;
    public void methodDemo(){
        //sObject
       //Account acc = new Account();
       // acc.Name = 'Test';
       // acc.phone = '1234567';
		//System.debug('Account = '+ acc);
		//generic sObject
		sObject obj = new Account(Name='Test');        
		Account acc = (Account)obj;
        System.debug('Account =' + acc);
    }

}