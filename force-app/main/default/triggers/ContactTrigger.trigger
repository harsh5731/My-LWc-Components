trigger ContactTrigger on Contact (before insert) {
    Map<String, Contact> emailMap = new Map<String, Contact>();
    for(Contact con : trigger.new) {
        if(trigger.isInsert) 
            emailMap.put(con.Email,con);
    }
    List<Contact> existContactList = [Select Id, Email FROM Contact Where Email IN:emailMap.keySet()];
    if(existContactList.size()> 0){
        for(Contact conRec : existContactList){
            if(emailMap.containsKey(conRec.Email))
                trigger.new[0].addError('Your Contact Email already exists in system.');  
        }
    }

}