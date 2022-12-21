trigger AccTrigger1 on Account (before insert, before update) {
    Set<Id> setAccOwner = new Set<Id>();
  for(Account acc : Trigger.new)
  { 
   setAccOwner.add(acc.ownerId);
   }
		
    Map<Id,User> userMap = new Map<Id,User>([SELECT Name FROM User WHERE Id IN: setAccOwner]);
 for(Account acc : Trigger.new)
 {
   User usr = userMap.get(acc.ownerId);
   acc.Sales_Rep__c = usr.Name;
    } 

}