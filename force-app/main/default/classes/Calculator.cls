public class Calculator {
    public static void add()
    {
        Integer num1=10,num2=20;
        Integer sum = num1+num2;
        System.debug('the sum of two digit is:'+sum);
    }
    public static void sub()
    {
        Integer num1=10,num2=20;
        Integer sub = num1-num2;
        System.debug('the sub of two digit is: '+sub);
    }
    public static void multi()
    {
        Integer num1=10,num2=20;
        Integer mul = num1*num2;
        System.debug('the multiplication of two digit is:'+mul);
    }
    public static void div()
    {
        Integer num1=10,num2=20;
        Integer div = num1/num2;
        System.debug('the dividation of two digit is:'+div);
    }
    public static void evenodd()
    {
        Integer num = 10;
        Integer dev;
        Integer mul;
        dev = num/2;
        mul = dev*2;
        
        if (num == mul)
        {
            System.debug('The number is even');
        }
        else
            System.debug('The number is odd');
        
    }
}