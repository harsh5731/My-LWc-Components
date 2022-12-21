//Dog class
/*public virtual class Dog { 
    public static void dogMethod(){
        System.debug('Dog - Labrador Retriever');
    }
    public static void hieght(){
        System.debug('Hieght 22.5-24.5 inches');
    }
    public static void weight(){
        System.debug('weight 65-80 pounds');
    }
    public static void life(){
        System.debug('Life 11-13 years');
    }
    public void price(Integer a, Integer b){ 
        System.debug('Price: '+(a+b));                                                 
    }
    public void Price(Decimal a, Decimal b){
        System.debug('Price: '+(a+b));
    }
}
*/
public class Dog implements DogInterface{
    public static void dogInterfaceMethod(){
        System.debug('Dog Labrador Retriever');
    }

    public static void hieght(){
        System.debug('Hieght 22.5-24.5 inches'); 
    }
    public static void weight(){
        System.debug('Weight 65-80 pounds');
    } 
    public static void life(){
    System.debug('Life 11-13 years');
    }
    }