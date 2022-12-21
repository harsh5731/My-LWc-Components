public class UpdateAcc {
    public static Void updateDes(){
        List<Account> AccountObj=new List<Account>();
for(Account acccs:[select Id, Name, Description from account])
{
    if(acccs.Description == null){
    acccs.Description = acccs.Name + 'Description updated';
    AccountObj.add(acccs);
    }
}
update AccountObj;

        
    }


}