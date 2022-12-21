trigger AccountOppTrigger on Account (before update) {
    Set<Id> accId=new Set<Id>();
	for(Account acc:Trigger.new){

	acc.Total_Opportunity_Amount__c=0;
	accId.add(acc.Id);
	}
    Map<Id,Double> amountMap = new Map<Id,Double>();
	List<AggregateResult> results=[select AccountId,sum(Amount)TotalAmount from opportunity where AccountId in :accId group by AccountId];
	if(results.size()>0){
	for(AggregateResult a: results){
	Id accountId = (Id)a.get('AccountId');
    double TotalAmount = (double)a.get('TotalAmount');
	amountMap.put(accountId,TotalAmount); 
}
}
    for(Account acc:Trigger.new){
	if(amountMap.containskey(acc.Id)){
	acc.Total_Opportunity_Amount__c=amountMap.get(acc.Id);
}
}

}