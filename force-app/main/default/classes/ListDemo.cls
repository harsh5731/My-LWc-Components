public class ListDemo {
    public void ListMethod(){
        List<String> strList = new List<String>();
      	
        //add element to list
        strList.add('India');
        strList.add('Usa');
        
        //add element at index
        strList.add(1,'Uk');
        
        System.debug('strList =>'+ strList);
        
    }
    

}