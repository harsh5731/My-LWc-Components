global class scheduledBathable implements Schedulable {

global void execute (SchedulableContext sc) {
batchExample be = new batchExample();
database.executeBatch (be,10);
}
}