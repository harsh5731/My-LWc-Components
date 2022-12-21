global class batchExample implements Database.Batchable<sObject> {

    global Database.QueryLocator start(Database.BatchableContext BC) {
        // collect the batches of records or objects to be passed to execute
        
        String query = 'SELECT Id,Name FROM Account';
        return Database.getQueryLocator(query);
    }
          

    global void execute(Database.BatchableContext BC,List <Account> accList) {
        //Account acc = [SELECT id,Name FROM Account];
        System.debug(accList);
        for(Account acc : accList){
            System.debug('account ' + acc);
            
            System.debug('splitted name ' + String.valueOf(acc.Name).split(' '));
            List<String> a = String.valueOf(acc.Name).split(' ');
            for(Integer i = a.size() -1 ; i > 0; i--){
                
                System.debug('sg ' + a[i]);
                if(a[i] == 'Test'){
                    a.remove(i);
         
                }
            }
            acc.Name = String.join(a, ' ');
        }
        System.debug('acList updated ' + accList);
        Database.update(accList, false);
        
    }   
    
    global void finish(Database.BatchableContext BC) {
        // execute any post-processing operations
  }
}