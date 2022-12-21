trigger UpdateTrigger on OpportunityLineItem (before insert) {
	Set<Id> oppId = new Set<Id>();
for(OpportunityLineItem oppProd:Trigger.new){
oppId.add(oppProd.OpportunityId);
}
List<OpportunityLineItem> oppProdListTOUpdate = new List<OpportunityLineItem>();
//Map of Opportunity Id and SeralNo of OpportunityLineIte
Map<Id,String> oppIdSerialNoMap =new Map<Id,String>();
List<OpportunityLineItem> oppProdList=[Select Id,SerialNo__c,OpportunityId from OpportunityLineItem where OpportunityId=:oppId];
if(oppProdList.size()>0){
for(OpportunityLineItem oppoPrd:oppProdList){
if(oppoPrd.SerialNo__c!=null){
//Getting the last number of the SerialNo field
String lastword = oppoPrd.SerialNo__c.right(1);
//converting String into Integer so that I can increment the lastnumber which is already there in SerialNo field
Integer num = Integer.valueOf(lastword);
num++;
//appending the incremented number
oppoPrd.SerialNo__c=oppoPrd.SerialNo__c+','+(num);
oppProdListTOUpdate.add(oppoPrd);
//adding it to Map so that i can make changes for the OpportunityLineItem which is newly getting inserted
oppIdSerialNoMap.put(oppoPrd.OpportunityId,oppoPrd.SerialNo__c);
}
else{
//if the SerialField is null then it means there is no OpportunityLineItem present so by default we are passing 1
oppoPrd.SerialNo__c='1';
oppProdListTOUpdate.add(oppoPrd);
}
}
}
if(oppProdListTOUpdate.size()>0){
update oppProdListTOUpdate;
}
for(OpportunityLineItem oppProd:Trigger.new){
    
/*Checking if the OpportunityId of newly inserting OpportunityLineItem is present in the Map
If present we are passing that SerialNo to the newly inserting OpportunityLineItem else we are just adding 1 because
this is the first OpportunityLineItem getting added*/
    
if(oppIdSerialNoMap.containsKey(oppProd.OpportunityId)){
oppProd.SerialNo__c = oppIdSerialNoMap.get(oppProd.OpportunityId);
}
else{
oppProd.SerialNo__c='1';
}
}
}