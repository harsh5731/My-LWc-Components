public class CustomerOperations{
    public static Double giveDiscount(Integer price){
     Double discount = 0.1;
     Double finalPrice = 0;
   
        finalPrice = price - discount * price;
        return finalPrice;
    }
}