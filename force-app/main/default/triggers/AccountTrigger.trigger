trigger AccountTrigger on Account (before insert, before update) {
    
   if(Trigger.isUpdate){   
        for(Account acc : Trigger.new)
        {
            if(acc.Industry != null && acc.Industry != Trigger.oldMap.get(acc.Id).Industry)              
                acc.Description = acc.Industry;
        }   
    }		
     if(Trigger.isInsert){   
        for(Account acc : Trigger.new)
        {       
            	if(acc.Industry != null)
                acc.Description = acc.Industry;
        }   
    }	




}