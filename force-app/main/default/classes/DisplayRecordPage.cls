public class DisplayRecordPage {

    public static List<Account> retreiveData(String a){
        List<Account> accList =[SELECT Name, Id FROM Account Where Id =:a];
        return accList;
}
    
}