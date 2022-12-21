public class updateContact {
    public static void updateCon(){
        List<Contact> conList = [select LastName from Contact where LastName ='Sharma'];

        for(Contact con:conList){
    con.LastName = con.LastName + 'Updated';
        }

Contact c1=new Contact(LastName = 'Gangwar'  + 'updated');

conList.add(c1);
upsert conList;

        
    }

}